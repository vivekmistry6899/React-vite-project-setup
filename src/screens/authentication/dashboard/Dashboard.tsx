import { useAuthStore, useAuthStoreAction } from "@/store/useAuthStore";
import { useLoaderData } from "react-router-dom";
import useDashboard from "./useDashboard";

const Dashboard = () => {
  useAuthStoreAction.setLoginToken(null)
  const isLoggedIn = useAuthStore((state) => state.loggedIn)
  console.log(isLoggedIn);
  const dashboardData = useLoaderData();
  const { demoFunction } = useDashboard();
  console.log(demoFunction());
  console.log(dashboardData, "dashboardData");
  return <div className="text-success">Dashboard</div>;
};
export default Dashboard;

export const initDashboardData = () => {
  return {
    name: "initDashboardData",
  };
};
