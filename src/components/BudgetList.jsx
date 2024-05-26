
const BudgetList = ({ budgets }) => {

  return (

    <div className="my-10 border-t-4 border-dashed">

      <h3 className="font-bold font-serif text-4xl md:mt-10 mt-5 mb-5 md:text-start text-center">Pressupostos en curs:</h3>

      <div className="flex md:row justify-end mb-4  gap-3">
        
         <input type="text" className="mb-6 p-2 border rounded" placeholder="Search" ></input>

    
        <button className="btn btn-ghost ">Data</button>

        <button className="btn btn-ghost ">Import</button>

        <button className="btn btn-ghost ">Nom</button>


      </div>
     


      {budgets.map((budget, index) => (
        <div key={index} className="mx-auto md:w-5/4 shadow-xl md:p-10 p-3 rounded-3xl mt-8 mb-16">


          <p className="font-semibold text-2xl md:mt-10 mt-5 mb-5 md:text-start text-center">

            <strong >Client:</strong> {budget.clientName}
          </p>

          <p className=" text-2xl font-semibold md:mt-10 mt-5 mb-5 md:text-start text-center">

            <strong>Email:</strong> {budget.clientEmail}
          </p>

          <p className=" text-2xl font-semibold md:mt-10 mt-5 mb-5 md:text-start text-center">

            <strong>Telèfon:</strong> {budget.clientPhone}
          </p>

          <p className="text-2xl font-semibold md:mt-10 mt-5 mb-5 md:text-start text-center">

            <strong>Serveis contractats:</strong> {budget.services.join(", ")}
          </p>

          <p className="text-2xl font-semibold md:mt-10 mt-5 mb-5 md:text-start text-center">

            <strong>Total:</strong> {budget.total} €
          </p>
          
        </div>
      ))}
    </div>
  );
};

export default BudgetList;
