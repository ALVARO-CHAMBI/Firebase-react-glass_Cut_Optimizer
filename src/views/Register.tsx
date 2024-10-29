import { createContext, useContext, ReactNode, useState } from "react";
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "../firebase"; // Configuración de Firebase
import { useNavigate } from "react-router-dom";

// Definir la interfaz del contexto
interface AuthContextType {
  user: {
    login: boolean;
  };
  signup: (email: string, password: string) => Promise<UserCredential>; 
}

// Contexto de autenticación
export const authContext = createContext<AuthContextType | null>(null);

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Definir la interfaz para AuthProviderProps
interface AuthProviderProps {
  children: ReactNode;
}

// Componente AuthProvider
export function AuthProvider({ children }: AuthProviderProps) {  
  const signup = (email: string, password: string) => 
    createUserWithEmailAndPassword(auth, email, password);

  const user = { login: true }; 

  return (
    <authContext.Provider value={{ user, signup }}>
      {children}
    </authContext.Provider>
  );
}

// Función Register para registro de usuarios
function Register() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = ({ target: { name, value } }: any) => 
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await signup(user.email, user.password);
      navigate('/');
    } catch (error: any) {
      if (error.code === "auth/internal-error") {
        setError('Correo inválido');
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        name="email" 
        placeholder="abcd@gmail.com" 
        onChange={handleChange} 
      />
      <label htmlFor="password">Contraseña</label>
      <input 
        type="password" 
        name="password" 
        id="password" 
        placeholder="password" 
        onChange={handleChange} 
      />
      <button>Registrarse</button>
      {error && <p>{error}</p>}
    </form>
  );
}

// Exportación predeterminada de Register
export default Register;
