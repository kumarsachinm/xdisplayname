
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ fName: '', lName: '',});
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

  const handleSubmit = (e) =>{
    e.preventDefault(); // Prevent default form submission
    setSubmittedData(formData);
  }
  return (
    <div >
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
      <label>
        First Name: <input required type="text" name = "fName" value={formData.fName} onChange={handleChange} />
      </label>
      <br/>
      <label>
        Last Name: <input required type="text" name = "lName" value={formData.lName} onChange={handleChange}/>
      </label>
      <br/>
      <button type = "submit">Submit</button>
      </form> 
      {submittedData && (
        <div>
          <p>Full Name: {submittedData.fName +" "+ submittedData.lName}</p>
        </div>
      )}

      
    </div>
  );
}

export default App;
