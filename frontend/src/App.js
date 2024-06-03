
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './pages/Accueil';
import Wrapper from './components/Wrapper/';

function App() {
  return (
    <BrowserRouter>
    <Wrapper>
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </Wrapper>
    </BrowserRouter>
  );
}

export default App;
