import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "暖爪宠物洗护 | 专业宠物洗澡美容护理",
  description:
    "暖爪宠物洗护提供犬猫洗澡、美容修剪、SPA护理、除结梳毛、口腔耳道护理和到店预约服务。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
