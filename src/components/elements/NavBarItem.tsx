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
      <Link href={path} passHref>
        <a className={`${className} btn btn-link`}>{title}</a>
      </Link>
    </li>
  );
};
