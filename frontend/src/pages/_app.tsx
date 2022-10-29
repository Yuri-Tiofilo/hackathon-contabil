import { AuthProvider } from "@/contexts/AuthContext";
import { SideBarDrawerProvider } from "@/contexts/SidebarDrawerContext";
import { theme } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import "react-calendar/dist/Calendar.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <SideBarDrawerProvider>
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SideBarDrawerProvider>
    </AuthProvider>
  );
}
