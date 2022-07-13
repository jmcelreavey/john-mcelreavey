import Image from "next/image";

export const ProfileIcon = () => {
  return (
    <div className={`relative`}>
      <div className="flex items-center space-x-4">
        <button
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
          onClick={() => {}}
        >
          <Image
            alt="profile"
            src="https://randomuser.me/api/portraits/men/46.jpg"
            height={100}
            width={100}
            className="w-full h-full rounded-full"
          />
        </button>
        <div className="lg:hidden">
          <span className="block">John McElreavey</span>
          <span className="block text-sm text-gray-500">
            john@mcelreavey.com
          </span>
        </div>
      </div>
    </div>
  );
};
