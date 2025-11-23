"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";

import { toast } from "react-toastify";
import { auth } from "@/Firebase/firebase.init";

// Google Provider
const googleProvider = new GoogleAuthProvider();

// Type definitions
interface AuthContextType {
  user: User | null;
  loading: boolean;
  RegisterUser: (email: string, password: string) => Promise<User>;
  signinUser: (email: string, password: string) => Promise<User>;
  WithGoogle: () => Promise<UserCredential>;
  signout: () => Promise<void>;
  deleteUserAccount: () => Promise<void>;
  updateUserProfile: (updates: {
    displayName?: string;
    photoURL?: string;
  }) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Register with email & password
  const RegisterUser = async (
    email: string,
    password: string
  ): Promise<User> => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userCredential.user);
      toast.success("Registration successful! Please check your email.");
      return userCredential.user;
    } catch (error: any) {
      toast.error(error?.message || "Registration failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Login with email & password
  const signinUser = async (email: string, password: string): Promise<User> => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Login successful!");
      return userCredential.user;
    } catch (error: unknown) {
      toast.error(error?.message || "Login failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Google Sign In
  const WithGoogle = async (): Promise<UserCredential> => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      toast.success("Google login successful!");
      return result;
    } catch (error: unknown) {
      toast.error(error?.message || "Google sign-in failed");
      throw error;
    }
  };

  // Sign Out
  const signout = async (): Promise<void> => {
    await signOut(auth);
    toast.info("Signed out successfully");
  };

  // Delete User Account
  const deleteUserAccount = async (): Promise<void> => {
    if (!user) return;
    try {
      await deleteUser(user);
      toast.success("Account deleted permanently");
    } catch (error: unknown) {
      toast.error(
        "Failed to delete account. Re-authentication may be required."
      );
      throw error;
    }
  };

  // Update Profile
  const updateUserProfile = async (updates: {
    displayName?: string;
    photoURL?: string;
  }): Promise<void> => {
    if (!user) return;
    await updateProfile(user, updates);
    setUser({ ...user, ...updates });
    toast.success("Profile updated!");
  };

  // Reset Password
  const resetPassword = async (email: string): Promise<void> => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!");
    } catch (error: unknown) {
      toast.error(error?.message || "Failed to send reset email");
      throw error;
    }
  };

  // Auth State Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: unknown) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value: AuthContextType = {
    user,
    loading,
    RegisterUser,
    signinUser,
    WithGoogle,
    signout,
    deleteUserAccount,
    updateUserProfile,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
