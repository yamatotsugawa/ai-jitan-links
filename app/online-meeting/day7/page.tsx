import type { Metadata } from "next";
import Link from "next/link";
import CopyButton from "@/components/CopyButton";

export const metadata: Metadata = {
  title: "AI時短チャレンジ Day7｜心を動かす提案資料を作る",
  description:
    "Day6で作った骨子を、GeminiのCanvasでインフォグラフィック提案資料へ。共有・公開、上級者向けの調整、Googleサイトでのプロジェクトサイト化までまとめて解説します。",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-sky-50">
      {/* ヒーロー */}
      <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:py-14">
        <div className="rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5">
          <p className="text-sm font-semibold text-sky-600">AI時短チャレンジ Day7</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            心を動かす提案資料を作る
          </h1>

          <p className="mt-6 text-slate-700 leading-7">
            こんにちは。YAMATO-AIの津川です。 いよいよ、この「AI時短チャレンジ」の最終日、Day7を迎えました。
            昨日は、AIと共にお客様の心を動かす提案の「骨子」を練り上げましたね。あの骨子があれば、もう提案の9割は完成したも同然です。
            今日は、その最強のテキスト骨子を元に、人の目を引き、一瞬で内容を理解させる、美しい
            <span className="font-semibold">「インフォグラフィック提案資料」</span>
            へと変身させます。さらに、この7日間で作り上げた成果をスマートに共有する方法まで学び、このチャレンジを締めくくります。
          </p>
        </div>
      </section>

      {/* Q: 本当にパワポが要る？ */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h2 className="text-xl font-bold text-slate-900">
            🤔 そのパワポ作り、本当に必要ですか？
          </h2>

          <div className="mt-4 space-y-4 text-slate-700 leading-7">
            <p>
              素晴らしいテキストの骨子が完成しても、それをパワーポイントで見栄え良く整える作業で、何時間も費やしてしまった…。
              文字の大きさを調整し、図形を配置し、色を塗り…そんな経験はありませんか？
            </p>
            <p>
              文字だけの資料は、相手に読んでもらうのに努力を強います。どんなに内容が良くても、退屈な見た目のせいで、読んでもらえなければ意味がありません。
            </p>
            <p className="font-semibold text-rose-600">
              今日、その最終関門を、AIの力で一瞬で飛び越えます。
            </p>
            <p>
              AIに、あなたの素晴らしいアイデアを、最も伝わる「見た目」に仕上げてもらいましょう。
            </p>
          </div>
        </div>
      </section>

      {/* 実践ブロック */}
      <section className="mx-auto w-full max-w-5xl px-4 pt-2 pb-8">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h2 className="text-xl font-bold text-slate-900">
            🚀 実践：AIに「プレゼン資料」をデザインさせる
          </h2>
          <p className="mt-4 text-slate-700 leading-7">
            お待たせしました。 いよいよ、Day6で作り上げた提案の「魂」とも言えるテキスト骨子に、最高の「見た目」という肉体を与える時間です。
            ここでは、Geminiの能力を最大限に引き出し、あなたの骨子を
            <span className="font-semibold">「インフォグラフィック」</span>
            という、視覚的に訴えかける資料へと一瞬で変身させます。
          </p>

          {/* STEP 1 */}
          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-orange-100 font-bold text-orange-700">
                1
              </span>
              <h3 className="text-lg font-bold text-slate-900">Geminiに作成を依頼する</h3>
            </div>

            <p className="mt-4 text-slate-700 leading-7">
              Day6で作成した、プレゼンテーションの「テキスト骨子」を、そのままAIに渡して、デザインを考えてもらいましょう。
              Geminiを開き、以下の「魔法の指示文」をコピーして、貼り付けてください。
            </p>

            {/* Prompt block */}
            <div className="mt-4 overflow-hidden rounded-xl bg-slate-900">
              <div className="flex items-center justify-between px-4 py-3">
                <p className="text-sm font-medium text-sky-200">魔法の指示文</p>
                <CopyButton
                  text={`あなたは、優れたインフォグラフィックデザイナーです。
私が提供する以下の【プレゼンテーションの骨子】を元に、インフォグラフィックを作成したいので手伝ってください。

【プレゼンテーションの骨子】
（ここに、Day6で作成したテキスト骨子を全文貼り付け）`}
                  label="魔法の指示文をコピー"
                />
              </div>
              <pre className="overflow-auto px-4 pb-5 pt-2 text-sky-50/95">
{`あなたは、優れたインフォグラフィックデザイナーです。
私が提供する以下の【プレゼンテーションの骨子】を元に、インフォグラフィックを作成したいので手伝ってください。

【プレゼンテーションの骨子】
（ここに、Day6で作成したテキスト骨子を全文貼り付け）`}
              </pre>
            </div>

            <p className="mt-4 text-slate-700 leading-7">
              Canvasをクリックした状態で送信すると、Geminiは骨子の内容を理解し、見出し・文章・アイコン・図などを組み合わせた、
              ウェブサイトのような形式のビジュアル資料を生成します。
            </p>
          </div>

          {/* STEP 2 */}
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-orange-100 font-bold text-orange-700">
                2
              </span>
              <h3 className="text-lg font-bold text-slate-900">共有リンクを取得する</h3>
            </div>

            <div className="mt-4 space-y-4 text-slate-700 leading-7">
              <p>
                生成された資料を確認したら、画面右上の「共有」から
                <span className="font-semibold">Canvas 用の公開リンク</span>
                を取得してコピーしてください。
              </p>
              <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900">
                <p className="font-semibold">注意点</p>
                <p className="mt-1">
                  企業や学校などの Google Workspace アカウントでは共有リンクを作成できないことがあります。
                  その場合は、下の「【プロの技】お客様専用の『プロジェクトサイト』を作る」を参考に、Googleサイトへ埋め込みましょう。
                </p>
              </div>
            </div>
          </div>

          {/* 上級者向け */}
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-bold text-slate-900">
              ⭐ 【上級者向け】デザインをさらに細かく調整したい場合
            </h3>
            <div className="mt-3 space-y-4 text-slate-700 leading-7">
              <p>
                生成されたデザインはコード由来のため、そのままでは細かな修正が難しい場合があります。そこで、
                プロも使う無料ツール <span className="font-semibold">Figma（フィグマ）</span> を使うと、元情報を読み込ませて
                テキスト・図形・色などをPowerPointのオブジェクトのように編集できます。
              </p>
              <p>
                少し専門的ですが、より自在な編集に挑戦したい方は検討してみてください。個別相談も歓迎です。
              </p>
            </div>
          </div>

          {/* プロの技 */}
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-bold text-slate-900">
              🌐 【プロの技】お客様専用の「プロジェクトサイト」を作る
            </h3>
            <div className="mt-3 space-y-4 text-slate-700 leading-7">
              <p>
                共有リンクをメールで送るだけでも良いのですが、さらに強力なのが
                <span className="font-semibold"> Googleサイトでの専用ページ化</span> です。
                過去の議事録・今回の提案資料・関連データを一箇所にまとめることで、
                「あの情報どこだっけ？」がなくなり、信頼関係が大きく前進します。
              </p>

              <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-4">
                <p className="font-semibold text-emerald-900">やり方は驚くほど簡単です</p>
                <ol className="mt-2 list-decimal space-y-1 pl-6 text-emerald-900">
                  <li>Googleサイトで新しいページを作る →「埋め込む」を選択。</li>
                  <li>Gemini の共有リンクを貼り付け。</li>
                  <li>見やすいサイズに上下左右を調整。</li>
                </ol>
                <p className="mt-2 text-emerald-900">
                  これだけで、今日のプレゼン資料を美しく表示できます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Congratulations */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-6">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h2 className="text-xl font-bold text-slate-900">🎉 おめでとうございます！</h2>
          <p className="mt-1 font-semibold text-rose-600">
            あなたはもう「資料作成」に時間を奪われない
          </p>
          <p className="mt-3 text-slate-700 leading-7">
            デザインのセンスやパワポ操作に悩む必要はありません。伝えたい内容（骨子）さえあれば、AIが最高の「見た目」に仕上げます。
            この体験が、あなたの資料作成の常識を根底から変えたはずです。
          </p>

          <div className="mt-6 rounded-xl bg-emerald-50 px-5 py-4 ring-1 ring-emerald-200">
            <p className="text-emerald-800">
              <span className="font-semibold">Day7クリア、そして、7日間のチャレンジ完走、本当にお疲れ様でした！</span>
              <br />
              あなたは日程調整や議事録作成から解放され、AIを使って戦略を立て、美しい提案資料までを瞬時に作るスキルを身につけました。
              AIに仕事を奪われる側ではなく、優秀な「部下／参謀」として使いこなす側に立ったのです。
            </p>
          </div>

          <div className="mt-6 space-y-3 text-slate-700 leading-7">
            <p>
              この講座は今日で一区切りですが、実践で生まれた疑問やご相談は、いつでもお気軽にメッセージください。
              「こんなことで困っている」「AIでここまで出来る？」などのご要望もお待ちしています。反響が多ければ
              「第2弾」も検討します。
            </p>
            <p>
              明日は、7日間の総まとめと、ここから先の考え方についてお届けします。ぜひ、お楽しみに！
            </p>
          </div>
        </div>
      </section>
<section className="flex flex-col sm:flex-row gap-3 justify-center pt-2 pb-10">
        <Link href="/online-meeting/ending" className="btn">
          終わりにへ →
        </Link>
      </section>
    </main>
  );
}
