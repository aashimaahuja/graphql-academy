import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "GraphQL Academy",
  description: "GraphQL Academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="p-4 px-40 bg-white grow">{children}</div>
      </body>
    </html>
  );
}
