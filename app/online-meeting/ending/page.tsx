// app/online-meeting/closing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "AI時短チャレンジ おわりに｜7日間の総まとめ",
  description:
    "7日間のAI時短チャレンジをやり遂げたあなたへ。全日程の振り返りと、業務改善の設計図、AI時代の羅針盤「ブロードリスニング」を解説します。",
};

export default function ClosingPage() {
  return (
    <main className="min-h-dvh bg-sky-50/40">
      {/* header */}
      <section className="mx-auto max-w-4xl px-5 pb-2 pt-10 sm:pt-14">
        <p className="text-sm font-semibold text-sky-700">AI時短チャレンジ おわりに</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          7日間の「AI時短チャレンジ」、最後までやり遂げたあなたへ。
        </h1>
      </section>

      {/* おめでとう & Day1-7 */}
      <section className="mx-auto max-w-4xl px-5">
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm ring-1 ring-black/5">
          <div className="text-center">
            <div className="mb-2 text-5xl leading-none">🎉</div>
            <h2 className="text-xl font-bold text-slate-900">心から「おめでとうございます！」</h2>
            <p className="mt-3 text-slate-600">
              「はじめに」で、私はこう約束しました。<br />
              「メール地獄も、議事録迷子も、7日間で卒業しよう」と。
            </p>
          </div>

          <p className="mt-8 text-center text-sm font-semibold text-slate-500">この7日間で、あなたは…</p>

          <div className="mt-4 space-y-3">
            {[
              ["Day1", "日程調整のメール往復を過去のものにしました。"],
              ["Day2", "会議の録音忘れという失敗と縁を切りました。"],
              ["Day3", "AIを作戦参謀として使いこなせるようになりました。"],
              ["Day4", "資料作成の「工場」を建設しました。"],
              ["Day5", "いつでも相談できる「外部脳」を構築しました。"],
              ["Day6", "AIと協力して最強の提案骨子を作り上げました。"],
              ["Day7", "それを美しいビジュアル資料へと変身させました。"],
            ].map(([label, text]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm ring-1 ring-black/5"
              >
                <div className="shrink-0 rounded-full bg-orange-50 px-3 py-1 text-sm font-bold text-orange-600 ring-1 ring-orange-200">
                  {label}:
                </div>
                <p className="w-full text-slate-700">{text}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-slate-600">
            振り返ってみてください。7日前のあなたと、今のあなたとでは、見える景色が全く違うはずです。あなたはもう、AIという強力な武器を、その手に握っているのです。
          </p>
        </div>
      </section>

      {/* 業務改善の設計図（画像っぽいカード） */}
      <section className="mx-auto mt-10 max-w-4xl px-5">
        <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-lg ring-1 ring-slate-900/5">
          <div className="flex items-center gap-2">
            <div className="text-2xl">📋</div>
            <h3 className="text-xl font-bold text-slate-900">あなたが手に入れた「業務改善の設計図」</h3>
          </div>
          <p className="mt-3 text-slate-600">
            この講座であなたが本当に手に入れたのは、個別のツールの使い方だけではありません。
            それは、あらゆる業務に応用可能な、「業務改善の設計図」そのものです。
          </p>

          <div className="mt-6 rounded-2xl bg-[radial-gradient(120%_120%_at_20%_-10%,#ffffff,rgba(241,245,249,0.7))] p-5 ring-1 ring-slate-200">
            {[
              ["1", "分解する", "まず、日々の仕事を、一つひとつ細かく分解してみる。"],
              ["2", "紐付ける", "その分解したタスクに対して、最適なITツールやAIツールを紐づける。"],
              ["3", "仕事をさせる", "そして、「プロンプト（魔法の指示文）」で、AIに仕事をさせる。"],
            ].map(([num, title, body], i) => (
              <div key={num} className="relative grid grid-cols-[40px_1fr] items-start gap-4 py-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 font-bold text-sky-700 ring-1 ring-sky-200">
                  {num}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-slate-600">{body}</p>
                </div>
                {i < 2 && (
                  <div className="col-span-2 my-2 flex justify-center">
                    <span className="text-slate-300">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl bg-slate-50 p-4 text-slate-700 ring-1 ring-slate-200">
            この3つのステップこそ、あらゆる業務を効率化していくための、普遍的な「型」なのです。
            重要なのは、仕事を細かく分けること、そして、そのための適切なツールを選ぶことです。
          </div>
        </div>
      </section>

      {/* 運転免許 → 本当のDX */}
      <section className="mx-auto mt-10 max-w-4xl px-5">
        <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm ring-1 ring-slate-900/5">
          <div className="flex items-center gap-2">
            <div className="text-2xl">🚀</div>
            <h3 className="text-xl font-bold text-slate-900">「運転免許」から「本当のDX」へ</h3>
          </div>
          <div className="mt-3 space-y-3 text-slate-600">
            <p>
              この7日間で成し遂げたことは、例えるなら、AIという車を乗りこなすための「運転免許」を取得したようなもの。計り知れないほど大きな成果です。しかし、免許を取った日がゴールではありません。今日から、その車でどこへでも行ける、自由なドライブが始まるのです。
            </p>
            <p>かつてNetflixがDVDレンタルを動画配信に変えたように、今、AIという「高速道路」を舞台に、ビジネスの構造変化が起ころうとしています。</p>
            <div className="rounded-lg bg-indigo-50 p-4 text-indigo-900 ring-1 ring-indigo-200">
              単なる「効率化」でなく、AIを前提に仕事そのものを見直す。それが本当の「AI-DX」です。
            </div>
            <p>日々、新しいAIツールが次々と生まれてきますが、全てを追いかけるのは現実的ではありません。大切なのは、あなたに合った使い方を見つけ、「今やっている仕事が、少しでも楽になる」という感覚で、部分的にでも取り入れていくことです。</p>
          </div>
        </div>
      </section>

      {/* ブロードリスニング */}
      <section className="mx-auto mt-10 max-w-4xl px-5">
        <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-lg ring-1 ring-slate-900/5">
          <div className="flex items-center gap-2">
            <div className="text-2xl">🧭</div>
            <h3 className="text-xl font-bold text-slate-900">AI時代の羅針盤：ブロードリスニング</h3>
          </div>
          <p className="mt-3 text-slate-600">AIを軸にビジネスを考える上で、重要なキーワードが「ブロードリスニング」です。</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[linear-gradient(180deg,#fff,rgba(248,250,252,.9))] p-5 shadow-md ring-1 ring-slate-200">
              <p className="font-semibold text-slate-800">ブロードキャスト（従来）</p>
              <p className="mt-1 text-slate-600">一人の人間が、大勢に情報を発信する。</p>
              <div className="mt-3 flex items-center gap-5 text-3xl text-slate-500">
                <span>🗣️</span><span className="text-slate-300">→</span><span>👥</span>
              </div>
            </div>

            <div className="rounded-2xl bg-[linear-gradient(180deg,#fff,rgba(240,249,255,.9))] p-5 shadow-md ring-1 ring-sky-200">
              <p className="font-semibold text-orange-600">ブロードリスニング（AI時代）</p>
              <p className="mt-1 text-slate-600">AIが、大勢の声を一人に届ける。</p>
              <div className="mt-3 flex items-center gap-5 text-3xl">
                <span>👥</span><span className="text-slate-300">→</span><span>🧠</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-slate-600">
            AIエージェントが膨大な声を偏りなく集約・分析することで、真のボトムアップが実現可能になります。
            この視点で自社のサービスを見つめ直した時、そこに巨大なビジネスチャンスが眠っているかもしれません。
          </p>
        </div>
      </section>

      {/* クロージング & 相談CTA */}
      <section className="mx-auto mt-10 max-w-4xl px-5 pb-16">
        <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 text-center shadow-sm ring-1 ring-slate-900/5">
          <p className="text-slate-700">
            この講座は今日で終わりですが、<br className="hidden sm:inline" />
            あなたの進化は、今日からが本当のスタートです。
          </p>
          <p className="mt-3 text-slate-600">
            このご縁が、あなたの未来を、そして会社の未来を、より輝かしいものへと導くきっかけとなることを、心から信じています。
          </p>

          <div className="mt-6 text-lg font-bold text-slate-900">
            7日間、本当にお疲れ様でした。<br />
            そして、ありがとうございました。
          </div>

          {/* 入口CTA：無料個別相談へ */}
          <div className="mt-8 rounded-2xl bg-sky-50 ring-1 ring-sky-200 p-6">
            <p className="text-slate-800 font-semibold">
              ここはまだ「入口」に過ぎません。もっと <span className="tracking-wide">AHC</span> について学びたい方はこちら。
            </p>
            <p className="mt-1 text-slate-600 text-sm">
              貴社の状況に合わせて最短ルートをご提案します（所要15分〜）。
            </p>
            <div className="mt-4 flex justify-center">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfIzL9BlRBv1NmStaUEIC2uwTZ7sByUHESP9zPtZK7sgHC0XA/viewform?usp=header"
                target="_blank"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-white text-[15px] font-semibold shadow-sm bg-gradient-to-b from-sky-500 to-sky-600 hover:brightness-105 active:brightness-95 transition"
              >
                無料個別相談に申し込む →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
