import Image from "next/image";

export const ProfileIcon = () => {
  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn btn-ghost btn-circle avatar"
        onClick={() => {}}
      >
        <div className="w-10 rounded-full">
          <Image
            alt="profile"
            src="https://randomuser.me/api/portraits/men/46.jpg"
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
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};
