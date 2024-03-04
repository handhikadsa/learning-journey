import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "yet-another-react-lightbox/styles.css";
import InstallBootstrap from "./components/InstallBootstrap"; 
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <InstallBootstrap />
        {children}
      </body>
    </html>
  );
}