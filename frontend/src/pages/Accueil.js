import CardLanguage from "../components/Cards/CardLanguage";
import { NavLink } from "react-router-dom";
import imageCode from "../assets/VscodeHome.svg";
import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";
import JS from "../assets/JS.svg";
import Battle from "../assets/BATTLE.svg";

const Accueil = () => {
  return (
    <section className="grow">
      <h1 className=" text-green-400 text-center">Apprenez dès aujourd'hui a coder...</h1>
      <div className="flex justify-around p-5 w-1/2 m-auto">
        <div>
          <img src={imageCode} alt="" />
        </div>
        <form className="flex flex-col w-1/2">
            <p>Créez votre compte pour commencer dès maintenant gratuitement</p>
            <input type="email"  className="py-2 bg-green-700 rounded-xl" placeholder="Votre e-mail"/>
            <input type="password"  className="py-2 bg-green-700 rounded-xl" placeholder="Votre mot de passe" />
            <div className="flex">
            <input type="checkbox"/>
            J'accepte les conditions d'utilisations et la polituqe de confidentialité de LevelUP
            </div>
            <button type="submit" className="bg-green-700 rounded-xl py-2">S'inscrire et apprendre gratuitement</button>
        </form>
      </div>

      <h2 className="text-green-400 text-center text-2xl p-3">Laissez vous guider par notre apprentissage</h2>
      <div className="text-center">
        <div className="flex justify-center">
        <img src={HTML} alt="HTML"className="w-36" />
        <img src={CSS} alt="CSS" className="w-36"/>
        <img src={JS} alt="JS" className="w-36"/>
        </div>
        <p>Novice ? suivez notre cursus et avancez pas à pas dans votre apprentissage</p>
        <NavLink to="#"><button className="bg-green-700 rounded-xl p-2">Voir le cursus</button></NavLink>
      </div>

      <article>
        <img src={Battle} alt="Battle logo" className="w-52" />
      </article>

      <article>
        <p>Utilisez notre editeur de code directement intégré.. LEARN BY DOING</p>
      </article>

    </section>
  );
};

export default Accueil;
