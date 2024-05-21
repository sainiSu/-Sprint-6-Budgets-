const WebData =({pages,languages,setPages,setLanguages}) => {
  return (
    <>
                <div className="flex items-center justify-between">

    <span className="font-semibold md:me-10 text-center md:text-start"> &#128992;Nombre de pàgines</span>
                <input
                    type="number"
                    id="pages"
                    value={pages}
                    onChange={(e) => setPages(parseInt(e.target.value))}
                    min="1"
                    className="w-16 text-center border rounded"
                />
                </div>
                <br />
            <div className="flex items-center justify-between">
            <span className="font-semibold md:me-10 text-center md:text-start"> &#128992;Nombre de llenguatges</span>
                <input
                    type="number"
                    id="pages"
                    value={languages}
                    onChange={(e) => setLanguages(parseInt(e.target.value))}
                    min="1"
                    className="w-16 text-center border rounded"
                />
            </div>
    </>
  )
}
export default WebData;
