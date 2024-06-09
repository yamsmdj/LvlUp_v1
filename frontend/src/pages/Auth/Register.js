import axios from "axios";
import { useState } from "react";

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pseudo, setPseudo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/auth/signup",
       {
        email: email,
        password: password,
        pseudo: pseudo
      })
      .then(()=> {
        console.log("Utilisateur crée avec succès");
      })
      .catch((err) => {
        console.error("Erreur lors de la création d'un utilisateur", err);
      });
  };

  return (
    <section className="grow">
        <p>Créez votre compte pour commencer dès maintenant gratuitement</p>
      <form  onSubmit={handleSubmit} className="flex flex-col w-1/2 m-auto  ">
        <input
          type="email"
          className="py-4 bg-green-700 rounded-xl w-full"
          placeholder="Votre e-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          className="py-4 bg-green-700 rounded-xl my-5"
          placeholder="Votre mot de passe"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="text"
          className="py-4 bg-green-700 rounded-xl my-5"
          placeholder="Votre Pseudo"
          onChange={(e) => setPseudo(e.target.value)}
          value={pseudo}
        />
        <div className="flex gap-4 m-auto mb-4 ">
          <input type="checkbox" />
          J'accepte les conditions d'utilisations et la polituqe de
          confidentialité de LevelUP
        </div>
        <button
          type="submit"
          className="bg-green-700 rounded-xl py-2"
        >
          S'inscrire et apprendre gratuitement
        </button>
      </form>
    </section>
  );
};

export default Register;
