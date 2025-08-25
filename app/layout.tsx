import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { NavbarComponent } from "@/components/layouts/navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CheckIn - Hệ thống quản lý check-in",
  description: "Ứng dụng quản lý check-in hiện đại và dễ sử dụng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground cursor-none`}
      >
        <SmoothCursor />
        <ThemeProvider>
          <div className="min-h-screen flex flex-col" suppressHydrationWarning>
            <NavbarComponent />

            {/* Main content */}
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
