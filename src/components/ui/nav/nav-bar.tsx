import Brand from "../brand";
import NavDrawer from "./nav-drawer";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";
import { AuthContextType } from "../../../types/auth/login.types";
import { useDrawer } from "../../../context/nav-context";
import { NavDawerContextType } from "../../../types/nav/drawer.types";
import { publicNavLinks } from "../../../data/nav-links";
import cn from "../../../libs/styles";

const Navbar: React.FC = () => {
  const { opened } = useDrawer() as NavDawerContextType;
  const { user } = useAuth() as AuthContextType;
  const { pathname } = useLocation();
  return (
    <header className="p-5 w-full md:p-10 md:py-6 bg-slate-100 flex justify-between items-center relative header">
      <Brand />
      <div className="flex items-center gap-3">
        {/* nav items */}
        {publicNavLinks.map((link) => (
          <div
            className={cn("border-b-4", {
              "border-primary": pathname === link.href,
              "border-slate-100": pathname !== link.href,
            })}
          >
            <NavLink key={link.name} to={link.href}>
              {link.name}
            </NavLink>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-5">
        {!user && (
          <Link
            to={"/login"}
            className="bg-primary text-white rounded-md p-2 px-8"
          >
            Login
          </Link>
        )}
        {/* <FaBarsStaggered
          className="text-primary text-xl block"
          onClick={openDrawer}
        /> */}
      </div>
      {opened && <NavDrawer />}
    </header>
  );
};

export const NavbarWrapper = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Navbar;
