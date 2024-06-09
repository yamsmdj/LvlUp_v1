import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const token = localStorage.getItem("token");
  let userRole = [];
  if (token) {
    const decodedToken = jwtDecode(token);
    userRole = decodedToken.role;
  }

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

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
      <div className="flex gap-4 items-center">
        {token ? (
          <>
            {userRole.includes("ADMIN") ? (
              <NavLink to="/login">
                <button className="">Dashboard</button>
              </NavLink>
            ) : (
              <NavLink to="/account">
                <button className="w-20">Mon profil</button>
              </NavLink>
            )}
            <NavLink to="/">
              <button className="greeni w-32 p-2 rounded-xl" onClick={logout}>
                Se deconnecter
              </button>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <button className="w-32">Se connecter</button>
            </NavLink>
            <NavLink to="/signup">
              <button className="greeni p-2 rounded-xl">S'inscrire</button>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
