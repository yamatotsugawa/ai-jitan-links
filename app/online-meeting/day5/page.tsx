// app/online-meeting/day5/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI時短チャレンジ Day5｜AIで次の「一手」を見つけ出す",
  description:
    "NotebookLM を“外部脳”として育て、次の打ち合わせで話すべき「勝ち筋」を見つけるための実践手順を学びます。",
};

export default function Day5Page() {
  return (
    <main className="space-y-10">
      {/* ===== ヒーロー（Day4と統一） ===== */}
      <section className="space-y-4">
        <p className="text-brand-600 font-semibold">AI時短チャレンジ Day5</p>
        <h1 className="h1">AIで次の「一手」を見つけ出す</h1>
        <p>
          こんにちは。YAMATO-AIの津川です。昨日は、AIと共に「“あの資料どこ？”をなくす仕組み作り」を完成させましたね。本当にお疲れ様でした。
          さて、本日は Day5 です。今日は、これまでに蓄積した全ての資料（議事録、提案書など）
          をAIに読み込ませ、あなた“だけ”のいつでも相談できる「外部脳」を構築します。そして、その脳を使って、次の打ち合わせで何を話すべきか、その「勝ち筋」を見つけ出す方法を学びます。
        </p>
      </section>

      {/* ===== 認識合わせ ===== */}
      <section className="card space-y-4">
        <h2 className="h2 flex items-center gap-2">
          <span className="text-xl">🏠</span>
          その資料、ただの「倉庫の肥やし」になっていませんか？
        </h2>

        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            お客様との打ち合わせ資料、過去の提案書、議事録…。私たちは日々、たくさんの資料を作成し、クラウドストレージに「保管」しています。
          </p>
          <p>
            しかし、それはまるで、貴重な文献を、ただ倉庫に積み上げているようなもの。いざ「ある資料の、あの部分を次の提案に使いたい」と思っても、膨大なファイルの中から探し出すのは一苦労です。結果、ほとんどの資料は二度と見返されることなく、「倉庫の肥やし」になってしまいます。
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-slate-800">
            <span className="font-semibold text-brand-700">この資料の「蓄積」を、</span>
            いつでも相談できる賢い
            <span className="font-semibold text-emerald-700">「図書館」</span>
            へと変貌させます。
          </p>
        </div>

        <p className="text-slate-700 leading-relaxed">
          この「外部脳」があれば、新しくプロジェクトに参加したメンバーへの教育も、AIに任せることができます。「この資料、全部読んどいて」と分厚いファイルを渡すより、「このAIに何でも質問して、概要を掴んでみて」と言う方が、何倍も効果的です。
        </p>
      </section>

      {/* ===== 実践見出し ===== */}
      <section className="card space-y-4">
        <h2 className="h2 flex items-center gap-2">
          <span className="text-xl">🚀</span>
          実践：「外部脳」に考えさせ、勝利の糸口を探る
        </h2>

        <p className="text-slate-700 leading-relaxed">
          さて、ここからは Day5 の実践です。ご安心ください、今日は新しいツールは一切出てきません。これまで私たちが育ててきた、あなた“だけ”の「外部脳（NotebookLM）」を本格的に動かしていきます。
        </p>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-400 rounded-l-xl" />
          <div className="bg-orange-50 rounded-2xl pl-5 pr-5 py-5">
            <p className="font-semibold text-slate-900">目的は、ただ一つ。</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              <span className="font-semibold text-slate-900">
                「自社の商品やサービスを、お客様に『ぜひ欲しい』と思ってもらうための、完璧な作戦を立てること」。
              </span>
            </p>
          </div>
        </div>

        <p className="text-slate-700 leading-relaxed">
          その作戦のヒントは、あなたがこれまで蓄積してきた資料という「宝の山」の中に眠っています。AIという優秀な探知機を使って、その宝の山から、次の打ち合わせで話すべき、たった一つの「勝利の糸口」を見つけ出しましょう。
        </p>
      </section>

      {/* ===== ステップ 1 ===== */}
      <section className="card space-y-3">
        <div className="flex items-start gap-3">
          <div className="shrink-0 rounded-full bg-orange-500 text-white w-8 h-8 grid place-items-center font-bold">
            1
          </div>
          <h3 className="text-lg font-semibold text-slate-900">
            資料を追加し、「外部脳」を育てる
          </h3>
        </div>
        <p className="text-slate-700 leading-relaxed">
          まずは、Day4 で作った NotebookLM のノートブックを開いてください。そして、今回の案件に関連する、過去の議事録や自社の提案書など、持っている資料を全て「ソースを追加」からアップロードしましょう。資料が多ければ多いほど、あなたの「外部脳」は賢く育っていきます。
        </p>
      </section>

      {/* ===== ステップ 2 ===== */}
      <section className="card space-y-3">
        <div className="flex items-start gap-3">
          <div className="shrink-0 rounded-full bg-orange-500 text-white w-8 h-8 grid place-items-center font-bold">
            2
          </div>
          <h3 className="text-lg font-semibold text-slate-900">「世界地図」で全体像を掴む</h3>
        </div>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            資料を全て追加したら、まずは NotebookLM の「ブリーフィング・ドキュメント」という機能を使ってみましょう。これは、追加した全ての資料の概要を、AIが自動でまとめてくれる機能です。
          </p>
          <p>
            しかし、これはあくまで「世界地図」のようなもの。全体の概要は掴めますが、情報が多すぎて、これだけでは「じゃあ、次はどこへ行けばいいのか」という具体的な作戦は立てられません。世界地図を見ながら、車の運転はできませんよね。
          </p>
        </div>
      </section>

      {/* ===== ステップ 3 ===== */}
      <section className="card space-y-3">
        <div className="flex items-start gap-3">
          <div className="shrink-0 rounded-full bg-orange-500 text-white w-8 h-8 grid place-items-center font-bold">
            3
          </div>
          <h3 className="text-lg font-semibold text-slate-900">「マインドマップ」で深く潜る</h3>
        </div>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            ここからが本番です。世界地図から、日本の地図、東京の地図、港区の地図へと、どんどんズームインしていきます。
          </p>
          <p>
            NotebookLM の機能から、「マインドマップ」を生成してください。画面には、資料に出てきた重要なキーワードが線で結ばれた、情報の地図が表示されます。これが、このプロジェクトの全体像を可視化したものです。
          </p>
          <p>
            この地図の地名（キーワード）をクリックすると、その部分に関連する情報だけをAIが抜き出して、要約してくれます。
          </p>
        </div>
      </section>

      {/* ===== Congrats & 戦略思考 ===== */}
      <section className="card space-y-4">
        <h3 className="h2">🎉 おめでとうございます！</h3>
        <p className="text-brand-700 font-semibold">売れる営業マンの「戦略」がこの手に！</p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
            <p className="font-semibold text-rose-700">✖ 売れない営業マンは…</p>
            <p className="mt-2 text-rose-800">
              「この商品は素晴らしいですよ！」と、いきなり自社の“商品やサービスの話”をします。
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="font-semibold text-emerald-700">✅ 売れる営業マンは…</p>
            <p className="mt-2 text-emerald-800">
              お客様も気づいていないような「課題」の話をし、最終的にお客様自身の口から助けを求めさせます。
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-slate-900">そして、ここからが最も重要です。</p>
          <p className="mt-2 text-slate-800 leading-relaxed">
            その見つけた複数の課題の中から、
            <span className="font-semibold underline decoration-2 decoration-amber-500">
              「この課題ならば、自社の“商品やサービス”で、見事に解決できる」
            </span>
            というものを、
            <span className="font-semibold underline decoration-2 decoration-amber-500">
              一つだけ選び抜く
            </span>
            のです。
          </p>
        </div>

        <p className="text-slate-700 leading-relaxed">
          その「的」となるキーワードをクリックし、AIがまとめた内容を深く読み込みます。それが、次回の打ち合わせであなたが話すべき「議題（アジェンダ）」のネタになります。
        </p>
        <p className="text-slate-700 leading-relaxed">
          あなたの仕事は、商品の説明をすることではありません。戦略的に選び抜いた「課題」についてお客様と話し、議論を深めることで、お客様自身の口から「では、どうすればこの問題を解決できるのでしょうか？」という言葉を引き出すこと。
        </p>
        <p className="text-slate-900 font-semibold">
          その言葉を引き出した時、初めてあなたの提案は、お客様にとって「売り込み」ではなく、「救いの手」になるのです。
        </p>
      </section>

      {/* ===== Day5クリア → 予告 → 次へ（Day4と同一トーン） ===== */}
      <section className="card space-y-6">
        <div className="w-full flex justify-center">
          <span className="inline-block rounded-full bg-emerald-100 text-emerald-700 px-6 py-2 font-semibold">
            Day5クリア！おめでとうございます！
          </span>
        </div>
        <p>
          あなたは今日、散らばっていた情報を、いつでも相談できる「外部脳」へと進化させました。そして、その脳を使って次のビジネスチャンスの「種」を見つけ出すという、極めて戦略的なスキルを身につけたのです。
        </p>
        <p>さて、次回の打ち合わせで話すべき「最高のテーマ」は見つかりましたね。</p>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-400 rounded-l-xl" />
          <div className="bg-white rounded-2xl border border-gray-200 pl-5 pr-5 py-5">
            <p className="font-semibold text-slate-900">明日は、Day6：プロンプトもAIで提案骨子を練る</p>
            <p className="mt-2 text-slate-700 leading-relaxed">
              そのテーマを元に、お客様の心を動かし、「それ、ぜひ詳しく聞きたい！」と言わせるための説明力のある提案骨子を、AIと一緒にたった5分で作成します。今日の戦略立案が、明日の具体的な成果に直結します。ぜひ、お楽しみに！
            </p>
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <Link href="/online-meeting/day6" className="btn">
            Day6へ進む →
          </Link>
        </div>
      </section>
    </main>
  );
}
