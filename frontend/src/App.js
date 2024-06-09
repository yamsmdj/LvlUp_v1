
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './pages/Accueil';
import Wrapper from './components/Wrapper/';
import Cursus from './pages/Cursus';
import Formations from './pages/Formations';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LearnLanguage from './pages/LearnLanguage';
import ExercisesPage from './pages/ExercisesPage';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';

function App() {
  const [language, setLanguage] = useState([])

  useEffect(() => {
      axios.get("http://localhost:3001/api/language/")
      .then((res) => {
          setLanguage(res.data)
      })
      .catch((error) => {
          console.error("une erreur c'est produit lors de la recupération du langague : " ,error);
      })
  },[])
  return (
    <BrowserRouter>
    <Wrapper>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cursus" element={<Cursus  language={language} />} />
        <Route path="/formations" element={<Formations language={language} />} />
        <Route path="/formations/:title" element={<LearnLanguage />} />
        <Route path="/exercises" element={<ExercisesPage />} /> 
      </Routes>
    </Wrapper>
    </BrowserRouter>
  );
}

export default App;
