import type { ReactNode } from "react";

// A template remounts on every navigation, so the CSS enter animation replays per page.
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
