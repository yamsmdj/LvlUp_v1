import axios from "axios";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const storeToken = (token) => {
    localStorage.setItem("token", token);
  };

  const handleLogin = async (email, password) => {
    try {
        const response = await axios.post(
        "http://localhost:3001/api/auth/login", 
        {
          email: email,
          password: password,
        });
        if (response.data && response.data.token){
            storeToken(response.data.token);
            window.location.href= "/";
          } else {
            console.log('Identifiants de connexion invalides.')
          }
         }catch (err) {
          console.error("Erreur lors de la connexion d'un utilisateur", err);
        };
    }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await handleLogin(email,password);
    } catch (err) {
        console.log(err.message);
    }};
   
  return (
    <section className="grow">
        <p>Connectez vous et commencez a coder</p>
      <form onSubmit={handleSubmit} className="flex flex-col w-1/2 m-auto ">
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

        <button type="submit" className="bg-green-700 rounded-xl py-2">
          Se connecter
        </button>
      </form>
    </section>
  );
};

export default Login;
