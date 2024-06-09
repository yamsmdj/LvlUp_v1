import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 mb-5">
      <div>
        <NavLink to="/">
          <img src={Logo} alt="Logo LevelUP" className="" />
        </NavLink>
      </div>
      <ul className="flex w-full mx-5 gap-5">
        <NavLink to="/cursus">
          <li>Cursus</li>
        </NavLink>
        <NavLink to="/formations">
          <li>Formation</li>
        </NavLink>
      </ul>
      <div className="flex gap-4">
        <NavLink to="/login"><button className="w-32">Se connecter</button></NavLink>
        <NavLink to="/signup"><button className="greeni p-2 rounded-xl">S'inscrire</button></NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
