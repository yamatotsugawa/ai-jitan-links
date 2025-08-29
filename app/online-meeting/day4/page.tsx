"use client";

import Link from "next/link";
import { useState } from "react";
import type { JSX } from "react";

const PROMPT_TEXT = `あなたは優秀なビジネスアシスタントです。
ソースとして提供された議事録の文字起こしデータを元に、以下の形式でビジネス日報を作成してください。

本日の議事録

1. 会議名
（会議の名称を記述）

2. 日時
（会議の日時を記述）

3. 参加者
（参加者を列挙）

4. 決定事項
（箇条書きで簡潔に記述）

5. TODO（誰が、いつまでに、何をするか）
（担当者名）：「タスク内容」（期限：YYYY/MM/DD）

6. ネクストアクション
（次に繋がる行動を記述）`;

export default function Day4() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROMPT_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // クリップボード権限がないなどの場合は無視
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <p className="text-brand-600 font-semibold">AI時短チャレンジ Day4</p>
        <h1 className="h1">「あの資料どこ？」をなくす仕組み作り</h1>
        <p>
          こんにちは。YAMATO-AIの津川です。昨日は、AIを「作戦参謀」として使うプロの技を体験しました。
          本日はDay4。ここから本格的な<strong>資料作成の自動化</strong>に入ります。Nottaの会議データを、ボタン一つで正式な議事録へ変換する
          「工場」の仕組みを一緒に作ります。少し設定は多いですが、ここを越えると資料作成時間は劇的に短縮されます。
        </p>
      </section>

      {/* 迷子資料の課題 */}
      <section className="card space-y-4">
        <h2 className="h2">🤔 あの議事録、どこに保存したっけ…？</h2>
        <p>「先週のA社との議事録、どこに保存したかな…」</p>
        <p>「ファイル名は『A社議事録』だっけ、『MTG議事録』だっけ…」</p>
        <p>
          せっかく作った資料も、すぐ見つからなければ価値は半減します。会議メモや個人的な気づきを別で残したいこともあるでしょう。
          今日はそんな<strong>資料の迷子をなくす</strong>第一歩を踏み出します。
        </p>
      </section>

      {/* なぜ NotebookLM */}
      <section className="card space-y-4">
        <h2 className="h2">💡 なぜ「NotebookLM」を使うのか？</h2>
        <p>
          NotebookLM は、ただの保管場所ではなく、あなた専用の<strong>賢い資料図書館</strong>を作るためのツールです。
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border p-4 bg-white">
            <h3 className="font-semibold">AIが資料内容を全て記憶</h3>
            <p className="text-sm mt-1">「あの会議で何が決まった？」にピンポイントで回答してくれます。</p>
          </div>
          <div className="rounded-xl border p-4 bg-white">
            <h3 className="font-semibold">情報を横断的に検索</h3>
            <p className="text-sm mt-1">複数資料にまたがる情報も、横断して引き出せます。</p>
          </div>
          <div className="rounded-xl border p-4 bg-white sm:col-span-2">
            <h3 className="font-semibold">あなた専属のアシスタント</h3>
            <p className="text-sm mt-1">育てるほど賢くなる、頼れる外部脳の感覚で使えます。</p>
          </div>
        </div>
        <p>この「賢いアシスタント」を育てるための、最初のステップへ進みましょう。</p>
      </section>

      {/* 実践：工場を建設 */}
      <section className="card space-y-4">
        <h2 className="h2">🚀 実践：議事録作成の「工場」を建設する</h2>
        <p>
          Day3でNottaが記録した<strong>生データ</strong>を、いつでも使える<strong>公式な議事録</strong>へ自動変換する仕組みを作ります。
        </p>

        {/* Step 1 */}
        <div className="card space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-500 text-white grid place-items-center font-bold">1</div>
            <h3 className="font-semibold">NottaからGoogleドキュメントへ</h3>
          </div>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Nottaにログインし、Day3で使った会議データを開きます。</li>
            <li>画面右上の「ダウンロード」をクリック。</li>
            <li>ファイル形式で<strong>DOCX</strong>を選び、PCに保存。</li>
            <li>Googleドライブにドラッグ＆ドロップでアップロード。</li>
            <li>アップロードしたファイルを右クリック →「アプリで開く」→「Googleドキュメント」。</li>
            <li>左上「ファイル」→「<strong>Googleドキュメントとして保存</strong>」。</li>
          </ol>
        </div>

        {/* Step 2 */}
        <div className="card space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-500 text-white grid place-items-center font-bold">2</div>
            <h3 className="font-semibold">プロの技①：命名規則</h3>
          </div>
          <p>後から驚くほど探しやすくなる<strong>プロの習慣</strong>です。次のルールを推奨します。</p>
          <div className="rounded-lg border bg-white p-4">
            <p className="font-medium">ミーティングの命名規則の例：</p>
            <pre className="mt-2 bg-slate-50 p-3 rounded text-sm">MTG_YYYYMMDD_会社名_案件名</pre>
            <p className="font-medium mt-3">具体例：</p>
            <pre className="mt-2 bg-slate-50 p-3 rounded text-sm">MTG_20250728_株式会社A_新サービス開発</pre>
          </div>
        </div>

        {/* Step 3 */}
        <div className="card space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-500 text-white grid place-items-center font-bold">3</div>
            <h3 className="font-semibold">プロの技②：秘密のメモ帳</h3>
          </div>
          <p>AIには見せない個人メモ領域を作ります（NotebookLMは子ページを基本学習しません）。</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Googleドキュメント上部の「+（タブを追加）」をクリック。</li>
            <li>新規の「タブ2」を作り、「タブ1」の<strong>子ページ</strong>へ移動。</li>
            <li>この新ページに、個人的な所感や議事録に載せたくない情報を自由に記載。</li>
          </ol>

          {/* 画像（ご指定ファイル名） */}
          <div className="my-4">
            <img
              src="/images/day4/GoogleDocs_001.png"
              alt="Googleドキュメントで子タブにメモを置く操作イメージ"
              className="rounded-lg shadow-md border w-1/2 max-w-md"
            />
          </div>

          <div className="bg-amber-50 text-amber-900 rounded p-3">
            【ポイント】この子ページは基本的にNotebookLMの学習対象外。あなた専用の隠しメモとして使えます。
          </div>
        </div>

        {/* Step 4 */}
        <div className="card space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-500 text-white grid place-items-center font-bold">4</div>
            <h3 className="font-semibold">NotebookLMへ資料を投入</h3>
          </div>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <a href="https://notebooklm.google/" target="_blank" className="underline underline-offset-4">
                NotebookLM
              </a>
              を開き、新しいノートブックを作成。
            </li>
            <li>「ソースを追加」→「Googleドライブ」→先ほどのGoogleドキュメントを選択。</li>
            <li>ノートブック名は「MTG_会社名_案件名」など、後で探しやすい名称に。</li>
          </ol>
          <div className="bg-orange-50 text-orange-900 rounded p-3">
            【最重要ポイント】今回の議事録を作るときは、<strong>該当資料のチェックボックス「だけ」</strong>にチェックを入れた状態で実行してください。
            他の資料にもチェックが入っていると内容が混ざります。
          </div>
        </div>
      </section>

      {/* おめでとう・プロンプト */}
      <section className="card space-y-4">
        <h2 className="h2">🎉 おめでとうございます！</h2>
        <p className="text-orange-600 font-semibold">あとはAIに「議事録を作って！」とお願いするだけです。</p>
        <p>
          ブラウザで{" "}
          <a href="https://gemini.google.com/" target="_blank" className="underline underline-offset-4">
            Gemini
          </a>{" "}
          を開き、下の<strong>プロンプト（魔法の指示文）</strong>を貼り付けてから、NotebookLM上の会議テキストを貼り付けて実行してください。
        </p>

        <div className="bg-slate-900 text-slate-50 rounded-xl p-4 text-sm leading-relaxed">
          <pre className="whitespace-pre-wrap">{PROMPT_TEXT}</pre>
        </div>

        <button onClick={handleCopy} className="btn max-w-xs">
          {copied ? "コピーしました！" : "プロンプトをコピー"}
        </button>

        <div className="bg-amber-50 text-amber-900 rounded p-3">
          【ポイント】この日報フォーマットはサンプルです。自社形式に合わせて文言を編集すると、AIはその通りに出力してくれます。
        </div>
      </section>

      {/* 成果と予告 */}
      <section className="space-y-4">
        <div className="card bg-green-50 text-green-700 font-semibold">
          Day4クリア！本当にお疲れ様でした！
        </div>
        <p>
          命名規則や非公開メモ管理など、プロの資料管理術に加え、<strong>ボタン一つで議事録のたたき台</strong>が作れる工場を手に入れました。
        </p>

        <div className="card border-l-4 border-red-500 space-y-2">
          <h3 className="font-semibold text-red-600">予告</h3>
          <p>
            明日は<strong>Day5：AIで次の「一手」を見つけ出す</strong>。NotebookLMに蓄積した全資料を外部脳化し、いつでも欲しい情報を引き出す方法を学びます。
          </p>
        </div>

        <div className="flex justify-center pt-2">
          <Link href="/online-meeting/day5" className="btn">
            Day5へ進む →
          </Link>
        </div>
      </section>
    </div>
  );
}
