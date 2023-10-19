import { Inter } from "next/font/google";

import XMTPChat from "@/components/XMTPChat";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main
           
        >
            <XMTPChat />
        </main>
    );
}
