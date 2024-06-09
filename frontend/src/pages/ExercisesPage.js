import React, { useState } from 'react';
import MonacoEditor from '../components/MonacoEditor';

const ExercisePage = () => {
  const [userCode, setUserCode] = useState('// Ecrivez votre code ici\nfunction sayHello() {\n  // votre code ici\n}');
  const [result, setResult] = useState('');

  const handleCodeChange = (newCode) => {
    setUserCode(newCode);
  };

  const runCode = () => {
    try {
      // Encapsule le code de l'utilisateur dans une fonction anonyme et retourne le résultat de sayHello
      const wrappedCode = `
        (function() {
          ${userCode}
          if (typeof sayHello === 'function') {
            return sayHello();
          } else {
            throw new Error('La fonction sayHello n\'est pas définie.');
          }
        })()
      `;
      // eslint-disable-next-line no-eval
      const output = eval(wrappedCode);
      if (output === "Hello, World!") {
        setResult('Succès: Votre code est correct!');
      } else {
        setResult(`Échec: Votre code a retourné "${output}" au lieu de "Hello, World!"`);
      }
    } catch (error) {
      setResult(`Erreur dans le code: ${error.message}`);
    }
  };

  return (
    <div className='grow'>
      <h1>Exercice de programmation</h1>
      <p>Écrivez une fonction qui retourne "Hello, World!" :</p>
      <MonacoEditor value={userCode} onChange={handleCodeChange} language="javascript" />
      <button onClick={runCode}>Exécuter le code</button>
      <p>{result}</p>
    </div>
  );
};

export default ExercisePage;
