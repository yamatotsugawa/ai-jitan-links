import Link from "next/link";

const days = [
  { href: "/online-meeting/day1", label: "候補日メールを過去にする" },
  { href: "/online-meeting/day2", label: "面倒な録音・メモから解放される" },
  { href: "/online-meeting/day3", label: "会議の舵を取り、議論を支配する" },
  { href: "/online-meeting/day4", label: "「あの資料どこ？」をなくす仕組み作り" },
  { href: "/online-meeting/day5", label: "AIで次の「一手」を見つけ出す" },
  { href: "/online-meeting/day6", label: "プロンプトもAIで提案骨子を練る" },
  { href: "/online-meeting/day7", label: "心を動かす提案資料を作る" },
];

// ←ここをあなたのLINE 友だち追加URLに差し替え
const LINE_ADD_URL = "https://lin.ee/xxxxx";

export default function Page() {
  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <header className="space-y-2 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          YAMATO-AI式仕事術
        </h1>
        <p className="text-brand-600 font-semibold">AI時短チャレンジ</p>
      </header>

      {/* 友だち追加（上） */}
      <div className="flex justify-center">
        <a
          href={LINE_ADD_URL}
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold shadow-soft
                     bg-gradient-to-b from-green-500 to-green-600 text-white"
        >
          LINE 友だち追加
        </a>
      </div>

      {/* スケジュール */}
      <section className="space-y-4">
        <h2 className="text-center text-2xl font-bold text-brand-700">
          ７日間の学習スケジュール
        </h2>
        <p className="text-center text-slate-700">
          これから7日間、私が実際に使っている「オンライン会議が驚くほど楽になる」業務フローを、1ステップずつ体験していきます。
          すべてクリック中心の簡単なステップです。
        </p>

        <div className="card divide-y">
          {days.map((d, i) => (
            <Link
              key={d.href}
              href={d.href}
              className="group flex items-center gap-4 p-4 sm:p-5 hover:bg-slate-50 rounded-2xl transition"
            >
              <div className="flex items-center gap-2 text-brand-700 min-w-[64px]">
                <span className="text-slate-500">Day</span>
                <span className="text-xl sm:text-2xl font-extrabold">{i + 1}</span>
              </div>
              <div className="flex-1 font-semibold">
                {d.label}
              </div>
              <span className="opacity-0 group-hover:opacity-100 text-brand-600">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 友だち追加（下） */}
      <div className="flex justify-center">
        <a
          href={LINE_ADD_URL}
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold shadow-soft
                     bg-gradient-to-b from-green-500 to-green-600 text-white"
        >
          LINE 友だち追加
        </a>
      </div>
    </div>
  );
}
