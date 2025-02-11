import './globals.css';  // Import global CSS
import { Metadata } from 'next';  // Next.js metadata

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Khizr Fazal's Developer Portfolio",
};

// The Global Layout which is used for the entire site
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Import Google Fonts (Roboto) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}