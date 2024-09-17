import React from "react";
import "./globals.css";

export const metadata = {
  title: "SkyCast Weather App",
  description: "Get real-time weather updates for your city.",
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
