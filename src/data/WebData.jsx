const WebData =({pages,languages,setPages,setLanguages}) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center justify-between">
                <label htmlFor="pages" className="font-semibold text-xl">&#128992;Nombre de pàgines</label>
                <input
                    type="number"
                    id="pages"
                    value={pages}
                    onChange={(e) => setPages(parseInt(e.target.value))}
                    min="1"
                    className="w-16 text-center border rounded"
                />
            </div>
            <div className="flex items-center justify-between">
                <label htmlFor="pages" className="font-semibold text-xl">&#128992;Nombre de llenguatges</label>
                <input
                    type="number"
                    id="pages"
                    value={languages}
                    onChange={(e) => setLanguages(parseInt(e.target.value))}
                    min="1"
                    className="w-16 text-center border rounded"
                />
            </div>
    </div>
  )
}
export default WebData;
