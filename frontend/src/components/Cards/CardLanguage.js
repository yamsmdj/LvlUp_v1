import axios from 'axios'
import { useEffect, useState } from 'react';

const CardLanguage = () => {

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
        <div>
            <h1>Card language</h1>
            {language.map((lang)=> (
                <div>
                    <p>{lang.title}</p>
                    <p>{lang.description}</p>
                </div>
            ))}
        {console.log(language)}
        </div>
    );
};

export default CardLanguage;