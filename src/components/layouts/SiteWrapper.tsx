import React from "react";
import { PropsWithChildren, useEffect, useState } from "react";
import { useDarkMode } from "usehooks-ts";

type SiteWrapperProps = PropsWithChildren<{
  navigation?: React.ReactNode;
  footer?: React.ReactNode;
}>;
export const SiteWrapper = (props: SiteWrapperProps) => {
  const { children, navigation, footer } = props;
  const { isDarkMode } = useDarkMode();
  const [wrapperClassName, setWrapperClassName] = useState("");

  enum Theme {
    Dark = "dark",
    Light = "light",
  }

  useEffect(() => {
    if (isDarkMode) {
      setWrapperClassName(Theme.Dark);
    } else {
      setWrapperClassName(Theme.Light);
    }
  }, [isDarkMode, Theme]);

  return (
    <div data-theme="halloween" className={`${wrapperClassName}`}>
      <div className="dark:bg-theme-dark bg-theme-light dark:text-radishical text-lucario-blue-600">
        <div className="w-screen min-h-screen">
          <div className="p-2">{navigation}</div>
          <div className="flex flex-col p-4 justify-center items-center">
            {children}
          </div>
          {footer}
        </div>
      </div>
    </div>
  );
};
