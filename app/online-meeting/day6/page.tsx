"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import type { JSX } from "react";

/* 共通：カード */
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`card ${className}`}>{children}</section>
  );
}

/* 共通：ナンバーバッジ */
function StepBadge({ n }: { n: number }) {
  return (
    <div className="mr-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-700 font-bold">
      {n}
    </div>
  );
}

/* 共通：コピー用ボタン（見た目は .btn に統一） */
function CopyButton({
  text,
  label = "プロンプトをコピー",
}: {
  text: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);
  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // no-op
    }
  }, [text]);

  return (
    <button
      onClick={onCopy}
      type="button"
      className="btn w-full"
      aria-label={label}
    >
      {copied ? "コピーしました！" : label}
    </button>
  );
}

/* 黒ベースのプロンプト枠 */
function PromptBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-xl bg-slate-900 text-slate-50 p-5 sm:p-6 text-sm leading-relaxed">
      {children}
    </div>
  );
}

export default function ClientDay6() {
  /* —— 指示文 —— */
  const researchPrompt = `あなたは、優秀なリサーチの専門家です。
私は今から、とある企業の課題について、客観的なデータや信頼できる情報源を元に深く調査するための、最高のプロンプトを作りたいです。
以下の【調査したい課題】について調査するための、最も効果的なプロンプトを、あなた自身の言葉で作成してください。

【調査したい課題】
（ここに、Day5で見つけた「アジェンダのタネ」を具体的に書く。例：中小企業における情報共有の遅れがもたらす経営リスク）`;

  const outlinePrompt = `あなたは、腕利きの提案コンサルタントです。
先ほどのリサーチ結果を元に、「お客様が自身の課題の深刻さに気づき、解決策を真剣に考え始める」ような、説得力のあるプレゼンテーションの「骨子（アウトライン）」を作りたいです。
そのための、最高のプロンプトを作成してください。骨子は、以下の点を必ず含むように指示してください。

- 聞き手の共感を呼ぶ導入
- 課題を放置した場合の具体的なリスク
- 課題解決の先に待っている明るい未来`;

  return (
    <main className="space-y-10">
      {/* ヒーロー（統一） */}
      <section className="space-y-4">
        <p className="text-brand-600 font-semibold">AI時短チャレンジ Day6</p>
        <h1 className="h1">プロンプトもAIで提案骨子を練る</h1>
        <p>
          こんにちは。YAMATO-AIの津川です。昨日は、あなただけの「外部脳」を使い、次の一手となる「議題（アジェンダ）のタネ」を見つけ出しましたね。素晴らしい分析でした。さて、本日はDay6。今日は、その「タネ」を元に、お客様の心を動かすための説得力のある提案資料の「骨子（アウトライン）」を、AIと一緒に作り上げます。しかし、今日はただAIに「作って」とお願いするのではありません。そのために必要な「最強の指示文（プロンプト）」そのものを、AIと相談しながら作るという、極めて高度で、しかし一度身につければ一生使えるテクニックを、あなたに伝授します。
        </p>
      </section>

      {/* 痛みの共有 */}
      <Card>
        <h2 className="h2 flex items-center gap-2">
          <span className="text-2xl">🤔</span>
          白紙のパワポの前で、固まっていませんか？
        </h2>
        <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
          <p>
            「よし、提案書を作るぞ！」と意気込んでパソコンに向かったものの、白紙のパワーポイントを前にして、どこから手をつければいいか分からず、固まってしまった…。そんな経験はありませんか？
          </p>
          <p>
            多くの人は、いきなりパワーポイントを開いて、自社の商品がいかに素晴らしいかを書き始めます。しかし、それではDay5で学んだ「売れる営業マン」の戦略とは言えません。
          </p>
          <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
            お客様が本当に知りたいのは、あなたの商品のことではありません。お客様が知りたいのは、「自分たちが抱える課題の深刻さ」と「その課題を放置した場合の未来」です。
          </div>
          <p>
            私たちは、その事実を、客観的なデータや信頼できる情報源を元に、論理的に示し感情を動かす必要があります。そのための「調査」と「構成作り」こそ、AIが最も得意とするところなのです。
          </p>
        </div>
      </Card>

      {/* 実践イントロ */}
      <Card>
        <h2 className="h2">🚀 実践：AIと「最強のプロンプト」を共同開発する</h2>
        <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
          <p>
            「プロンプト」と聞くと、「なんだか難しそう…」「自分には発想力がないから無理だ」と感じる方も多いはず。ご安心ください。ゴールは “AIと協力して”
            プロ級の骨子を誰でも作れるようになることです。
          </p>
          <p>
            私自身も複雑な依頼はまず「どう頼めば良い？」をAIに相談します。つまり“プロンプト作りもAIに頼る”。では、実際にやってみましょう。
          </p>
        </div>
      </Card>

      {/* Step 1 */}
      <Card>
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center">
          <StepBadge n={1} />
          Geminiと一緒に「リサーチ用プロンプト」を作る
        </h3>
        <div className="mt-3 space-y-4 text-slate-700 leading-relaxed">
          <p>
            Day5で見つけた課題を深掘りするための指示文を作ります。以下をGeminiに貼り付けてください。
          </p>
          <PromptBlock>
            <pre className="whitespace-pre-wrap break-words">{researchPrompt}</pre>
          </PromptBlock>
          <CopyButton text={researchPrompt} />
        </div>
      </Card>

      {/* Step 2 */}
      <Card>
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center">
          <StepBadge n={2} />
          完成した「最強のプロンプト」で、ディープリサーチを実行する
        </h3>
        <div className="mt-3 space-y-4 text-slate-700 leading-relaxed">
          <p>
            提案されたプロンプトを新しいチャットに貼って実行。※有料の{" "}
            <span className="font-semibold">Deep Research</span> が使える方はそちらが高精度です。
          </p>
          <p>一から探すより早く、信頼できる情報が集まったはずです。</p>
        </div>
      </Card>

      {/* Step 3 */}
      <Card>
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center">
          <StepBadge n={3} />
          Geminiと一緒に「提案骨子作成プロンプト」を作る
        </h3>
        <div className="mt-3 space-y-4 text-slate-700 leading-relaxed">
          <p>次は骨子作り。以下をGeminiに貼ってください。</p>
          <PromptBlock>
            <pre className="whitespace-pre-wrap break-words">{outlinePrompt}</pre>
          </PromptBlock>
          <CopyButton text={outlinePrompt} />
        </div>
      </Card>

      {/* Step 4 */}
      <Card>
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center">
          <StepBadge n={4} />
          完成した「最強のプロンプト」で、提案骨子を出力する
        </h3>
        <div className="mt-3 space-y-4 text-slate-700 leading-relaxed">
          <p>
            生成された“骨子用プロンプト”を新チャットで実行。リサーチ結果にもとづく、論理的で心を動かす骨子が出力されます。
          </p>
        </div>
      </Card>

      {/* 補足 */}
      <Card>
        <h2 className="h2 flex items-center gap-2">
          <span className="text-2xl">💡</span>
          【補足】ツールの有料化について
        </h2>
        <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
          <p>必須の有料ツールはDay2のNottaのみ。Gemini/明日の資料作成は無料でもOK。</p>
          <p>
            制限が気になる場合はChatGPT無料版や、Day7で紹介する
            <span className="font-semibold"> Gamma</span> などの代替も有効です。
          </p>
          <p>
            統合的に使いこなしたい方は
            <span className="font-semibold"> Google Workspace</span> へのアップグレードが最善。導入はケースにより最適解が異なるため、「個別相談」からご連絡ください。
          </p>
        </div>
      </Card>

      {/* Congrats */}
      <Card>
        <h2 className="h2">🎉 おめでとうございます！</h2>
        <p className="mt-1 font-semibold text-orange-600">あなたはもう、「プロンプト」に悩まない</p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          どんな業務でも対応できる最強のプロンプトを、自分で作れるようになりました。AIを“共同作業者”として使いこなす最高レベルのスキルです。
        </p>
      </Card>

      {/* 予告 */}
      <Card>
        <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4">
          <div className="font-bold text-red-600">予告</div>
          <p className="mt-2 text-slate-800 font-semibold">明日は最終日、Day7：心を動かす提案資料を作る</p>
          <p className="mt-2 text-slate-700">
            今日は骨子、明日はそれを美しい「インフォグラフィック」に。最高の形で仕上げます。お楽しみに！
          </p>
        </div>
      </Card>
<div className="flex justify-center pt-2">
          <Link href="/online-meeting/day7" className="btn">
            Day7へ進む →
          </Link>
        </div>
    </main>
  );
}
