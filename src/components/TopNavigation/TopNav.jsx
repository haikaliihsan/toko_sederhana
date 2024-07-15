import { Link, Outlet } from "react-router-dom";

import NavigateButton from "./NavgateButton";

const TopNav = () => {
  return (
    <>
      <div className="sticky top-0 z-10 flex justify-between bg-black p-4 text-white shadow-md">
        <Link to="/">Angkringan MAMAT</Link>
        <div className="flex gap-3">
          <NavigateButton to="/" name="Home" />
          <NavigateButton to="/cart" name="Cart" />
          <NavigateButton to="/History" name="History" />
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default TopNav;
