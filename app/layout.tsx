import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "../styles/layout/layout.scss";
import "../styles/demo/Demos.scss";
import { LayoutProvider } from "./main/layout/context/layoutContext";
import ReactQueryProvider from "../utils/ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            id="theme-css"
            href={`/themes/lara-light-indigo/theme.css`}
            rel="stylesheet"
          ></link>
        </head>
        <body>
          <PrimeReactProvider>
            <LayoutProvider>{children}</LayoutProvider>
          </PrimeReactProvider>
          <ReactQueryDevtools />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
