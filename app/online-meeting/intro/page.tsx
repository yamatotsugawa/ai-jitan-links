import Link from "next/link";

export default function Intro() {
  return (
    <div className="space-y-12">
      {/* 見出し */}
      <section className="space-y-4">
        <p className="text-brand-600 font-semibold">AI時短チャレンジ はじめに</p>
        <h1 className="h1">7日間でAIスキルを身につけ、面倒な仕事を自動化する</h1>
        <p>
          「またメールの返信待ちか…」「あ、議事録つくらなきゃ…」<br />
          そんな<strong className="text-red-600">“見えない時間泥棒”</strong>に、今日で終止符を打ちませんか？
        </p>
        <p>
          この度は、「AI時短チャレンジ」にご参加いただき、ありがとうございます。
        </p>
      </section>

      {/* どう使えばいいの？ */}
      <section className="card space-y-4">
        <h2 className="h2">🤔 「で、結局どう使えばいいの？」</h2>
        <p>
          世の中には、毎日のように新しいAIのニュースが溢れています。でも、「で、結局どれをどう使えば仕事が楽になるの？」と感じていませんか？
        </p>
        <p>
          この講座は、ニュースで次々と紹介される新しい機能の紹介や、たくさんの情報をただ集めたものとは、<strong className="text-red-600">全く違います。</strong>
        </p>
        <p>
          私自身が数々のツールを試し、失敗を重ねた末にたどり着いた、<strong className="text-red-600">“実証済みの業務フロー”</strong>そのものです。
        </p>
      </section>

      {/* プログラム対象 */}
      <section className="card space-y-4">
        <h2 className="h2">🎯 こんなあなたのためのプログラムです</h2>
        <ul className="space-y-2">
          <li>✅ 終わらないメールの往復に、集中力を削られている</li>
          <li>✅ 会議後の議事録作成が、いつも心の重荷になっている</li>
          <li>✅ 業務改善のやり方がわからず、何から手をつければいいか迷っている</li>
        </ul>
        <p className="text-red-600 font-semibold">
          一つでも当てはまるなら、この7日間はあなたのためのプログラムです。
        </p>
        <p>
          難しいことは一切ありません。ただ、私のやり方を真似するだけ。それだけで、7日後には結果が出るように設計しています。
        </p>
      </section>

      {/* Before / After */}
      <section className="space-y-6">
        <h2 className="h2">この７日間であなたが手に入れる“未来”</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card space-y-3">
            <h3 className="font-bold">いま (Before)</h3>
            <p>😩 日程調整メールが何往復も続き、気づけばいつも時間ギリギリ…。</p>
            <p>🤯 会議の録音を忘れ、記憶を頼りに議事録をつくり、憂鬱な残業コースへ…。</p>
            <p>🔍 社内に散らばった資料を探すだけで集中力が途切れ、1日に何分も無駄にしている…。</p>
          </div>
          <div className="card space-y-3">
            <h3 className="font-bold text-brand-700">７日後 (After)</h3>
            <p>✨ 候補日のメールはもう送らない。専用リンクを１回送るだけ。</p>
            <p>✅ 録音と文字起こしは全自動。AIが作った要約を5分で確認するだけ。</p>
            <p>🚀 AIに「あの件どうなった？」と聞くだけで、探し物はゼロに。</p>
          </div>
        </div>
        <p>
          生まれた時間で、本当にやるべき仕事に集中したり、定時で帰って好きなことを楽しんだり。そんな新しい働き方が、あなたのものになります。
        </p>
      </section>

      {/* 学習スケジュール */}
      <section className="card space-y-4">
        <h2 className="h2">７日間の学習スケジュール</h2>
        <p>
          これから7日間、私が実際に使っている「オンライン会議が驚くほど楽になる」業務フローを、1ステップずつ体験していきます。すべてクリック中心の簡単なステップです。
        </p>
        <ul className="space-y-2">
          <li>Day 1 候補日メールを過去にする</li>
          <li>Day 2 面倒な録音・メモから解放される</li>
          <li>Day 3 会議の舵を取り、議論を支配する</li>
          <li>Day 4 「あの資料どこ？」をなくす仕組み作り</li>
          <li>Day 5 AIで次の「一手」を見つけ出す</li>
          <li>Day 6 プロンプトもAIで提案骨子を練る</li>
          <li>Day 7 心を動かす提案資料を作る</li>
        </ul>
      </section>

      {/* ツール紹介 */}
      <section className="space-y-4">
        <h2 className="h2">🛠️ これから使う“便利な道具”たち</h2>
        <p>この講座で使う、頼れる相棒たちです。ほとんどが無料で使えます。</p>
        <ul className="space-y-2">
          <li>✅ eeasy（日程調整ツール）… 無料でOK</li>
          <li>✅ Zoom（Web会議ツール）… 無料でOK</li>
          <li>✅ Notta（自動で文字起こしするツール）… <span className="text-red-600">有料</span></li>
          <li>✅ Google Docs（文章作成ツール）… 無料</li>
          <li>✅ NotebookLM（資料を賢く検索するツール）… 無料</li>
          <li>✅ Gemini（文章づくりを手伝ってくれるAI）… 無料でOK</li>
        </ul>

        <div className="card bg-orange-50 space-y-3">
          <h3 className="font-semibold">唯一有料のNottaについて</h3>
          <p>
            議事録作成の時間を時給換算すればすぐに元が取れる、強力な時短ツールです。Day3のレッスンで実際に導入を一緒に行いますが、参考として「最もお得に始める手順の概要」を残しておきます。
          </p>
          <ol className="list-decimal ml-5 space-y-1">
            <li>
              必ず以下の「紹介リンク」から公式サイトにアクセスします。
              <br />
              <a href="https://notta.cello.so/f36TwRki6ZD" className="underline text-brand-600">
                https://notta.cello.so/f36TwRki6ZD
              </a>
            </li>
            <li>決済画面で「年間プラン 40％OFF」が適用されていることを確認します。</li>
            <li>「プロモーションコードを利用」に <code>CR45</code> を入力し、適用ボタンを押します。</li>
            <li>価格が更新されたら、一度ウィンドウ右上の「×」で閉じます。</li>
            <li>中央に出る「初回限定！さらに10％OFF」のバナーをクリック。</li>
          </ol>
        </div>
      </section>

      {/* 約束 */}
      <section className="card space-y-4">
        <h2 className="h2">約束してほしい、たった３つのこと</h2>
        <ol className="list-decimal ml-5 space-y-2">
          <li><strong>まずはそっくりそのまま真似する</strong> – 結果が出てからオリジナルで十分です。</li>
          <li><strong>毎日10分、時間をつくる</strong> – スタンプラリーのように一つずつクリア。</li>
          <li><strong>疑問が出たら、すぐに聞く</strong> – LINEで気軽に質問してください。</li>
        </ol>
      </section>

      {/* 最初の一歩 */}
      <section className="space-y-4">
        <h2 className="h2">未来を変えるための「最初の小さな一歩」</h2>
        <p>さあ、準備は整いました。今すぐできるアクションは、たった２つです。</p>
        <div className="card space-y-2">
          <h3 className="font-semibold">ACTION 1</h3>
          <p>Googleカレンダーを開き、明日から７日間、「10分間の未来への投資」と予定を登録する。</p>
        </div>
        <div className="card space-y-2">
          <h3 className="font-semibold">ACTION 2</h3>
          <p>明日から毎朝LINEに届くレッスンを、必ずチェックすると心に決める。</p>
        </div>
        <p className="text-center text-red-600 font-bold">
          それでは明日から、候補日メール０往復の世界へ。
        </p>
        <p className="text-center">Day1のレッスンは明日の朝、LINEでお届けします。ぜひお楽しみに！</p>
      </section>
    </div>
  );
}
