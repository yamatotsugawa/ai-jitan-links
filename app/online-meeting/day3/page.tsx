"use client";

import Link from "next/link";
import { useState } from "react";
import type { JSX } from "react";

const PROMPT_TEXT = `あなたは優秀なファシリテーターです。
以下の会議の会話内容を読み、次の3点を簡潔に教えてください。

・これまでの主要な論点は何ですか？
・未解決の課題や、もっと深掘りすべき点は何ですか？
・この会議の目的を達成するために、次に私は何を質問すれば良いですか？

【会議の会話内容】
（ここに、Nottaからコピーしたテキストを貼り付け）`;

export default function Day3() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROMPT_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // 失敗しても無言でOK（ブラウザ権限などのため）
    }
  };

  return (
    <div className="space-y-12">
      {/* ヘッダー */}
      <section className="space-y-4">
        <p className="text-brand-600 font-semibold">AI時短チャレンジ Day3</p>
        <h1 className="h1">会議の舵を取り、議論を支配する</h1>
        <p>
          こんにちは。YAMATO-AIの津川です。昨日の「AIアシスタントの仕込み」は、今日このDay3で、真価を発揮します。
          今日は、AIを単なる「記録係」として使うレベルから一歩踏み出し、会議を円滑に進めるための
          <strong>「リアルタイムの作戦参謀」</strong>として活用する、プロの技を体験していただきます。
        </p>
      </section>

      {/* 運転手か乗客か */}
      <section className="card space-y-4">
        <h2 className="h2">🤔 あなたは、会議の「運転手」ですか？「乗客」ですか？</h2>
        <p>
          会議の進行役を任されたものの、様々な意見が飛び交い、議論が発散して、時間だけが過ぎていく…。
          「なんとか話をまとめなければ」と焦りつつも、良い質問が思い浮かばず、結局、明確な結論が出ないまま会議が終わってしまった。
        </p>
        <div className="bg-slate-50 p-4 rounded">
          これでは、まるであなたが会議の「運転手」ではなく、議論の流れに身を任せるだけの
          <strong className="text-red-600">「乗客」</strong>になってしまっているのと同じです。
        </div>
        <p>
          今日、あなたはその状態から卒業します。AIという<strong>「優秀なカーナビ」</strong>を手に入れることで、
          常に目的地（会議のゴール）を見失わず、自信を持って会議の舵取り（ファシリテーション）ができるようになります。
        </p>
      </section>

      {/* Why Gemini */}
      <section className="card space-y-4">
        <h2 className="h2">💡 なぜ、ChatGPTではなく Gemini？</h2>
        <p>
          ここで、「なぜ、有名なChatGPTではなくGeminiなの？」と疑問に思う方もいるかもしれません。
          この<strong>「AIの戦略的な使い分け」</strong>こそが、プロの技です。
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border p-4 bg-white">
            <h3 className="font-semibold">ChatGPT：親しい相談相手</h3>
            <p className="text-sm mt-1">
              過去の対話を記憶する「メモリ機能」があり、あなたのことをよく知っている存在。
              ただし、その記憶が働くぶん、あなたの意図を汲み取りすぎた
              <span className="text-amber-600 font-medium">“少し偏った答え”</span>になる可能性も。
            </p>
          </div>
          <div className="rounded-xl border p-4 bg-white">
            <h3 className="font-semibold">Gemini：社外の優秀なコンサルタント</h3>
            <p className="text-sm mt-1">
              その都度、与えられた情報だけをもとに、<strong>フラット</strong>な視点で回答を生成。
              先入観がないからこそ、議論のズレや見落としを的確に指摘してくれます。
            </p>
          </div>
        </div>
        <p>少し高度に見えるかもしれませんが、操作はとても簡単。安心して一緒に進めていきましょう。</p>
      </section>

      {/* 実践 */}
      <section className="card space-y-4">
        <h2 className="h2">🚀 実践：Geminiと協力して会議をファシリテートする</h2>
        <p>
          Nottaがリアルタイムで書き起こした会議のテキストを、<strong>Gemini</strong>に分析させて、
          会議の進行（ファシリテーション）に活かします。
        </p>

        {/* Step 1 */}
        <div className="card space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-500 text-white grid place-items-center font-bold">1</div>
            <h3 className="font-semibold">リアルタイムの文字起こしをコピー</h3>
          </div>
          <p>
            Notta Botが参加中の会議で、<strong>直近の数分</strong>の会話テキストを選択してコピーします。
            （Windowsは <kbd>Ctrl</kbd>+<kbd>C</kbd>、Macは <kbd>⌘</kbd>+<kbd>C</kbd>）
          </p>
        </div>

        {/* Step 2 */}
        <div className="card space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-500 text-white grid place-items-center font-bold">2</div>
            <h3 className="font-semibold">Geminiに貼り付け、「作戦」を聞く</h3>
          </div>
          <p>
            新しいタブで{" "}
            <a href="https://gemini.google.com/" target="_blank" className="underline underline-offset-4">
              Gemini
            </a>{" "}
            を開き、下の<strong>プロンプト（魔法の指示文）</strong>を貼り付けてから、続けて会議テキストを貼り付けて送信します。
          </p>

          {/* プロンプトボックス */}
          <div className="bg-slate-900 text-slate-50 rounded-xl p-4 text-sm leading-relaxed">
            <pre className="whitespace-pre-wrap">{PROMPT_TEXT}</pre>
          </div>

          <button onClick={handleCopy} className="btn max-w-xs">
            {copied ? "コピーしました！" : "プロンプトをコピー"}
          </button>
        </div>

        {/* Step 3 */}
        <div className="card space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-500 text-white grid place-items-center font-bold">3</div>
            <h3 className="font-semibold">Geminiの回答を元に、会議を進行</h3>
          </div>
          <p>
            Geminiは貼り付けた会話を瞬時に理解し、<strong>論点の整理</strong>と
            <strong>次に取るべきアクション（質問など）</strong>を提案してくれます。
            回答を見て「次は〇〇について聞けばいいのか」と確認し、自信を持って会議の運転席に戻りましょう。
          </p>
          <div className="bg-rose-50 text-rose-800 rounded p-3">
            これが、AIを<strong>作戦参謀</strong>として使う、ということです。
          </div>
        </div>
      </section>

      {/* まとめ・要約 */}
      <section className="card space-y-4">
        <h2 className="h2">🎉 おめでとうございます！</h2>
        <p className="text-orange-600 font-semibold">
          会議が終了したら、最後にNottaの要約機能を使いましょう。
        </p>
        <p>
          会議全体の公式な記録の「たたき台」として使います。終了したNottaのデータを開き、<strong>「AI要約」</strong>をクリック。
          テンプレートの選択が出たら<strong>「スタンダード」</strong>を選んでください。
        </p>
        <div className="bg-white rounded-xl p-4 shadow-inner">
          何度か「スタンダード」を選ぶと、Nottaが学習して自動で最適な要約を提示してくれるようになります。
        </div>
      </section>

      {/* 成果と次回予告 */}
      <section className="space-y-4">
        <div className="card bg-green-50 text-green-700 font-semibold">
          Day3クリア！本当におめでとうございます！
        </div>
        <p>
          AIを「記録係」だけでなく<strong>「作戦参謀」</strong>として使う感覚を掴めたはず。
          ただ議事録作成が楽になっただけではありません。会議への向き合い方が、今日、確実に変わりました。
        </p>

        <div className="card border-l-4 border-red-500 space-y-2">
          <h3 className="font-semibold text-red-600">予告</h3>
          <p>
            明日は、<strong>Day4：「あの資料どこ？」をなくす仕組み作り</strong>。<br />
            今日の会議データを Notta から NotebookLM へ安全に移し、正式な議事録作成の土台を作ります。お楽しみに！
          </p>
        </div>

        <div className="flex justify-center pt-2">
          <Link href="/online-meeting/day4" className="btn">
            Day4へ進む →
          </Link>
        </div>
      </section>
    </div>
  );
}
