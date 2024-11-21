import { useState, useEffect } from "react";
import mockData from "../utils/MOCK_DATA.json";

function App() {
  const [enteredText, setEnteredText] = useState("");
  const [filteredData, setFilteredData] = useState(mockData);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 10;

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  function handleSearch(e) {
    const enteredValue = e.target.value.toLowerCase();
    setEnteredText(enteredValue);
    setCurrentPage(1);

    const results = mockData.filter(
      (item) =>
        item.id.toString().includes(enteredValue) ||
        item.firstname.toLowerCase().includes(enteredValue) ||
        item.lastname.toLowerCase().includes(enteredValue) ||
        item.email.toLowerCase().includes(enteredValue) ||
        item.phonenumber.includes(enteredValue)
    );

    setFilteredData(results);
  }

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const displayData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
        Finder
      </h1>
      <input
        type="text"
        onChange={handleSearch}
        value={enteredText}
        placeholder="Search by ID, name, email, or phone number"
        className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Id
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Full Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone Number
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {displayData.map((value) => (
                  <tr key={value.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{value.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {value.firstname} {value.lastname}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {value.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {value.phonenumber}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-lg shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {pageCount}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, pageCount))
              }
              disabled={currentPage === pageCount}
              className="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-lg shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
