"use client";

import { useState } from "react";

interface CopyButtonProps {
  text: string;
  label?: string;
}

export default function CopyButton({ text, label = "コピー" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("コピーに失敗しました:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="rounded-lg bg-sky-600 px-3 py-1 text-sm font-medium text-white hover:bg-sky-700"
    >
      {copied ? "コピーしました！" : label}
    </button>
  );
}
