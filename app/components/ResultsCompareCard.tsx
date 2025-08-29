// components/ResultsCompareCard.tsx
import clsx from "clsx";

type Props = {
  title: string;
  caption?: string;
  labelLeft?: string;
  labelRight?: string;
  itemsBefore: [string, number][];
  itemsAfter: [string, number][];
  totalBefore: number;
  totalAfter: number;
  badge: string;
  tone?: "blue" | "green";
  note?: string; // ← 追加
};

export default function ResultsCompareCard({
  title,
  caption,
  labelLeft = "Before",
  labelRight = "After",
  itemsBefore,
  itemsAfter,
  totalBefore,
  totalAfter,
  badge,
  tone = "blue",
  note, // ← 追加
}: Props) {
  const toneClasses =
    tone === "green"
      ? { ring: "ring-emerald-200", head: "text-emerald-700", pill: "bg-emerald-100 text-emerald-800" }
      : { ring: "ring-sky-200", head: "text-sky-700", pill: "bg-sky-100 text-sky-800" };

  return (
    <section className={clsx("rounded-2xl bg-white p-6 shadow-sm ring-1", toneClasses.ring)}>
      <div className="flex items-center justify-between gap-3">
        <h3 className={clsx("text-lg font-bold", toneClasses.head)}>{title}</h3>
        <span className={clsx("rounded-full px-3 py-1 text-xs font-semibold", toneClasses.pill)}>
          {badge}
        </span>
      </div>
      {caption && <p className="mt-1 text-slate-600 text-sm">{caption}</p>}

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
          <p className="text-xs font-semibold text-slate-500">{labelLeft}</p>
          <ul className="mt-2 space-y-1 text-slate-800">
            {itemsBefore.map(([label, min]) => (
              <li key={label} className="flex justify-between">
                <span>{label}</span>
                <span className="font-semibold">{min}分</span>
              </li>
            ))}
          </ul>
          <div className="mt-2 border-t border-slate-200 pt-2 flex justify-between font-bold">
            <span>合計</span>
            <span>{totalBefore}分</span>
          </div>
        </div>

        <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
          <p className="text-xs font-semibold text-slate-500">{labelRight}</p>
          <ul className="mt-2 space-y-1 text-slate-800">
            {itemsAfter.map(([label, min]) => (
              <li key={label} className="flex justify-between">
                <span>{label}</span>
                <span className="font-semibold">{min}分</span>
              </li>
            ))}
          </ul>
          <div className="mt-2 border-t border-slate-200 pt-2 flex justify-between font-bold">
            <span>合計</span>
            <span>{totalAfter}分</span>
          </div>
        </div>
      </div>

      {note && (
        <p className="mt-3 text-xs text-slate-500">
          {note}
        </p>
      )}
    </section>
  );
}
