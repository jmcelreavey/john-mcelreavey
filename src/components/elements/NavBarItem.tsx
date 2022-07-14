import Link from "next/link";

type NavBarItemProps = {
  title: string;
  path: string;
  selected?: boolean;
};
export const NavBarItem = (props: NavBarItemProps) => {
  const { title, path, selected } = props;
  const className = selected ? "btn-active" : "";
  return (
    <li>
      <Link href={path}>
        <button className={`${className} btn btn-link`}>{title}</button>
      </Link>
    </li>
  );
};
