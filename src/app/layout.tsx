import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/i18n/Providers";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "中国红 · 美丽汇 | 高端美容美发沙龙",
  description:
    "中国红 美丽汇 — 美容美发、头疗、美甲、美瞳、接发、护肤、医美。艺术化空间与专业团队，定制您的美丽方案。",
  icons: {
    icon: "/images/zgh_logo.jpeg",
    apple: "/images/zgh_logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className="h-full scroll-smooth antialiased"
      data-locale="zh"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Ma Shan Zheng / Playfair / Noto SC+Khmer — 全站艺术字与多语文本 */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Ma+Shan+Zheng&family=Noto+Sans+Khmer:wght@300;400;500;600&family=Noto+Sans+SC:wght@300;400;500;600&family=Noto+Serif+SC:wght@600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=ZCOOL+QingKe+HuangYou&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
