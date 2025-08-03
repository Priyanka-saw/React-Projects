import "./globals.css";
import Cover from "@/Component/Cover";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Cover/>
        {children}
      </body>
    </html>
  );
}
