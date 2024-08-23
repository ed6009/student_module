import "./globals.css";
import PrelineScript from "./components/PrelineScript";

export const metadata = {
  title: "Ed Tech",
  description: "Student Module",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <PrelineScript />
    </html>
  );
}
