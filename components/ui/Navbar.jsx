import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../../context/ui/themeContext";


export const Navbar = () => {

  const {checked, setChecked} = useContext(ThemeContext);

  const theme = ["Dark", "Light"]

  return (
    <div className="navbar bg-base-100 h-20">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <Link href="/">
          <Image src="/favicon.svg" width={60} height={40} className="opacity-50 dark:opacity-100" alt="logo"/>
          </Link>
        </button>
      </div>
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/">Henry Gómez</Link>
      </div>
      <div className="flex gap-2">
      <kbd className="kbd kbd-md font-semibold text-lg w-20 breakpoint dark:bg-[#F0F6FF] text-[#2E3639]">{ checked ? theme[0] : theme[1] }</kbd>
        <input
          type="checkbox"
          className="toggle mr-3"
          defaultChecked={checked}
          onClick={() => setChecked(!checked)}
        />
      </div>
    </div>
  );
};
