import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../components/Header";
import home from "../assets/home.png";
import { FormContext } from "../context/FormContext"; // Import your FormContext

const HomePage = () => {
  const { setFormData } = useContext(FormContext); // Use context to get setFormData
  const navigate = useNavigate(); // Initialize useNavigate
  // State for sliders
  const [employees, setEmployees] = useState(0);
  const [billableEmployees, setBillableEmployees] = useState(0);
  const [salary, setSalary] = useState(106);
  const [daysDown, setDaysDown] = useState(40);
  const [billingType, setBillingType] = useState("annualRevenue");
  const [rate, setRate] = useState(40);
  // Function to handle increment and decrement
  const handleIncrement = (value, setter, step = 1) => {
    setter((prev) => Math.min(prev + step, value.max));
  };

  const handleDecrement = (value, setter, step = 1) => {
    setter((prev) => Math.max(prev - step, value.min));
  };

  const handleCalculate = () => { 
    let sum = 0; // Initialize sum variable for the calculation
  
    // Calculate based on selected billing type
    switch (billingType) {
      case "annualRevenue":
        sum = ((employees * salary) + rate) / 260 * daysDown; // Replace salary with annual revenue
        break;
      case "dailyBilling":
        sum = ((employees * salary / 260) + (billableEmployees * rate)) * daysDown; // daily billing rate
        break;
      case "hourlyBilling":
        sum = ((employees * salary / 260) + (billableEmployees * rate * 7.5)) * daysDown; // hourly billing rate
        break;
      default:
        sum = 0; // In case of no valid billing type
        break;
    }
  
    // Update form data in context, including the sum
    setFormData({
      employees,
      billableEmployees,
      salary,
      daysDown,
      billingType,
      rate,
      sum, // Store the calculated sum
    });
    // Navigate to player1.js after the calculation
    navigate("/player1"); // Adjust the path according to your routing setup
  };

  return (
    <div className="main-section">
      <Header />
      <main className="p-4 md:p-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-start">
          {/* Left Section: Form */}
          {/* <div> */}
            <div className="space-y-6">
              {/* Number of Employees Slider */}
              <div>
                <label className="block font-bold text-slate-400">Number Of Employees</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex items-center justify-center">
                  <button
                    className="px-3 py-1 bg-transparent h-10 w-10 border border-gray-300 shadow-md rounded-full"
                    onClick={() => handleDecrement({ min: 0 }, setEmployees)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={employees}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      if (value >= 0 && value <= 100) { // Ensure value is within min (0) and max (100)
                        setEmployees(value);
                      }
                    }}
                    className="w-24 text-center text-pink-600 font-bold bg-transparent focus:outline-none"
                  />
                  <button
                    className="px-3 py-1 bg-transparent h-10 w-10 border border-gray-300 shadow-md rounded-full"
                    onClick={() => handleIncrement({ max: 100 }, setEmployees)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Number of Billable Employees Slider */}
              <div>
                <label className="block font-bold text-slate-400">Number Of Billable Employees</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={billableEmployees}
                  onChange={(e) => setBillableEmployees(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex items-center justify-center">
                  <button
                    className="px-3 py-1 bg-transparent h-10 w-10 border border-gray-300 shadow-md rounded-full"
                    onClick={() => handleDecrement({ min: 0 }, setBillableEmployees)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={billableEmployees}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      if (value >= 0 && value <= 100) { // Ensure value is within min (0) and max (100)
                        setBillableEmployees(value);
                      }
                    }}
                    className="w-24 text-center text-pink-600 font-bold bg-transparent focus:outline-none"
                  />
                  <button
                    className="px-3 py-1 bg-transparent h-10 w-10 border border-gray-300 shadow-md rounded-full"
                    onClick={() => handleIncrement({ max: 100 }, setBillableEmployees)}
                  >
                    +
                  </button>
                </div>
              </div>
              {/* Average Employee Salary Slider */}
              <div>
                <label className="block font-bold text-slate-400">Average Employee Salary</label>
                <input
                  type="range"
                  min="0"
                  max="50000"
                  value={salary}
                  onChange={(e) => setSalary(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex items-center justify-center">
                  <button
                    className="px-3 py-1 bg-transparent h-10 w-10 border border-gray-300 shadow-md rounded-full"
                    onClick={() => handleDecrement({ min: 0 }, setSalary)}
                  >
                    -
                  </button>
                  <div className="flex items-center mx-4">
                    <span className="text-pink-600 font-bold">£</span>
                    <input
                      type="number"
                      min="0"
                      max="50000"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={salary}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value >= 0 && value <= 50000) { // Ensure value is within min (0) and max (100)
                          setSalary(value);
                        }
                      }}
                      className="w-16 text-center text-pink-600 font-bold bg-transparent focus:outline-none"
                    />
                  </div>
                  <button
                    className="px-3 py-1 bg-transparent h-10 w-10 border border-gray-300 shadow-md rounded-full"
                    onClick={() => handleIncrement({ max: 50000 }, setSalary)}
                  >
                    +
                  </button>
                </div>
              </div>


              {/* Number of Days Down Slider */}
              <div>
                <label className="block font-bold text-slate-400">Number Of Days Down</label>
                <input
                  type="range"
                  min="0"
                  max="365"
                  value={daysDown}
                  onChange={(e) => setDaysDown(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex items-center justify-center">
                  <button
                    className="px-3 py-1 bg-transparent h-10 w-10 border border-gray-300 shadow-md rounded-full"
                    onClick={() => handleDecrement({ min: 0 }, setDaysDown)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="0"
                    max="365"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={daysDown}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      if (value >= 0 && value <= 365) { // Ensure value is within min (0) and max (100)
                        setDaysDown(value);
                      }
                    }}
                    className="w-24 text-center text-pink-600 font-bold bg-transparent focus:outline-none"
                  />
                  <button
                    className="px-3 py-1 bg-transparent h-10 w-10 border border-gray-300 shadow-md rounded-full"
                    onClick={() => handleIncrement({ max: 365 }, setDaysDown)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Billing Options */}
              <div>
                <div className="mt-2 space-y-2">
                  <div>
                    <input
                      type="radio"
                      id="annualRevenue"
                      value="annualRevenue"
                      checked={billingType === "annualRevenue"}
                      onChange={(e) => setBillingType(e.target.value)}
                      className="mr-2"
                    />
                    <label htmlFor="annualRevenue">Annual Revenue</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="dailyBilling"
                      value="dailyBilling"
                      checked={billingType === "dailyBilling"}
                      onChange={(e) => setBillingType(e.target.value)}
                      className="mr-2"
                    />
                    <label htmlFor="dailyBilling">
                      Average Employee Daily Billing Rates
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="hourlyBilling"
                      value="hourlyBilling"
                      checked={billingType === "hourlyBilling"}
                      onChange={(e) => setBillingType(e.target.value)}
                      className="mr-2"
                    />
                    <label htmlFor="hourlyBilling">
                      Average Employee Hourly Billing Rates
                    </label>
                  </div>
                </div>
              </div>

              {/* Employee Rate Slider */}
              <div>
                <input
                  type="range"
                  min="0"
                  max="20000000"
                  value={rate}
                  onChange={(e) => setRate(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex items-center justify-center">
                  <button
                    className="px-3 py-1 bg-transparent h-10 w-10 border border-gray-300 shadow-md rounded-full"
                    onClick={() => handleDecrement({ min: 0 }, setRate)}
                  >
                    -
                  </button>
                  <div className="flex items-center mx-4">
                    <span className="text-pink-600 font-bold">£</span>
                    <input
                      type="number"
                      min="0"
                      max="20000000"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={rate}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value >= 0 && value <= 20000000) { // Ensure value is within min (0) and max (100)
                          setRate(value);
                        }
                      }}
                      className="w-16 text-center text-pink-600 font-bold bg-transparent focus:outline-none"
                    />
                  </div>
                  <button
                    className="px-3 py-1 bg-transparent h-10 w-10 border border-gray-300 shadow-md rounded-full"
                    onClick={() => handleIncrement({ max: 20000000 }, setRate)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Calculate Button */}
              <div>
                <button
                  className="w-full bg-pink-600 text-white py-3 font-bold text-lg rounded hover:bg-pink-700"
                  onClick={handleCalculate} // Call the new handleCalculate function
                >
                  CALCULATE
                </button>
              </div>
            </div>
          {/* </div> */}

          {/* Right Section: Illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <img
              src={home}
              alt="Calculator Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
