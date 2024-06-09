import  { useState } from 'react';

const ExerciseComponent = ({ question, onCheckAnswer }) => {
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckAnswer(userAnswer);
  };

  return (
    <div>
      <h2>{question}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className='text-black'
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button type="submit">Vérifier</button>
      </form>
    </div>
  );
};

export default ExerciseComponent;
