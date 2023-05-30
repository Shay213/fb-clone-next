import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  const darkMode = false;
  const isAuth = false;
  return (
    <html lang="en" className={`${darkMode ? "dark" : ""}`}>
      <body className={inter.className}>
        {isAuth ? <div>Root layout{children}</div> : <div>{auth}</div>}
      </body>
    </html>
  );
}
