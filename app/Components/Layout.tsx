import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Page Layout (Used inside specific pages, NOT app/layout.tsx)
export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
