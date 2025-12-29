import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000" : "/";

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isCheckingAuth: true,
  isSigningUp: false,
  isLoggingIn: false,
  onlineUsers: [],

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in authCheck:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      const user = res && res.data ? res.data : null;
      if (!user) throw new Error("Invalid response from server");
      set({ authUser: user });

      toast.success("Account created successfully!");
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to sign up. Please try again.";
      toast.error(message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingUp: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      const user = res && res.data ? res.data : null;
      if (!user) throw new Error("Invalid response from server");
      set({ authUser: user });

      toast.success("Logged in successfully!");
    }
    catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to log in. Please try again.";
      toast.error(message);
    }
    finally {
      set({ isLoggingUp: false });
    }
  },
  
  logout: async (data) => {
    try {
      await axiosInstance.post("/auth/logout", data);
      set({ authUser: null });
      toast.success("Logged out without issues");
    }
    catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to log out. Please try again.";
      toast.error(message);
    }
  }
}));