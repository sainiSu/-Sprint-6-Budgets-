import { useState } from 'react';

const BudgetForm = ({ addBudget }) => {

  const [formData, setFormData] = useState({

    budgetName: "",
    clientName: "",
    clientEmail: "",
    clientPhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);

    addBudget(formData);
    setFormData({
      budgetName: "",
      clientName: "",
      clientEmail: "",
      clientPhone: "",
    });
  };

  //Help popup:

  /*const [showHelp, setShowHelp] = useState(false);

  const handleHelpClick = () => {
    setShowHelp(true);
  };

  const handleHelpClose = () => {
    setShowHelp(false);
  };*/

  return (
    <div className="mx-auto md:w-5/6 shadow-xl md:p-10 p-3 rounded-3xl mt-8 mb-16">

      <h3 className="font-bold text-4xl md:mt-3 mt-5 mb-5 md:text-start text-center"> Demanar pressupost</h3>

      <form className="flex md:flex-row flex-col items-center my-5 gap-1 relative" onSubmit={handleSubmit}>

        <input className="input input-bordered w-full max-w-xs" type='text' name='clientName' placeholder="Nom del client" value={formData.clientName} onChange={handleChange} required />

        <input className="input input-bordered w-full max-w-xs" type='email' name='clientEmail' placeholder="Email" value={formData.clientEmail} onChange={handleChange} required />

        <input className="input input-bordered w-full max-w-xs" type='numebr' name='clientPhone' placeholder="Tele" value={formData.clientPhone} onChange={handleChange} required />

        <button type='submit' className='w-full p-2 bg-green-600 text-white rounded hover:bg-green-700'>Sol·licitar pressupost </button>

      </form>


     {/* <button className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleHelpClick}><i className="fas fa-question-circle" /> Help </button>

      {showHelp && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">

          <div className="bg-white  font-serif border rounded p-4 w-1/3">
            <h2 className="text-lg font-bold text-center mb-2">Help</h2>

            <p>
              This page is for requesting a budget. Please fill in the required fields with your information. The language input is for specifying the language and pages you prefer for communication. The cost of each Lnagugages and pages is 30 €.
            </p>
            <br/>

            <button className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleHelpClose}> Close </button>

          </div>
        </div>
      )}*/}
    </div>


  );
};

export default BudgetForm;
