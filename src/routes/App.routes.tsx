import Layout from "@/layout/Layout";
import { AXIOS_REMOVE_AUTH_TOKEN } from "@/middleware/axios";
import NotFound from "@/screens/not-found/NotFound";
import { Fragment } from "react";
import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { privetRoutes } from "./private/private.routes";
import { publicRoutes } from "./public/public.routes";

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

const AppRoutes = () => {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Fragment>
            {/* PrivetRoutes */}
            <Route element={<PrivetRoutes />}>
              {privetRoutes.map((item) =>
                item?.loader ? (
                  <Route
                    loader={item?.loader}
                    path={item.path}
                    element={item.component}
                  />
                ) : (
                  <Route path={item.path} element={item.component} />
                )
              )}
            </Route>

            {/* PublicRoutes */}

            <Route element={<PublicRoutes />}>
              {publicRoutes.map((item) =>
                item?.loader ? (
                  <Route
                    loader={item?.loader}
                    path={item.path}
                    element={item.component}
                  />
                ) : (
                  <Route path={item.path} element={item.component} />
                )
              )}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Fragment>
        )
      )}
    />
  );
};

export default AppRoutes;
