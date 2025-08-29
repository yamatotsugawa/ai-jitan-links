import Link from "next/link";
import Image from "next/image";

export default function Day1(): JSX.Element {
  return (
    <div className="mx-auto max-w-3xl space-y-12">
      {/* ヒーロー */}
      <section className="space-y-3">
        <p className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
          AI時短チャレンジ Day1
        </p>
        <h1 className="h1">候補日メールを過去にする</h1>
        <p>
          こんにちは！YAMATO-AIの津川です。この10分で、面倒な候補日メールのやり取りをゼロにする、
          あなた専用の「予約ページ」を手に入れましょう！
        </p>
      </section>

      {/* うんざりする往復メール */}
      <section className="card space-y-4">
        <h2 className="h2">🤯 あの、うんざりするメールの往復</h2>
        <div className="space-y-2 text-slate-700">
          <p className="rounded bg-slate-50 p-2">「来週あたり、30分ほどお打ち合わせいかがでしょうか？」</p>
          <p className="rounded bg-red-50 p-2">「ありがとうございます。A日の10:00か、B日の16:00はいかがでしょう？」</p>
          <p className="rounded bg-slate-50 p-2">「申し訳ありません、その時間には別件が…。C日の14:00はいかがですか？」</p>
        </div>
        <p>
          こんなやり取りに、貴重な時間と集中力を奪われていませんか？<br />
          <span className="font-semibold text-red-600">今日、この不毛なラリーを過去のものにします！</span>
        </p>
      </section>

      {/* 実践：予約ページを作る */}
      <section className="space-y-4">
        <h2 className="h2">🚀 実践：あなた専用の予約ページを作ろう</h2>
        <p>
          今回は、「<strong>eeasy（イージー）</strong>」という無料の日程調整ツールを使います。まさに魔法のような機能が満載です！
        </p>

        <div className="card space-y-4">
          <div>
            <h3 className="font-semibold">📅 カレンダーと自動連携</h3>
            <p>
              Googleカレンダーと連携し、<span className="text-red-600">空いている時間だけ</span>を自動で相手に提示します。
            </p>
          </div>
          <div>
            <h3 className="font-semibold">🔗 リンクを送るだけ</h3>
            <p>
              予約ページのリンクを一度送るだけで、<span className="text-red-600">面倒なメールの往復が一切なくなります。</span>
            </p>
          </div>
          <div>
            <h3 className="font-semibold">👉 相手もワンクリック</h3>
            <p>相手は届いたリンクを開き、都合の良い時間をクリックするだけで予約完了。</p>
          </div>
        </div>

        <p>焦らず、一つずつ進めれば必ずできます。一緒に作っていきましょう！</p>
      </section>

      {/* Step1 */}
      <section className="card space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-500 font-bold text-white">1</div>
          <h2 className="h2">「eeasy」に登録する</h2>
        </div>
        <p>まずは、無料で使える日程調整ツール「eeasy」にアカウントを作ります。</p>

        <a href="https://meeting.eeasy.jp/" target="_blank" className="btn max-w-xs">
          1. 公式サイトを開く
        </a>

        <p>公式サイトを開いたら、真ん中の「無料で試す」ボタンをクリックしてください。</p>
        <p>右側の「個人で利用する」から「Google アカウント」を選択し、「個人登録(アカウント認証)」ボタンをクリックしましょう。</p>
        <p>
          <strong className="text-green-600">これだけでアカウント登録は完了です！</strong>
        </p>

        {/* 画像1：登録画面 */}
        <div className="flex justify-center">
          <Image
            src="/images/day1/eeasy-register.png"
            alt="eeasy 登録画面（個人で利用する → Google アカウント）"
            width={900}
            height={560}
            className="rounded shadow"
            priority
          />
        </div>
      </section>

      {/* Step2 */}
      <section className="card space-y-4">
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-500 font-bold text-white">2</div>
          <h2 className="h2">【ステップ２】初期設定とリンクのコピー</h2>
        </div>

        <p>
          アカウントが完成すると、自動的に初期設定画面に移ります。「あなたの情報」「高頻度の日程調整パターン」「Web会議ツール」などを入力します。
          （後からいつでも変更できるので、今は画面の指示に従って「次へ」でOK）
        </p>

        <p className="font-semibold">あなた専用のURLをコピー</p>
        <p>設定が終わると、上部メニュー「日程を調整する」→「予約受付ページ」に <strong>URLコピー</strong> ボタンがあります。これをクリック！</p>

        {/* 画像2：URLコピー画面 */}
        <div className="flex justify-center">
          <Image
            src="/images/day1/eeasy-url.png"
            alt="eeasy 予約受付ページの URL コピー"
            width={900}
            height={520}
            className="rounded shadow"
          />
        </div>

        <p className="rounded bg-slate-50 p-2 font-mono">https://meeting.eeasy.jp/〇〇/online</p>
        <p>上記のような、あなただけのページの住所（URLリンク）が取得できます。</p>
      </section>

      {/* 完了メッセージとテンプレ */}
      <section className="card space-y-4">
        <h2 className="h2">🎉 おめでとうございます！</h2>
        <p className="font-semibold text-red-600">これで全ての準備が整いました！</p>
        <p>
          あなたはもう、スケジュール帳と睨めっこしながら候補日メールを書く必要はありません。これからは、以下の文章をコピーして送るだけです。
        </p>

        <div className="rounded bg-white p-4 text-sm leading-relaxed shadow-inner">
          <p>
            <strong>【件名】お打ち合わせ日程のご調整のお願い（予約リンクあり）</strong>
          </p>
          <p className="mt-2">
            [相手企業名]
            <br />
            [相手の名前] 様
          </p>
          <p className="mt-2">
            いつもお世話になっております。
            <br />
            株式会社プロイノベーションの久原です。
          </p>
          <p className="mt-2">
            先日お話ししました件につき、日程調整のご案内です。
            <br />
            お手数をおかけしますが、以下の予約リンクよりご都合のよい日時をご選択いただけますと幸いです。
          </p>
          <p className="mt-2 font-semibold text-red-600">［ここに、先ほどコピーしたあなたの予約ページのリンクを貼り付ける］</p>
          <p className="mt-2">お手数をおかけしますが、何卒よろしくお願い申し上げます。</p>
        </div>
      </section>

      {/* 成果と次回予告 */}
      <section className="space-y-4">
        <div className="card font-semibold text-green-700 ring-1 ring-inset ring-green-200 bg-green-50">
          Day1 クリア！お見事です！
        </div>
        <p>
          あなたは今日、候補日メールの往復という、目には見えない大きなストレスを手放しました。これは、あなたの業務効率化における非常に大きな一歩です。
        </p>

        <div className="card space-y-2 border-l-4 border-red-500">
          <h3 className="font-semibold text-red-600">予告</h3>
          <p>
            明日は、<strong>Day2：面倒な録音・メモから解放される</strong>。<br />
            Zoom会議の「録音」や「メモ」から解放される方法を、また一緒に学んでいきましょう。ぜひ、お楽しみに！
          </p>
        </div>
      </section>

      <div className="flex justify-center pt-2">
          <Link href="/online-meeting/day2" className="btn">
            Day2へ進む →
          </Link>
        </div>
    </div>
  );
}
