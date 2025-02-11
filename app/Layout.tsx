import './globals.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Khizr Fazal's Developer Portfolio",
};


// The Global Layout which is used for the entire site
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  