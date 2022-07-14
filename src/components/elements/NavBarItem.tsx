import Link from "next/link";

type NavBarItemProps = {
  title: string;
  path: string;
};
export const NavBarItem = (props: NavBarItemProps) => {
  const { title, path } = props;
  return (
    <li>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </li>
  );
};
