import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
title: "AI時短チャレンジ | 各ページへのリンク集",
description: "AI時短チャレンジのメインリンク集",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="ja">
<body>
<header className="border-b border-brand-100/70 bg-white/70 backdrop-blur">
<div className="container py-4 flex items-center justify-between">
<Link href="/online-meeting" className="font-bold text-brand-700">AI時短チャレンジ</Link>
</div>
</header>
<main className="container py-8 sm:py-12">{children}</main>
<footer className="mt-16 border-t border-brand-100/70 bg-white/60">
<div className="container py-8 text-sm leading-7 text-slate-700">
<div className="space-y-2">
<div>株式会社やまと</div>
<div>埼玉県さいたま市大宮区桜木町2-491-2 POSU OMIYA 2-201</div>
<div>メールアドレス：info@yamato-ai.com</div>
<div>
<Link href="/online-meeting/privacy" className="footer-link">プライバシーポリシー</Link>
</div>
<div className="text-slate-500 pt-2">© 2025 AI Challenge. All Rights Reserved.</div>
</div>
</div>
</footer>
</body>
</html>
);
}