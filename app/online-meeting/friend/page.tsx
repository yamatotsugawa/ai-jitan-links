// app/online-meeting/friend/page.tsx
import Link from "next/link";

export const metadata = {
  title: "リンク集｜AI時短チャレンジ",
  description:
    "AI時短チャレンジで登場したツールや関連ページへのリンクをまとめました。",
};

type Item = {
  href: string; // 内部 or 外部どちらも許可（外部は <a> に分岐）
  label: string;
  desc?: string;
  icon?: React.ReactNode;
};

const items: Item[] = [
  // 内部リンク（Next.js ルーターで遷移）
  {
    href: "/online-meeting",
    label: "AI時短チャレンジ TOP",
    desc: "コースの入口に戻る",
    icon: "🏠",
  },
  {
    href: "/online-meeting/day1",
    label: "Day1: 候補日メールを過去にする",
    desc: "eeasyで予約ページ",
    icon: "📅",
  },

  // 外部リンク（ブラウザ遷移）
  {
    href: "https://meeting.eeasy.jp/",
    label: "eeasy",
    desc: "日程調整ツール",
    icon: "🗓️",
  },
  {
    href: "https://www.notta.ai/ja",
    label: "Notta",
    desc: "自動文字起こし",
    icon: "📝",
  },
  {
    href: "https://notebooklm.google/",
    label: "NotebookLM",
    desc: "外部脳（資料のAI要約）",
    icon: "📚",
  },
  {
    href: "https://gemini.google.com/",
    label: "Gemini",
    desc: "高度な生成AI",
    icon: "✨",
  },
  {
    href: "https://gamma.app/",
    label: "Gamma",
    desc: "インフォグラフィック資料",
    icon: "📊",
  },
  {
    href:
      "https://docs.google.com/forms/d/e/1FAIpQLSfIzL9BlRBv1NmStaUEIC2uwTZ7sByUHESP9zPtZK7sgHC0XA/viewform?usp=header",
    label: "個別相談（無料）",
    desc: "フォームから問い合わせ",
    icon: "💬",
  },
];

const isExternal = (href: string) => /^https?:\/\//.test(href);

export default function FriendLinksPage() {
  return (
    <main className="min-h-dvh bg-brand-50">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 pt-10 pb-6">
        <p className="text-sm font-semibold text-brand-700">AI時短チャレンジ</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
          リンク集
        </h1>
        <p className="mt-3 text-slate-700">
          受講中に登場したツールや関連ページをまとめました。内部リンクはページ遷移、外部リンクは新しいタブで開きます。
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-16">
        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 divide-y">
          {items.map((d) => {
            const content = (
              <div className="group flex items-center gap-4 p-4 sm:p-5 hover:bg-slate-50 transition">
                <div className="text-xl">{d.icon}</div>
                <div className="min-w-0">
                  <div className="font-semibold text-slate-900">{d.label}</div>
                  {d.desc && (
                    <div className="text-sm text-slate-600">{d.desc}</div>
                  )}
                </div>
                <div className="ml-auto text-slate-400 group-hover:text-slate-600">
                  ↗
                </div>
              </div>
            );

            return isExternal(d.href) ? (
              <a
                key={d.href}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <Link key={d.href} href={d.href} className="block">
                {content}
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
