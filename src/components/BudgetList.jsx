import React from 'react';

const BudgetList = ({ budgets }) => {
  return (
    <div className="my-10 border-t-4 border-dashed">
      <h3 className="font-bold text-4xl md:mt-10 mt-5 mb-5 md:text-start text-center">
        Pressupostos en curs:
      </h3>
      {budgets.map((budget, index) => (
        <div key={index} className="mb-4 p-4 border rounded">
          <h3 className="text-lg font-bold">{budget.budgetName}</h3>
          <p>
            <strong>Client:</strong> {budget.clientName}
          </p>
          <p>
            <strong>Email:</strong> {budget.clientEmail}
          </p>
          <p>
            <strong>Telèfon:</strong> {budget.clientPhone}
          </p>
          <p>
            <strong>Serveis contractats:</strong> {budget.services.join(", ")}
          </p>
          <p>
            <strong>Total:</strong> {budget.total} €
          </p>
        </div>
      ))}
    </div>
  );
};

export default BudgetList;
