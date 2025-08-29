import Image from "next/image";
import Link from "next/link";

const REF_LINK = "https://notta.cello.so/KP98H0EtfDg"; // 紹介リンク（報酬発生URL）

export default function Day2(): JSX.Element {
  return (
    <div className="space-y-12">
      {/* ヘッダー */}
      <section className="space-y-4">
        <p className="text-brand-600 font-semibold">AI時短チャレンジ Day2</p>
        <h1 className="h1">面倒な録音・メモから解放される</h1>
        <p>
          こんにちは。YAMATO-AIの津川です。<br />
          昨日は日程調整の自動化、お見事でした！あれだけでも、日々の見えない手間が、かなり減ったのではないでしょうか。<br />
          さて、本日はDay2です。この10分で、あなたはZoom会議における
          <strong>「録音ボタンを押し忘れる」</strong>というヒヤリとする失敗から、永久に解放されます。
        </p>
      </section>

      {/* しまった！は、もう起きない */}
      <section className="card space-y-4">
        <h2 className="h2">😱 「しまった！」は、もう起きない</h2>
        <div className="space-y-3 text-slate-700">
          <p>「今日の会議、重要な決定事項が多かったな。後で議事録にまとめよう…」</p>
          <p className="bg-slate-50 p-3 rounded">
            会議が終わった後、そう思ってZoomを閉じようとした瞬間、画面の下にあるはずの
            <strong>「レコーディング」の赤いランプ</strong>が点いていないことに気づく。
          </p>
          <p className="text-red-600 font-semibold text-lg">「しまった！レコーディングボタン、押し忘れた…」</p>
          <p>
            今日は、そんなうっかりミスを100%防いでくれる<strong>「AI会議アシスタント」</strong>を、あなたのZoomに招待する準備をします。
          </p>
        </div>
      </section>

      {/* 導入の意義 */}
      <section className="card space-y-4">
        <h2 className="h2">🚀 実践：AIアシスタント「Notta」を導入しよう</h2>
        <p>
          今日は、「<strong>Notta（ノッタ）</strong>」という、あなたの仕事を劇的に変える可能性を秘めた超優秀なAIアシスタントを導入します。
          この講座で紹介するツールの中で唯一有料ですが、Nottaは次の価値を提供します。
        </p>
        <div className="grid gap-3">
          <div className="bg-slate-50 rounded p-3">
            <h3 className="font-semibold">🧑‍💻 会議に自動参加・自動録音</h3>
            <p>Zoom会議に自動で参加し、一言一句漏らさず録音・記録。「録音ボタンの押し忘れ」が物理的になくなります。</p>
          </div>
          <div className="bg-slate-50 rounded p-3">
            <h3 className="font-semibold">📝 AIが議事録を自動作成</h3>
            <p>記録された音声データを、AIが数分で議事録のたたき台にまとめます。（Day3で体験）</p>
          </div>
        </div>
        <p>
          この<strong>「精神的な安心感」</strong>と<strong>「圧倒的な時短効果」</strong>は一度体験するともう戻れません。まずは
          <strong>最もお得に始められる手順</strong>で登録していきましょう。
        </p>
      </section>

      {/* STEP 1: 登録（最もお得な手順） */}
      <section className="card space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-500 text-white grid place-items-center font-bold">1</div>
          <h2 className="h2">Nottaに登録する（最もお得な手順）</h2>
        </div>

        {/* 1. 紹介リンク */}
        <div className="bg-white rounded-2xl p-4 shadow-inner space-y-2">
          <h3 className="font-semibold">1. 紹介リンクから公式サイトを開く</h3>
          <p>必ず、以下の「紹介リンク」から公式サイトを開いてください。このリンクから進むことで、最初の割引が適用されます。</p>
          <a href={REF_LINK} target="_blank" className="btn max-w-md">
            Notta公式サイト（紹介リンク）を開く
          </a>
          {/* ← ここは画像なし */}
        </div>

        {/* 2. 新規作成 */}
        <div className="bg-white rounded-2xl p-4 shadow-inner space-y-2">
          <h3 className="font-semibold">2. アカウントを新規作成</h3>
          <p>
            画面の指示に従ってアカウントを作成します。Day1の eeasy 同様に<strong>「Googleでログイン」</strong>を選ぶと、
            後のカレンダー連携が楽でおすすめです。
          </p>
        </div>

        {/* 3. 年間プラン＋コード（Notta_1） */}
        <div className="bg-white rounded-2xl p-4 shadow-inner space-y-3">
          <h3 className="font-semibold">3. 年間プランとプロモーションコード入力</h3>
          <p>有料プランの選択画面で「年間プラン」を選び、プロモーションコード欄に下記を入力して <strong>適用</strong> を押してください。</p>
          <div className="border-2 border-green-300 rounded-xl p-4 text-center font-mono text-xl tracking-widest bg-green-50">
            CR45
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/day2/Notta_1.png"
              alt="Notta 決済画面：プロモーションコード入力"
              width={900}
              height={560}
              className="rounded shadow"
            />
          </div>
        </div>

        {/* 4-5. さらに10%OFF（Notta_2） */}
        <div className="bg-white rounded-2xl p-4 shadow-inner space-y-3">
          <h3 className="font-semibold text-red-600">4.【重要】さらにお得にする裏技！</h3>
          <p>割引適用後、<strong>一度ウィンドウ右上の「×」で閉じる</strong>。</p>
          <h3 className="font-semibold">5. さらに10％OFF</h3>
          <p>
            中央に<strong>「初回限定！さらに10％OFF」</strong>のバナーが出たらクリック。（出ない場合は、手順3→4を数回繰り返すと表示されることが多いです）
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/day2/Notta_2.png"
              alt="Notta 初回限定 さらに10%OFF バナー"
              width={900}
              height={560}
              className="rounded shadow"
            />
          </div>
        </div>

        {/* 6. 登録完了（Notta_3） */}
        <div className="bg-white rounded-2xl p-4 shadow-inner space-y-3">
          <h3 className="font-semibold">6. 登録を完了する</h3>
          <p>最終価格を確認し、<strong>「プレミアムに登録する」</strong>から決済情報を入力して完了。</p>
          <div className="flex justify-center">
            <Image
              src="/images/day2/Notta_3.png"
              alt="Notta 決済最終画面（登録完了前）"
              width={900}
              height={560}
              className="rounded shadow"
            />
          </div>
          <p className="text-green-600 font-semibold">お疲れ様でした！これで、最もお得な方法でNottaを始める準備が整いました。</p>
        </div>
      </section>

      {/* STEP 2: カレンダー連携（Notta_4） */}
      <section className="card space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-500 text-white grid place-items-center font-bold">2</div>
          <h2 className="h2">カレンダーと連携させる</h2>
        </div>
        <p>
          登録したNottaと、あなたのGoogleカレンダーを<strong>連携</strong>します。これでAIアシスタントが会議に自動参加できます。<br />
          画面右上の<strong>アイコン</strong> → <strong>「設定」</strong> → 左メニュー<strong>「カレンダー」</strong>から<strong>「Googleカレンダー」</strong>を連携。
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/day2/Notta_4.png"
            alt="Notta 設定：カレンダー連携"
            width={900}
            height={560}
            className="rounded shadow"
          />
        </div>
      </section>

      {/* STEP 3: 自動参加ON（Notta_5） */}
      <section className="card space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-500 text-white grid place-items-center font-bold">3</div>
          <h2 className="h2">自動参加の設定をオンにする</h2>
        </div>
        <p>
          仕上げです。画面右上の<strong>アイコン</strong> → <strong>「拡張機能とアプリを取得」</strong> → 左メニュー<strong>「Notta Bot」</strong>から
          <strong>「カレンダー予定への自動参加」</strong>を<strong>オン</strong>に。
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/day2/Notta_5.png"
            alt="Notta Bot：カレンダー予定への自動参加をオンにする"
            width={900}
            height={560}
            className="rounded shadow"
          />
        </div>
        <p className="text-green-700 font-semibold">以上です！設定作業は、たったこれだけで完了です。</p>
      </section>

      {/* 完了メッセージ */}
      <section className="card space-y-4">
        <h2 className="h2">🎉 おめでとうございます！</h2>
        <p className="text-slate-700">
          あとは、安心して会議を待つだけ。
          「今日は設定しただけで何も成果が見えないの？」――その通りです。
          次回のZoom会議から<strong>自動で効果が発揮</strong>されます。
        </p>
        <div className="bg-white p-4 rounded shadow-inner">
          次回の会議が始まると、参加者一覧に<strong className="text-red-600">「Notta Bot」</strong>が静かに入室。
          以後、あなたは録音ボタンを気にする必要はありません。今日のタスクは完了。あとは次の会議を待つだけです。
        </div>
      </section>

      {/* 成果と次回予告 */}
      <section className="space-y-4">
        <div className="card bg-green-50 text-green-700 font-semibold">
          Day2 クリア！素晴らしい集中力ですね！
        </div>
        <p>
          スタンプラリーの2つ目のスタンプが押せました。録音忘れというヒヤリから完全解放。
          これは精神的な安心感の面で非常に大きな前進です。
        </p>
        <div className="card border-l-4 border-red-500 space-y-2">
          <h3 className="font-semibold text-red-600">予告</h3>
          <p>
            明日は、<strong>Day3：会議の舵を取り、議論を支配する</strong>。<br />
            会議中に内容を瞬時に理解し、論点整理と「次にすべきアクション（質問など）」を提案してくれます。お楽しみに！
          </p>
        </div>
        <div className="flex justify-center pt-2">
          <Link href="/online-meeting/day3" className="btn">
            Day3へ進む →
          </Link>
        </div>
      </section>
    </div>
  );
}
