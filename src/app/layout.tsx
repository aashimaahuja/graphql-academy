import Header from "@/components/Header";
import "./globals.css";
import { ApolloWrapper } from "@/lib/apollo-wrapper";

export const metadata = {
  title: "GraphQL Academy",
  description: "GraphQL Academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="p-4 px-40 bg-white grow">
          <ApolloWrapper>{children}</ApolloWrapper>
        </div>
      </body>
    </html>
  );
}
