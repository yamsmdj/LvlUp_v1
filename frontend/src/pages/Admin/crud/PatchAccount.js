import axios from 'axios';
import { useState } from 'react';

const PatchAccount = ({userId, userPseudo, userEmail }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pseudo, setPseudo] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      const updatedFields = {};

      if (email !== userEmail && email !== "") updatedFields.email = email;
      if (password.trim() !== '') updatedFields.password = password;
      if (pseudo !== userPseudo && pseudo !== "") updatedFields.pseudo = pseudo;

      axios
        .patch(`http://localhost:3001/api/auth/${userId}`,updatedFields
        )
        .then(()=> {
          console.log("Utilisateur modifié avec succès");
        })
        .catch((err) => {
          console.error("Erreur lors de la création d'un utilisateur", err);
        });
    };
    return (
        <section>
            <form onSubmit={handleSubmit} className='w-1/2 text-xl text-green-600'>
                <div className='flex flex-col w-1/2 m-auto '>
                <label>Modifier l'email</label>
                <input
                type="email"
                value={email}
                placeholder={userEmail}
                onChange={(e) => setEmail(e.target.value)}
                />
                {/* <label>Modifier votre mot de passe</label>
                <input
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                /> */}
                <label>Modifier votre pseudo</label>
                <input
                type="text" 
                onChange={(e) => setPseudo(e.target.value)}
                placeholder={userPseudo}
                value={pseudo}
                />
                <button className=' bg-green-700 rounded-3xl p-4 mx-auto my-4 text-white' type="submit">Modifier</button>
                </div>

            </form>
        </section>
    );
};

export default PatchAccount;