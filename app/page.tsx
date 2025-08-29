import Link from "next/link";


export default function Home() {
return (
<div className="space-y-6">
<h1 className="h1">AI時短チャレンジ</h1>
<p className="text-slate-700">各ページへのリンク集はこちらから。</p>
<Link className="btn max-w-sm" href="/online-meeting">リンク集を開く</Link>
</div>
);
}