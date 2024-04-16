import { Inter } from "next/font/google";
import { ChakraProvider } from '@chakra-ui/react'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GitHub Login",
  description: "Generated by Tineth Pathirage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
