import { PropsWithChildren, useState } from "react";

type NavBarItemContainerProps = PropsWithChildren<{
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
}>;
export const NavBarItemContainer = (props: NavBarItemContainerProps) => {
  const [menuState, setMenuState] = useState(false);
  const { children, endContent, startContent } = props;
  return (
    <div className="flex-1 flex items-center justify-between">
      <div
        className={`absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
          menuState ? "" : "hidden"
        }`}
      >
        <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
          {children}
        </ul>
      </div>
      <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
        {endContent}
        <button
          className="outline-none text-gray-400 block lg:hidden"
          onClick={() => setMenuState(!menuState)}
        >
          {menuState ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
