"use client";

import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

/**
 * The only genuinely interactive part of the credentials page. Isolating it here
 * lets the rest of that page render on the server instead of the whole thing
 * becoming a Client Component for the sake of two buttons.
 *
 * `label`/`copiedLabel` are passed in rather than derived so the accessible name
 * changes to confirm the copy — the icon swap alone announces nothing.
 */
export default function CopyButton({ value, label, copiedLabel, children }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? copiedLabel : label}
    >
      {copied ? <IoCopyOutline aria-hidden="true" /> : children}
    </button>
  );
}
