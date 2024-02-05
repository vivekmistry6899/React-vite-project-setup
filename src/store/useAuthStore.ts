import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  loggedIn: boolean;
  loginToken: string | null;
}

export const useAuthStore = create(
  persist<AuthStore>(
    () => ({
      loggedIn: false,
      loginToken: null,
    }),
    {
      name: "admin-auth",
    }
  )
);

interface AuthStoreAction {
  setLoginToken: (loginToken: string | null) => void;
}

export const useAuthStoreAction: AuthStoreAction = {
  setLoginToken: (loginToken) => {
    useAuthStore.setState(() => ({
      loggedIn: loginToken === null ? false : true,
      loginToken: loginToken,
    }));
  },
};
