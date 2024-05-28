import { useState } from 'react';

const BudgetList = ({ budgets }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedBudgets, setSortedBudgets] = useState(budgets);
  const [sortOrder, setSortOrder] = useState('default');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortByName = () => {
    const sorted = [...sortedBudgets].sort((a, b) =>
      a.clientName.localeCompare(b.clientName)
    );
    setSortedBudgets(sorted);
    setSortOrder('name');
  };

  const handleSortByDate = () => {
    const sorted = [...sortedBudgets].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setSortedBudgets(sorted);
    setSortOrder('date');
  };

  const handleResetOrder = () => {
    setSortedBudgets(budgets);
    setSortOrder('default');
  };

  const filteredBudgets = sortedBudgets.filter((budget) =>
    budget.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-10 border-t-4 border-dashed">

      <h2 className="font-bold font-serif text-2xl mb-4">Pressupostos en curs:</h2>

      <div className="flex md:row justify-end mb-4  gap-3">

        <input type="text" className="mb-6 p-2 border rounded" placeholder="Search" value={searchTerm} onChange={handleSearch}></input>


        <button className="btn btn-ghost" onClick={handleSortByName}>Sort</button>

        <button className="btn btn-ghost " onClick={handleSortByDate}>Import</button>

        <button className="btn btn-ghost" onClick={handleResetOrder}>Data</button>


      </div>

      {filteredBudgets.map((budget) => (

        <div key={budget.id} className="mx-auto md:w-5/4 shadow-xl md:p-10 p-3 rounded-3xl mt-8 mb-16">


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

          <p className="text-2xl font-semibold md:mt-10 mt-5 mb-5 md:text-start text-center">Date: {new Date(budget.date).toLocaleDateString()}</p>


        </div>
      ))}
    </div>
  );
};
export default BudgetList

