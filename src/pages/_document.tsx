import { Html, Head, Main, NextScript } from "next/document";
import { useState, useEffect } from "react";
import { useDarkMode } from "usehooks-ts";

export default function Document() {
  enum Theme {
    Dark = "dark",
    Light = "light",
  }
  const { isDarkMode } = useDarkMode();
  const [wrapperClassName, setWrapperClassName] = useState(Theme.Light);

  useEffect(() => {
    if (isDarkMode) {
      setWrapperClassName(Theme.Dark);
    } else {
      setWrapperClassName(Theme.Light);
    }
  }, [isDarkMode, Theme]);

  return (
    <Html className={wrapperClassName} data-theme="garden">
      <Head />
      <body className={`container mx-auto`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}