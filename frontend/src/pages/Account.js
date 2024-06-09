import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PatchAccount from "./Admin/crud/PatchAccount";

const Account = ({userId, userLevel, userRole, userPseudo, userEmail }) => {
  const [putAccount, setPutAccount] = useState(false);

  function showPutAccount() {
    setPutAccount(!putAccount);
  }
//   console.log(userId);
  return (
    <section className="grow">
      <div className="my-5">
        <h1 className=" text-5xl">
          Votre compte{" "}
          <strong className=" text-green-700">{userPseudo} </strong>
        </h1>
        <p>Vous êtes lvl {userLevel}</p>
      </div>
      <button className="bg-green-700 rounded-xl p-3" onClick={showPutAccount}>
        Modifier mon profil
      </button>
      {putAccount && <PatchAccount userId={userId} userPseudo={userPseudo} userRole={userRole} userLevel={userLevel} userEmail={userEmail} />}
    </section>
  );
};

export default Account;
