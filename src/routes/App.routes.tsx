import { permission } from "@/constant/permission";
import Layout from "@/layout/Layout";
import { AXIOS_REMOVE_AUTH_TOKEN } from "@/middleware/axios";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import commonRoutes from "./common.routes";
import privateRoutes from "./private/private.routes";
import publicRoutes from "./public/public.routes";
import { childrenType, routes } from "./types";

const isLogin = true;

const PrivetRoutes = () => {

  if (isLogin) {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  } else {
    return <Navigate to="/" />;
  }
};

const PublicRoutes = () => {
  if (isLogin) {
    return <Navigate to="/dashboard" />;
  } else {
    AXIOS_REMOVE_AUTH_TOKEN();
    return <Outlet />;
  }
};

const PermissionDenied = () =>{
  return (
    <div>
      permission denied
    </div>
  )
}


// no route return
const filterRoutes = (children:routes[]) => {
  return children.reduce((acc: childrenType[], child) => {
    if(child?.checkPermission == false){
      acc.push(child);
    }
    if (child?.name && permission.includes(child.name)) {
       const filteredChild = { ...child};
      if (child.children) {
        filteredChild.children = filterRoutes(child.children);
      }
      acc.push(filteredChild);
    } else {
      if (child.children) {
         const filteredNestedChildren = filterRoutes(child.children);
        if (filteredNestedChildren.length > 0) {
          acc.push({ ...child, children: filteredNestedChildren });
        }
      }else{
        const filteredChild = { ...child };
         acc.push({...filteredChild, element:<PermissionDenied/>});
        }
    }
    return acc;
  }, []);
}

const filteredRoutesPermissionBase = privateRoutes.map((obj) => {
  const children  = obj.children || [];
  const filteredChildren  = filterRoutes(children);
  return { ...obj, children: filteredChildren };
});


const AppRoutes = () => {
  return (
    <RouterProvider
      router={
        createBrowserRouter([
          ...commonRoutes,
          {
            element: <PublicRoutes />,
            children: publicRoutes,
           },
          {
            element: <PrivetRoutes />,
            children: isLogin ? filteredRoutesPermissionBase : [],
          },
        ]
        )
      }
    />
  );
};

export default AppRoutes;
