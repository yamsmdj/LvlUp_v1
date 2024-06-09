import axios from 'axios'
import { useEffect, useState } from 'react';

const CardLanguage = ({language}) => {



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