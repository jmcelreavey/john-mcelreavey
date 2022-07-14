import Link from "next/link";

export const Logo = () => (
  <Link href="/">
    <a className="btn btn-ghost normal-case font-title text-primary inline-flex text-lg transition-all duration-200 md:text-2xl">
      <span>John</span>&nbsp;
      <span className="text-base-content">McElreavey</span>
    </a>
  </Link>
);
