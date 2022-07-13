import Image from "next/image";

export const Logo = () => (
  <div className="flex-none lg:flex-initial">
    <a href="javascript:void(0)">
      <Image
        src="https://www.floatui.com/logo.svg"
        width={120}
        height={50}
        alt="Float UI logo"
      />
    </a>
  </div>
);
