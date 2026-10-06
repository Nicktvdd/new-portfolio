"use client";

import { useSyncExternalStore } from "react";

const format = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Helsinki", hour: "2-digit", minute: "2-digit" });

const subscribe = (onChange: () => void) => {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
};

// Local time in Helsinki, like the coordinates on a map. Empty on the server so the static HTML never shows a stale time.
export default function HelsinkiClock() {
  const time = useSyncExternalStore(subscribe, () => format.format(new Date()), () => "");
  return (
    <p className="text-right font-mono text-xs leading-relaxed text-muted">
      60.17° N, 24.94° E
      <br />
      Helsinki{time && <> · <time>{time}</time></>}
    </p>
  );
}
