import { PropsWithChildren } from "react";

export const NavBar = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <nav
      className="rounded-lg text-white border-b border-black dark:bg-lucario-blue-800 bg-lucario-blue-300
                    flex items-center space-x-8 px-4 mx-auto"
    >
      {children}
    </nav>
  );
};
