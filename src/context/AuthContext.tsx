import { createContext } from "react";

// interface AuthContextType {
//   RegisterUser: (email: string, password: string) => Promise<unknown>;
//   user: unknown | null;
//   loading: boolean;
// }

export const AuthContext = createContext<null>(null);

export default AuthContext;
