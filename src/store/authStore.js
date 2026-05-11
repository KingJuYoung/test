// Simple auth store placeholder
// You can use Zustand or other libraries here

import { create } from "zustand";

const useAuthStore = create(set => ({
    token: sessionStorage.getItem("token") || null, // store에서 token값을 가져온다.
    loginId: sessionStorage.getItem("loginId"),
    login:(result) => {
        sessionStorage.setItem("token", result.token);
        sessionStorage.setItem("loginId", result.id);
        set({token: result.token, loginId: result.id});
    },
    logout: () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("loginId");
        set({token: null, loginId: null});
    }
}));

export default useAuthStore;