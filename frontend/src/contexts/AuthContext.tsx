import Router, { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "@/services/api";
import { setCookie, parseCookies, destroyCookie } from "nookies";
// import { recoverUserInformation } from "@/services/auth";

type ResponseApiSignIn = {
  permissions: string[];
  roles: string[];
  token: string;
  refreshToken: string;
  email: string;
};

type User = {
  email: string;
  // permissions: string[];
  // roles: string[];
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  isAuthenticated: boolean;
  user?: User;
};

interface AuthProviderProps {
  children?: ReactNode;
}

export function signOut() {
  destroyCookie(undefined, "hackathon.token");
  destroyCookie(undefined, "hackathon.refreshToken");
  Router.push("/");
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const { push } = useRouter();
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "hackathon.token": token } = parseCookies();

    if (token) {
      // recoverUserInformation().then(response => {
      //   setUser(response.user as User)
      // })
      api
        .get<ResponseApiSignIn>("/userInfo", {
          headers: {
            Authorization: `Bearer ${token}}`,
          },
        })
        .then((response) => {
          console.log(response);

          const { permissions, roles, email } = response.data;

          setUser({
            // permissions,
            // roles,
            email,
          });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      /* Sending a post request to the server with the email and password. */
      /* Sending a post request to the server with the email and password. */
      // const response = await api.post<ResponseApiSignIn>("/sessions", {
      //   email,
      //   password,
      // });

      // const { token, refreshToken, permissions, roles } = response.data;

      // setCookie(undefined, "hackathon.token", token, {
      //   maxAge: 60 * 60 * 24 * 30, // 1 mes
      //   path: "/",
      // });
      // setCookie(undefined, "hackathon.refreshToken", refreshToken, {
      //   maxAge: 60 * 60 * 24 * 30, // 1 mes
      //   path: "/",
      // });

      // console.log(response);
      setUser({
        email,
        // permissions,
        // roles,
      });

      // api.defaults.headers["Authorization"] = `Bearer ${token}`;

      push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}
