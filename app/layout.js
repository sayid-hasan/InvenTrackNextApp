import React from "react";
import ClientLayout from "./clientLayout";

export const metadata = {
  title: "InvenTrack",
  description: "Track your inventory smoothly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
