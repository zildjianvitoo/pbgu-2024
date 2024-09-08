"use client";

import { ReactNode, useEffect, useState } from "react";

export default function NoSSR({ children }: { children: ReactNode }) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return isSSR ? null : <>{children}</>;
}
