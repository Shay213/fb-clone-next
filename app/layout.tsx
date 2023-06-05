import { getServerSession } from "next-auth";
import "./globals.css";
import { Inter } from "next/font/google";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Providers from "./providers/Providers";
import Nav from "./components/nav/Nav";
import AddPostModal from "./modals/addPost/AddPostModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {session ? (
            <>
              <Nav />
              {children}
              <AddPostModal />
            </>
          ) : (
            auth
          )}
        </Providers>
      </body>
    </html>
  );
}
