import { createContext, useContext, ReactNode } from "react";
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "../firebase"; // Asegúrate de tener tu configuración de Firebase en este archivo

// Definir la interfaz del contexto para tipar correctamente
interface AuthContextType {
  user: {
    login: boolean;
  };
  signup: (email: string, password: string) => Promise<UserCredential>; // Cambiar a Promise<UserCredential>
}

// Proporcionar un valor inicial para el contexto
export const authContext = createContext<AuthContextType | null>(null);

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Tipar children como ReactNode
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {  
  const signup = (email: string, password: string) => 
    createUserWithEmailAndPassword(auth, email, password);

  const user = { login: true }; // Puedes definir el estado del usuario aquí según tu lógica

  return (
    <authContext.Provider value={{ user, signup }}>
      {children}
    </authContext.Provider>
  );
}
