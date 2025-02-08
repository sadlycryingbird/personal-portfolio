import { ReactNode } from "react";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";
import "@/styles/globals.css"; 

// The Global Layout which is used for the entire site
export default function Layout({ children }: { children: ReactNode }) {
    <html lang="en">
        <body>
            <Navbar />
                <main>{children}</main>
            <Footer />
        </body>
    </html>
}