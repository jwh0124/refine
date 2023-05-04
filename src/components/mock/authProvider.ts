import type { AuthBindings } from "@refinedev/core";

export const authProvider: AuthBindings = {
  login: async ({ providerName, email }) => {
    if (email) {
      localStorage.setItem("email", email);
      return {
        success: true,
        redirectTo: "/",
      };
    }

    return {
      success: false,
      error: {
        message: "Login failed",
        name: "Invalid email or password",
      },
    };
  },
  register: async ({ email, password }) => {
    if (email && password) {
      return {
        success: true,
        redirectTo: "/",
      };
    }
    return {
      success: false,
      error: {
        message: "Register failed",
        name: "Invalid email or password",
      },
    };
  },
  updatePassword: async ({ password }) => {
    if (password) {
      //we can update password here
      return {
        success: true,
        redirectTo: "/login",
      };
    }
    return {
      success: false,
      error: {
        message: "Update password failed",
        name: "Invalid password",
      },
    };
  },
  forgotPassword: async ({ email }) => {
    if (email) {
      //we can send email with forgot password link here
      return {
        success: true,
        redirectTo: "/login",
      };
    }
    return {
      success: false,
      error: {
        message: "Forgot password failed",
        name: "Invalid email",
      },
    };
  },
  logout: async () => {
    localStorage.removeItem("email");
    return {
      success: true,
      redirectTo: "/",
    };
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
  check: async () => {
    return localStorage.getItem("email")
      ? { authenticated: true }
      : {
          authenticated: false,
          redirectTo: "/login",
          error: {
            message: "Check failed",
            name: "Not authenticated",
          },
        };
  },
  getPermissions: async () => ["admin"],
  getIdentity: async () => ({
    id: 1,
    name: "Circle Jung",
    avatar: "https://unsplash.com/photos/IWLOvomUmWU/download?force=true&w=640",
  }),
};
