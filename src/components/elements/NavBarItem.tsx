type NavBarItemProps = {
  title: string;
  path: string;
};
export const NavBarItem = (props: NavBarItemProps) => {
  const { title, path } = props;
  return (
    <li>
      <a href={path}>{title}</a>
    </li>
  );
};
