// app/online-meeting/results/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI時短チャレンジ｜会議の時間効率化実績",
  description:
    "AIツール（Day1〜7）導入で、会議準備〜フォローまでの手間がどれだけ減るかを可視化した実績ページです。",
};

function Pill({
  children,
  color = "bg-rose-50 text-rose-700 ring-1 ring-rose-200",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[13px] font-semibold ${color}`}
    >
      {children}
    </span>
  );
}

function Box({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-2xl border border-slate-200 bg-white p-5 md:p-6 ${className}`}
    >
      {children}
    </section>
  );
}

function TableCol({
  title,
  tone = "before",
  rows,
  totalLabel = "合計",
  total,
}: {
  title: string;
  tone?: "before" | "after";
  rows: { label: string; value: string }[];
  totalLabel?: string;
  total: string;
}) {
  const headerTone =
    tone === "after"
      ? "bg-rose-50 text-rose-700 ring-1 ring-rose-200"
      : "bg-slate-50 text-slate-700 ring-1 ring-slate-200";
  return (
    <div className="flex-1 rounded-2xl border border-slate-200">
      <div
        className={`rounded-t-2xl ${headerTone} px-5 py-3 text-center text-[15px] font-semibold`}
      >
        {title}
      </div>
      <div className="divide-y divide-slate-100 px-5 py-3">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between py-2 text-[15px]"
          >
            <span className="text-slate-600">{r.label}</span>
            <span className="font-semibold text-slate-900">{r.value}</span>
          </div>
        ))}
        <div className="mt-2 flex items-center justify-between pt-3 text-[15px] font-semibold">
          <span className="text-slate-900">{totalLabel}</span>
          <span className="text-slate-900">{total}</span>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  // --- セクション① 通常の会議（Day1〜4） ---
  const s1Before = [
    { label: "日程調整", value: "30分" },
    { label: "会議本体", value: "60分" },
    { label: "会議直後の最低限処理", value: "20分" },
    { label: "議事録の清書", value: "45分" },
    { label: "保管・検索", value: "12分" },
    { label: "次回準備", value: "25分" },
  ];
  const s1After = [
    { label: "日程調整", value: "5分" },
    { label: "会議本体", value: "60分" },
    { label: "会議直後の最低限処理", value: "2分" },
    { label: "議事録の清書", value: "5分" },
    { label: "保管・検索", value: "4分" },
    { label: "次回準備", value: "5分" },
  ];

  // --- セクション② 提案資料作成（Day6〜7） ---
  const s2Before = [
    { label: "提案骨子（構成・要旨）", value: "45分" },
    { label: "提案のビジュアル清書", value: "60分" },
  ];
  const s2After = [
    { label: "提案骨子（構成・要旨）", value: "5分" },
    { label: "提案のビジュアル清書", value: "7分" },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 pb-20 pt-8 md:px-6 md:pt-10">
      {/* ヒーロー */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
        <div className="text-[13px] font-semibold tracking-wide text-rose-600">
          AI時短チャレンジ 会議の時間効率化実績
        </div>
        <h1 className="mt-2 text-2xl font-extrabold leading-tight text-slate-900 md:text-3xl">
          会議の手間は、ここまで減らせる。
        </h1>
        <p className="mt-3 text-[15px] leading-7 text-slate-600">
          AIツール（Day1〜7）を導入することで、会議の準備からフォローアップまでにかかる時間
          がどれだけ削減できるのかを可視化しました。
        </p>
      </div>

      {/* ① 通常の会議（Day1〜4） */}
      <Box className="mt-8">
        <div className="mb-4 flex items-center gap-2">
          <Pill>
            <span className="text-lg">💬</span>
            <span>① 通常の会議（Day1〜4）</span>
          </Pill>
        </div>
        <p className="mb-5 text-[15px] text-slate-600">
          1回あたりの会議関連作業にかかる時間です。
        </p>

        <div className="flex flex-col gap-4 md:flex-row">
          <TableCol title="Before" rows={s1Before} total="192分" />
          <TableCol title="After" tone="after" rows={s1After} total="81分" />
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 px-5 py-4 text-[15px]">
          <div className="font-semibold text-slate-900">
            短縮時間：{" "}
            <span className="text-rose-600">
              ▲111分/回（▲57.8%）
            </span>
          </div>
          <div className="mt-1 text-slate-600">
            体感：同じ時間で
            <span className="font-semibold text-slate-900">約2.37倍</span>
            の件数を回せるイメージ（192÷81≒2.37）
          </div>
        </div>
      </Box>

      {/* ② 提案資料作成（Day6〜7） */}
      <Box className="mt-8">
        <div className="mb-4 flex items-center gap-2">
          <Pill color="bg-amber-50 text-amber-700 ring-1 ring-amber-200">
            <span className="text-lg">💡</span>
            <span>② 提案資料作成（Day6〜7）</span>
          </Pill>
        </div>
        <p className="mb-5 text-[15px] text-slate-600">
          1回あたりの提案作業（骨子づくり＋清書デザイン）にかかる時間です。
        </p>

        <div className="flex flex-col gap-4 md:flex-row">
          <TableCol title="Before" rows={s2Before} total="105分" />
          <TableCol title="After" tone="after" rows={s2After} total="12分" />
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 px-5 py-4 text-[15px]">
          <div className="font-semibold text-slate-900">
            短縮時間：{" "}
            <span className="text-rose-600">▲93分/回（▲88.6%）</span>
          </div>
          <div className="mt-1 text-slate-600">
            体感：生産性
            <span className="font-semibold text-slate-900">約8.75倍</span>
            （105÷12≒8.75）
          </div>
        </div>
      </Box>

      {/* ③ 平均「1回あたり」算出 */}
      <Box className="mt-8">
        <div className="mb-4 flex items-center gap-2">
          <Pill color="bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200">
            <span className="text-lg">📊</span>
            <span>③ 平均「1回あたり」の算出</span>
          </Pill>
        </div>

        <p className="text-[15px] text-slate-600">
          月20件のうちP件が提案に進む場合（提案比率 p = P/20）の計算式です。
        </p>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-[15px] leading-7 text-slate-700">
          <div>
            <span className="font-semibold text-slate-900">Before（平均）</span>
            ＝ 192 + 105p（分）
          </div>
          <div>
            <span className="font-semibold text-slate-900">After（平均）</span>
            ＝ 81 + 12p（分）
          </div>
          <div>短縮（平均）＝ 111 + 93p（分）</div>
          <div>削減率 ＝（111 + 93p）／（192 + 105p）</div>
        </div>

        {/* 計算例 */}
        <div className="mt-5">
          <div className="text-center text-[13px] font-semibold tracking-wide text-slate-500">
            【計算例】 40%が提案に進む場合（P=8件、p=0.4）
          </div>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
              <div className="text-[13px] font-semibold tracking-wide text-slate-500">
                Before
              </div>
              <div className="mt-1 text-3xl font-extrabold text-slate-900">
                234
                <span className="ml-1 text-base font-semibold text-slate-500">
                  分
                </span>
              </div>
              <div className="mt-1 text-[13px] text-slate-500">
                192＋105×0.4
              </div>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5 text-center">
              <div className="text-[13px] font-semibold tracking-wide text-rose-600">
                After
              </div>
              <div className="mt-1 text-3xl font-extrabold text-rose-700">
                85.8
                <span className="ml-1 text-base font-semibold text-rose-600">
                  分
                </span>
              </div>
              <div className="mt-1 text-[13px] text-rose-600">81＋12×0.4</div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-slate-50 px-5 py-4 text-[15px]">
            <div className="font-semibold text-slate-900">
              短縮時間：{" "}
              <span className="text-rose-600">
                約148.2分/回（▲63.3%）
              </span>
            </div>
            <div className="mt-1 text-slate-600">
              体感：
              <span className="font-semibold text-slate-900">約2.73倍</span>
              の処理が可能（234÷85.8≒2.73）
            </div>
          </div>
        </div>
      </Box>

      {/* 一言まとめ */}
      <section className="mt-8 rounded-3xl border border-rose-200 bg-rose-50 p-6 md:p-7">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xl">🚀</span>
          <h2 className="text-xl font-extrabold text-slate-900">一言まとめ</h2>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <div className="text-[13px] font-semibold text-slate-500">
              通常の会議でも…
            </div>
            <div className="mt-1 text-lg font-extrabold text-rose-600">
              ▲111分/回 短縮
            </div>
            <div className="text-[13px] text-slate-600">
              （▲58.8%） ＝ 半分以下の手間に。
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <div className="text-[13px] font-semibold text-slate-500">
              提案に発展する会議なら…
            </div>
            <div className="mt-1 text-lg font-extrabold text-rose-600">
              ▲204分/回 短縮
            </div>
            <div className="text-[13px] text-slate-600">
              （▲68.7%） ＝ 1/3以下の手間に。
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
