import { NavLink } from "react-router-dom";

const Cursus = ({language}) => {
  
  return (
    <section className="grow text-center">
      <h1 className="mb-20">
        Pour commencer a apprendre, on vous conseil de suivre cette roadmap
      </h1>
      <div className="">
        {language.map((lang, index) => (
          <div key={index} className="relative bg-green-700 w-1/2 m-auto rounded-lg my-16 py-12">
            <div>
              <img src={`assets/${lang.path_img}`} alt="Logo html" className="w-20 absolute z-10 left-1/2 -translate-y-full  -translate-x-1/2" />
            </div>
            <p>{lang.description}</p>
           <NavLink to={`/formations/${lang.title}`}> <button className=" bg-green-900 rounded-xl p-3" >Suivre</button></NavLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cursus;
