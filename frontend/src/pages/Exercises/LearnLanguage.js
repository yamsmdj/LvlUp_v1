import React, { useState } from "react";
import MonacoEditor from "../../components/MonacoEditor";
import { isConnect } from "../Auth/Auth";

const LearnLanguage = ({ language }) => {
  const [code, setCode] = useState('');
  const [resultMsg, setResultMsg] = useState('');
  const [isCorrect, setIsCorrect]= useState(null)

  // Exercice et solution
  const exercise = "Écrire une fonction qui retourne 'Hello, world!'";
  const solution = `function greet() { return 'Hello, world!'}`;

  // console.log(code);
  // console.log(code.changes.text);
  const checkSolution = () => {
    console.log(code.changes[0]?.text);
    if (code.changes.length > 0 && code.changes[0]?.text === solution) {
      setResultMsg("Correct! Bravo !");
      setIsCorrect(true)
    } else {
      setResultMsg("Incorrect! Réessayez.");
      setIsCorrect(false)
    }
  };
  return (
    <section className="grow">
      <h1 className="text-green-700 text-3xl my-5">
        Apprenez le {window.location.pathname.split("/")[2]} avec notre IDE
        intégré
      </h1>
      <div>
        <h2>Exercice 1 </h2>
        <p>{exercise}</p>
        <MonacoEditor value={code} onChange={(newCode)=> setCode(newCode)} />
        <button className="" onClick={checkSolution}>Vérifier ma réponse</button>
        {isCorrect ? <div className="flex flex-col items-center">
          <p className=" bg-green-700 text-2xl w-3/12 text-center rounded-sm my-3">{resultMsg}</p>
          <button className=" bg-blue-500 p-3 rounded-full mt-8 w-3/12">Exercice suivant</button>
        </div>
          : 
          <div className="flex flex-col items-center">
          <p className=" bg-red-700 text-2xl w-3/12 text-center rounded-sm my-3"></p>
          </div>
        }
      </div>
    </section>
  );
};

export default LearnLanguage;
