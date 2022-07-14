import Image from "next/image";

export const ProfileIcon = () => {
  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn btn-ghost btn-circle avatar online"
        onClick={() => {}}
      >
        <div className="w-24 rounded-full ring ring-primary">
          <Image
            alt="profile"
            src="https://www.gravatar.com/avatar/9b619ae13b9c43165119d9f77bfe0098"
            height={100}
            width={100}
            className="w-full h-full rounded-full"
          />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/john-mcelreavey-625a56b0/"
          >
            Nosy @ LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto: j.mcelreavey@gmail.com">Email Me</a>
        </li>
      </ul>
    </div>
  );
};
