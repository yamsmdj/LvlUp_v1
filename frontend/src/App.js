import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { isConnect, isAdmin } from "./pages/Auth/Auth";
import Accueil from "./pages/Accueil";
import Wrapper from "./components/Wrapper/";
import Cursus from "./pages/Cursus/Cursus";
import Formations from "./pages/Formations";
import { useEffect, useState } from "react";
import axios from "axios";
import LearnLanguage from "./pages/Exercises/LearnLanguage";
import ExercisesPage from "./pages/Exercises/ExercisesPage";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Error404 from "./components/Error404";
import Account from "./pages/Account";
import { jwtDecode } from "jwt-decode";

function App() {

  const [language, setLanguage] = useState([]);
  const token = localStorage.getItem("token")

  let userRole = [];
  let userPseudo = '';
  let userLevel = 0;
  let userEmail = '';
  let userId = '';

  if (token) {
    const decodedToken = jwtDecode(token)
    userId = decodedToken.userId
    userRole = decodedToken.role;
    userPseudo = decodedToken.pseudo;
    userLevel = decodedToken.level  ;
    userEmail = decodedToken.email ;
    // console.log(decodedToken);
  }
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/language/")
      .then((res) => {
        setLanguage(res.data);
      })
      .catch((error) => {
        console.error(
          "une erreur c'est produit lors de la recupération du langague : ",
          error
        );
      });
  }, []);

  useEffect(() => {
    return () => {
      localStorage.clear();
    };
  });
  
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Accueil />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={isConnect() ?<Account userId={userId} userPseudo={userPseudo} userRole={userRole} userLevel={userLevel} userEmail={userEmail}/> : <Error404 /> } />
          <Route path="/cursus" element={<Cursus language={language} />} />
          <Route path="/formations" element={<Formations language={language} />} />
          <Route path="/formations/:title" element={<LearnLanguage language={language} />} />
          <Route path="/exercises" element={<ExercisesPage />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
