const WebData = ({ pages, languages, handleDecrement ,handleIncrement }) => {
  
  return (
    <>
      <div className="flex items-center justify-between">

        <span className="font-semibold md:me-10 text-center md:text-start">&#128992;Número de pàgines </span>

        <div className="flex items-center">

          <button onClick={() => handleDecrement('pages')} className="mx-1 btn btn-dark btn-xs btn-circle btn-outline">
            -
          </button>

          <input
            id="pages"
            value={pages}
            className="w-16 text-center border  border-slate-900 rounded"
          />

          <button onClick={() => handleIncrement('pages')} className="mx-1 btn btn-dark btn-xs btn-circle btn-outline">
            +
          </button>

        </div>
      </div>
      <br />

      <div className="flex items-center justify-between">

        <span className="font-semibold md:me-10 text-center md:text-start">&#128992;Número de llenguatges</span>

        <div className="flex items-center">

          <button onClick={() => handleDecrement('languages')} className="mx-1 btn btn-dark btn-xs btn-circle btn-outline">
            -
          </button>

          <input 
            id="languages"
            value={languages}
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
