import { ReactNode } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// The Global Layout which is used for the entire site
export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                    <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}