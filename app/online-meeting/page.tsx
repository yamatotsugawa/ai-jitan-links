// app/online-meeting/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI時短チャレンジ！｜オンライン講座トップ",
  description:
    "会議準備から議事録、提案骨子、ビジュアル資料づくりまでを7日で一気に時短。AI時短チャレンジ！のトップページです。",
};

const CTA_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSfIzL9BlRBv1NmStaUEIC2uwTZ7sByUHESP9zPtZK7sgHC0XA/viewform?usp=header";

export default function OnlineMeetingTop() {
  return (
    <main className="min-h-dvh bg-[#ECF4FC]">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-10">
        <div className="rounded-3xl bg-white/60 backdrop-blur p-8 md:p-12 shadow-sm ring-1 ring-black/5">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
            無料7日間ミニ講座
          </span>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
            <span className="px-2 py-1 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
              AI時短チャレンジ！
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-700">
            予定調整・議事録・提案骨子・デザインまで。面倒ごとはAIに任せて、
            あなたは「考える仕事」に集中。7日で“見えない時間泥棒”を卒業しましょう。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/online-meeting/day1"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700 transition"
            >
              Day1から始める
            </Link>

            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-blue-700 font-semibold shadow ring-1 ring-blue-200 hover:bg-blue-50 transition"
            >
              個別相談（無料）
            </a>
          </div>
        </div>
      </section>

      {/* 時短実績ダイジェスト（工程別 Before/After） */}
      <section className="mx-auto max-w-6xl px-5 pb-6">
        <div className="rounded-3xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-black/5">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            AI時短チャレンジ 会議の時間効率化<strong className="ml-1 text-blue-600">実績ダイジェスト</strong>
          </h2>
          <p className="mt-3 text-slate-600">
            下のように工程ごとに時間を見直すことで、ひと目で「どこが短くなるか」が分かります。
          </p>

          {/* 2枚の内訳カード */}
          {/* 2枚の内訳カード → 上下配置 */}
<div className="mt-6 space-y-6">
  {/* 通常の会議（Day1〜4） */}
  <BreakdownCard
    tone="blue"
    labelLeft="Before"
    labelRight="After"
    title="① 通常の会議（Day1〜4）"
    caption="1回あたりの会議関連作業にかかる時間の目安"
    itemsBefore={[
      ["日程調整", 30],
      ["会議本体", 60],
      ["会議直後の最低限処理", 20],
      ["議事録の清書", 45],
      ["保管・検索", 12],
      ["次回準備", 25],
    ]}
    itemsAfter={[
      ["日程調整", 5],
      ["会議本体", 60],
      ["会議直後の最低限処理", 2],
      ["議事録の清書", 5],
      ["保管・検索", 4],
      ["次回準備", 5],
    ]}
    totalBefore={192}
    totalAfter={81}
    badge="短縮時間: ▲111分/回（▲57.8%）"
    note="体感：同じ時間で約2.37倍の件数を回せるイメージ（192 ÷ 81 ≈ 2.37）"
  />

  {/* 提案資料作成（Day6〜7） */}
  <BreakdownCard
    tone="amber"
    labelLeft="Before"
    labelRight="After"
    title="② 提案資料作成（Day6〜7）"
    caption="1回あたりの提案作業（骨子づくり＋清書デザイン）"
    itemsBefore={[
      ["提案骨子（構成・要旨）", 45],
      ["提案のビジュアル清書", 60],
    ]}
    itemsAfter={[
      ["提案骨子（構成・要旨）", 5],
      ["提案のビジュアル清書", 7],
    ]}
    totalBefore={105}
    totalAfter={12}
    badge="短縮時間: ▲93分/回（▲88.6%）"
    note="体感：生産性約8.75倍（105 ÷ 12 ≈ 8.75）"
  />
</div>

          {/* 一言まとめ */}
          <div className="mt-6 rounded-2xl bg-rose-50 p-5 ring-1 ring-rose-200 shadow-sm">
            <div className="text-rose-600 font-semibold">🚀 一言まとめ</div>
            <div className="mt-3 grid grid-cols-1 gap-3">
              <div className="rounded-xl bg-white p-4 ring-1 ring-rose-100">
                通常の会議でも <strong className="text-rose-600">▲111分/回</strong>（約6割短縮）＝
                <span className="font-semibold">半分以下の手間</span>に。
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-rose-100">
                提案に発展する会議なら <strong className="text-rose-600">▲204分/回</strong> の時短イメージ
                （会議短縮＋提案作業短縮の合計感）。
              </div>
            </div>
            <Link
              href="/online-meeting/results"
              className="mt-4 inline-flex items-center text-rose-700 font-semibold hover:underline"
            >
              時短実績を詳しく見る ↗
            </Link>
          </div>
        </div>
      </section>

      {/* 学習導線：前口上＋Day1〜7ボタン（特別デザイン・横長・縦一列） */}
      <section className="mx-auto max-w-3xl px-5 pt-4 pb-10">
        <p className="mb-4 text-slate-700">
          <span className="font-semibold text-slate-900">新たな効率の扉を開くために、早速チャレンジ！</span>
          {" "}
          下のステップに沿って、1日ずつ進めるだけでOKです。
        </p>

        <div className="space-y-3">
          {days.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group block w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-[2px] shadow hover:shadow-md transition"
            >
              <div className="flex items-center justify-between rounded-2xl bg-white px-5 py-4">
                <div>
                  <div className="text-sm font-semibold text-blue-700">{d.badge}</div>
                  <div className="mt-0.5 text-lg md:text-xl font-bold text-slate-900">
                    {d.title}
                  </div>
                  <p className="mt-1 text-slate-600 text-sm">{d.desc}</p>
                </div>
                <span className="shrink-0 rounded-full bg-blue-600 text-white px-3 py-2 text-sm font-semibold">
                  開く →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* その他の導線（別スタイル・縦一列） */}
      <section className="mx-auto max-w-3xl px-5 pb-16">
        <div className="space-y-3">
          <Link
            href="/online-meeting/results"
            className="block w-full rounded-2xl bg-white px-5 py-4 text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-500">データで確認</div>
                <div className="text-lg md:text-xl font-bold">時短実績の詳細</div>
              </div>
              <span>↗</span>
            </div>
          </Link>

          <Link
            href="/online-meeting/faq"
            className="block w-full rounded-2xl bg-white px-5 py-4 text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-500">疑問に答えます</div>
                <div className="text-lg md:text-xl font-bold">よくある質問（FAQ）</div>
              </div>
              <span>↗</span>
            </div>
          </Link>

          <Link
            href="online-meeting/ending"
            className="block w-full rounded-2xl bg-white px-5 py-4 text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-500">ゴールとその先へ</div>
                <div className="text-lg md:text-xl font-bold">おわりに（まとめ）</div>
              </div>
              <span>↗</span>
            </div>
          </Link>

          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-4 text-white shadow hover:opacity-95 transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold opacity-90">無料で相談</div>
                <div className="text-lg md:text-xl font-bold">個別相談フォームへ</div>
              </div>
              <span>↗</span>
            </div>
          </a>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-slate-200 bg-white/70">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>© 2025 AI Challenge. All Rights Reserved.</p>
            <nav className="flex flex-wrap gap-5">
              <Link href="/online-meeting/faq" className="hover:underline">
                よくある質問
              </Link>
              <Link href="/online-meeting/results" className="hover:underline">
                時短実績
              </Link>
              <Link href="/online-meeting/closing" className="hover:underline">
                おわりに
              </Link>
              <a
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                個別相談
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------------------------------- */
/* 内訳カード（工程別 Before/After）   */
/* ---------------------------------- */
function BreakdownCard({
  title,
  caption,
  labelLeft = "Before",
  labelRight = "After",
  itemsBefore,
  itemsAfter,
  totalBefore,
  totalAfter,
  badge,
  note, // <-- この行を追加
  tone = "blue",
}: {
  title: string;
  caption?: string;
  labelLeft?: string;
  labelRight?: string;
  itemsBefore: [string, number][];
  itemsAfter: [string, number][];
  totalBefore: number;
  totalAfter: number;
  badge?: string;
  note?: string; // <-- この行を追加
  tone?: "blue" | "amber";
}) {
  const pal =
    tone === "amber"
      ? {
          ring: "ring-amber-200",
          tag: "text-amber-700",
          rightBg: "bg-amber-50 ring-amber-200",
        }
      : {
          ring: "ring-blue-200",
          tag: "text-blue-700",
          rightBg: "bg-blue-50 ring-blue-200",
        };

  return (
    <div className={`rounded-2xl p-5 ring-1 ${pal.ring} shadow-sm`}>
      <div className={`text-sm font-semibold ${pal.tag}`}>{title}</div>
      {caption && <div className="mt-1 text-slate-600">{caption}</div>}

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Before */}
        <div className="rounded-xl bg-white ring-1 ring-slate-200 p-4">
          <div className="text-slate-500 text-sm font-semibold">{labelLeft}</div>
          <ul className="mt-2 space-y-1 text-slate-800">
            {itemsBefore.map(([name, min]) => (
              <li key={name} className="flex items-center justify-between">
                <span>{name}</span>
                <span className="font-semibold">{min}分</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between border-t pt-2 text-slate-900 font-bold">
            <span>合計</span>
            <span>{totalBefore}分</span>
          </div>
        </div>

        {/* After */}
        <div className={`rounded-xl ${pal.rightBg} p-4 ring-1`}>
          <div className="text-slate-500 text-sm font-semibold">{labelRight}</div>
          <ul className="mt-2 space-y-1 text-slate-800">
            {itemsAfter.map(([name, min]) => (
              <li key={name} className="flex items-center justify-between">
                <span>{name}</span>
                <span className="font-semibold">{min}分</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between border-t border-amber-200/60 pt-2 text-slate-900 font-bold">
            <span>合計</span>
            <span>{totalAfter}分</span>
          </div>
        </div>
      </div>

      {badge && (
        <div className="mt-3 inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-800 ring-1 ring-slate-200">
          {badge}
        </div>
      )}
      {/* noteプロパティを表示するためのロジックを追加 */}
      {note && (
        <div className="mt-3 text-slate-600 text-sm">
          <span className="font-semibold">補足：</span>
          {note}
        </div>
      )}
    </div>
  );
}

/* ---------- Day1〜Day7 データ ---------- */
const days = [
  {
    href: "/online-meeting/day1",
    badge: "Day1",
    title: "予定調整を自動化",
    desc: "eeeasyで“予約ページ”を作成。空き時間だけを提示して往復メールをゼロに。",
  },
  {
    href: "/online-meeting/day2",
    badge: "Day2",
    title: "録音忘れを物理的に撲滅",
    desc: "NottaがZoomに自動参加。録音・文字起こし・要約までワンストップ。",
  },
  {
    href: "/online-meeting/day3",
    badge: "Day3",
    title: "会議を“参謀”と進める",
    desc: "Geminiで論点整理。議論のズレや見落としをAIが指摘してくれます。",
  },
  {
    href: "/online-meeting/day4",
    badge: "Day4",
    title: "資料の“工場”を作る",
    desc: "NotebookLM で賢い資料図書館を構築。命名規則＆秘密メモも。",
  },
  {
    href: "/online-meeting/day5",
    badge: "Day5",
    title: "外部脳で次の一手",
    desc: "ブリーフィング＆マインドマップで“勝利の糸口”を発見。",
  },
  {
    href: "/online-meeting/day6",
    badge: "Day6",
    title: "AIと最強プロンプト設計",
    desc: "プロンプト自体をAIと共創。説得力のある提案骨子を生成します。",
  },
  {
    href: "/online-meeting/day7",
    badge: "Day7",
    title: "骨子→インフォグラフィック",
    desc: "Geminiで“見せる資料”へ一瞬で変換。共有まで一気通貫で。",
  },
];