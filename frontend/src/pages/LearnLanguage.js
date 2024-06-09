import React, { useState } from 'react';
import MonacoEditor from '../components/MonacoEditor';

const LearnLanguage = () => {

  const [code, setCode] = useState("// Commencez à coder ici!\n");

    return (
        <section className=''>
            {window.location.pathname == 'HTML' ??
                <h1>Apprenez le HTML avec notre IDE intégré</h1>
                
            }
            <h1>Apprenez le HTML avec notre IDE intégré</h1>

        <div>
            <MonacoEditor value={code} onChange={setCode} />
        </div>
        </section>
    );
};

export default LearnLanguage;