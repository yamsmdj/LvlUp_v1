import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Formations = ({ language }) => {


  return (
    <section className="grow">
      <h1>
        Toutes les <strong className=" text-red-600">formations</strong>
      </h1>
      <div className="flex justify-between w-1/2 m-auto">
        {language.map((lang, index) => (
          <NavLink key={index} to={`${lang.title}`}>
            <div className="w-1/2">
              <img src={`assets/${lang.path_img}`} alt="Language" />
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Formations;
