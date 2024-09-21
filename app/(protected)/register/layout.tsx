export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="p-8">
                <span className="font-bold text-white text-2xl">StealthStudy</span>
            </div>
            {children}
        </div>
    );
}