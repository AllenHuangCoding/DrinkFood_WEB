import { Metadata } from "next";
import MainLayout from "./layout/layout";

export const metadata: Metadata = {
  title: "訂餐系統",
  description:
    "The ultimate collection of design-agnostic, flexible and accessible React UI Components.",
  robots: { index: false, follow: false },
  metadataBase: new URL("http://localhost:3000"),
  // viewport: { initialScale: 1, width: "device-width" },
  openGraph: {
    type: "website",
    title: "PrimeReact SAKAI-REACT",
    url: "https://sakai.primereact.org/",
    description:
      "The ultimate collection of design-agnostic, flexible and accessible React UI Components.",
    images: ["https://www.primefaces.org/static/social/sakai-react.png"],
    ttl: 604800,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
