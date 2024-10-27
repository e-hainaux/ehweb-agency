"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function Progress() {
  return (
    <ProgressBar
      height="3px"
      color="#e91e63"
      shallowRouting
      options={{
        showSpinner: true,
        easing: "ease",
        speed: 800,
      }}
    />
  );
}
