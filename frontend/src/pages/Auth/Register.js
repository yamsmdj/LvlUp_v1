import axios from "axios";
import React, { useEffect, useState } from "react";

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/auth/signup",
       {
        email: email,
        password: password
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
      <form  onSubmit={handleSubmit} className="flex flex-col w-1/2">
        <p>Créez votre compte pour commencer dès maintenant gratuitement</p>
        <input
          type="email"
          className="py-2 bg-green-700 rounded-xl"
          placeholder="Votre e-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          className="py-2 bg-green-700 rounded-xl"
          placeholder="Votre mot de passe"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="flex">
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
