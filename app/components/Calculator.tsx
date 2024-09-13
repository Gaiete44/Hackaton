import React, { useState } from "react";

type Operation = "+" | "-" | "*" | "/" | null;

const Calculator: React.FC = () => {
  const [num1, setNum1] = useState<number | string>("");
  const [num2, setNum2] = useState<number | string>("");
  const [operation, setOperation] = useState<Operation>(null);
  const [result, setResult] = useState<number | string | null>(null);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<number | string>>) => {
    setter(parseFloat(e.target.value));
  };

  const handleOperationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOperation(e.target.value as Operation);
  };

  const calculate = () => {
    if (operation && num1 !== "" && num2 !== "") {
      let res;
      switch (operation) {
        case "+":
          res = (num1 as number) + (num2 as number);
          break;
        case "-":
          res = (num1 as number) - (num2 as number);
          break;
        case "*":
          res = (num1 as number) * (num2 as number);
          break;
        case "/":
          if (num2 !== 0) {
            res = (num1 as number) / (num2 as number);
          } else {
            res = "Error: Division by zero!";
          }
          break;
        default:
          res = "Invalid operation!";
      }
      setResult(res);
    }
  };

  const resetCalculator = () => {
    setNum1("");
    setNum2("");
    setOperation(null);
    setResult(null);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Simple Calculator</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Enter first number:</label>
        <input
          type="number"
          value={num1}
          onChange={(e) => handleNumberChange(e, setNum1)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Select operation:</label>
        <select
          value={operation || ""}
          onChange={handleOperationChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        >
          <option value="" disabled>
            Choose operation
          </option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Enter second number:</label>
        <input
          type="number"
          value={num2}
          onChange={(e) => handleNumberChange(e, setNum2)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={calculate}
          className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
        >
          Calculate
        </button>
      </div>
      {result !== null && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Result: {result}</h2>
        </div>
      )}
      <div>
        <button
          onClick={resetCalculator}
          className="w-full bg-gray-500 text-white p-2 rounded mt-4 hover:bg-gray-600"
        >
          Reset Calculator
        </button>
      </div>
    </div>
  );
};

export default Calculator;
