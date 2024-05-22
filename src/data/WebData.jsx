const WebData = ({ pages, languages, setPages, setLanguages ,handleDecrement ,handleIncrement }) => {
  
  return (
    <>
      <div className="flex items-center justify-between">

        <span className="font-semibold md:me-10 text-center md:text-start">&#128992;Nombre de pàgines </span>

        <div className="flex items-center">

          <button onClick={() => handleDecrement('pages')} className="mx-1 btn btn-dark btn-xs btn-circle btn-outline">
            -
          </button>

          <input
            id="pages"
            value={pages}
            onChange={(e) =>  setPages(isNaN(parseInt(e.target.value)) ? 1 : parseInt(e.target.value))}
            min="1"  //website page never equals to 0 so i put min value 
            className="w-16 text-center border  border-slate-900 rounded"
          />

          <button onClick={() => handleIncrement('pages')} className="mx-1 btn btn-dark btn-xs btn-circle btn-outline">
            +
          </button>

        </div>
      </div>
      <br />

      <div className="flex items-center justify-between">

        <span className="font-semibold md:me-10 text-center md:text-start">&#128992;Nombre de llenguatges</span>

        <div className="flex items-center">

          <button onClick={() => handleDecrement('languages')} className="mx-1 btn btn-dark btn-xs btn-circle btn-outline">
            -
          </button>

          <input 
            id="languages"
            value={languages}
            onChange={(e) =>  setLanguages(isNaN(parseInt(e.target.value)) ? 1 : parseInt(e.target.value))}
            min="1"
            className="w-16 text-center border border-slate-900 rounded"
          />

          <button onClick={() => handleIncrement('languages')} className="mx-1 btn btn-dark btn-xs btn-circle btn-outline">
            +
          </button>

        </div>
      </div>
    </>
  );
};

export default WebData;
