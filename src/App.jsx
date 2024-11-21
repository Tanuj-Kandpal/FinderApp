import { useState } from "react";
import mockData from "../utils/MOCK_DATA.json";

function App() {
  const [enteredtext, setEnteredText] = useState("");
  const [filteredText, setFilteredText] = useState(mockData);

  function handleSearch(e) {
    const enteredValue = e.target.value.toLowerCase();
    setEnteredText(enteredValue);

    const results = mockData.filter(
      (item) =>
        item.id.toString().includes(enteredValue) || //Seach by Id
        item.firstname.toLowerCase().includes(enteredValue) || // Search by firstname
        item.lastname.toLowerCase().includes(enteredValue) || // Search by lastname
        item.email.toLowerCase().includes(enteredValue) || // Search by email
        item.phonenumber.includes(enteredValue) // Search by phone number
    );

    setFilteredText(results);
  }
  return (
    <>
      <h1>Finder</h1>
      <input type="text" onChange={handleSearch} value={enteredtext} />
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {filteredText.map((value) => (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>
                  {value.firstname} {value.lastname}
                </td>
                <td>{value.email}</td>
                <td>{value.phonenumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
