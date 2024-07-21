import Sidenav from "@/components/shared/Sidenav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "B Online Market - Powered by XecureCode",
    description: "This admin is designed and developed by XecureCode.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <html>
            <body className={inter.className}>
                <div className={`${inter.className} max-w-7xl  mx-auto border-2 bg-[#e0e0e6] flex gap-2 flex-row p-1  h-screen overflow-hidden`}>

                    <Sidenav />

                    {/* right section  */}
                    <div className='p-2 flex-grow bg-white border-2 rounded-md'>
                        {children}
                    </div>


                </div>
            </body>
        </html>

    );
}
