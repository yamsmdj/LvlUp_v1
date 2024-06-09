import CardLanguage from "../components/Cards/CardLanguage";
import { NavLink } from "react-router-dom";
import imageCode from "../assets/VscodeHome.svg";
import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";
import JS from "../assets/JS.svg";
import Battle from "../assets/BATTLE.svg";
import Register from "./Auth/Register";

const Accueil = () => {

  const token = localStorage.getItem("token")
  console.log(token);
  return (
    <section className="grow">
        <h1 className={` text-4xl ${token == null && "w-1/2"} text-center tracking-widest text-green-400 p-5`} >
          Apprenez dès aujourd'hui a coder...
        </h1>
      <div className={`flex justify-center mx-5 mb-16 ${token == null && " m-auto "}`}>
        <div className="">
          <img src={imageCode} alt="" />
        </div>
        {token == null &&
        <div className=" w-1/2 ">
          <Register />
        </div>
        }
      </div>

      <h2 className="text-green-400 text-center text-2xl p-8">
        Laissez vous guider par notre apprentissage
      </h2>
      <div className="text-center">
        <div className="flex justify-center">
          <img src={HTML} alt="HTML" className="w-36" />
          <img src={CSS} alt="CSS" className="w-36" />
          <img src={JS} alt="JS" className="w-36" />
        </div>
        <p>
          Novice ? suivez notre cursus et avancez pas à pas dans votre
          apprentissage
        </p>
        <NavLink to="/cursus">
          <button className="bg-green-700 rounded-xl p-2">
            Voir le cursus
          </button>
        </NavLink>
      </div>

      <article>
        <img src={Battle} alt="Battle logo" className="w-52" />
      </article>

      <article>
        <p>
          Utilisez notre editeur de code directement intégré.. LEARN BY DOING
        </p>
      </article>
    </section>
  );
};

export default Accueil;
