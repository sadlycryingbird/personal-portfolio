import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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