import { useState } from 'react';
import Input from "./Component/Input/Input";
import Table from './Component/Table/Table';
function App() {
  const [Form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Occupation: "",
    City: ""
  });

  const [Records, setRecords] = useState([]);

  const handleSubmit = () => {
    setRecords([...Records, Form]);
    setForm({
      FirstName: "",
      LastName: "",
      Email: "",
      Occupation: "",
      City: ""
    });
  };

  return (
    <>
      <Input
        onChange={(e) => setForm({ ...Form, FirstName: e.target.value })}
        label="Enter First Name"
        type="text"
        value={Form.FirstName}
      />
      <Input
        onChange={(e) => setForm({ ...Form, LastName: e.target.value })}
        label="Enter Last Name"
        type="text"
        value={Form.LastName}
      />
      <Input
        onChange={(e) => setForm({ ...Form, Email: e.target.value })}
        label="Enter Email"
        type="email"
        value={Form.Email}
      />
      <Input
        onChange={(e) => setForm({ ...Form, Occupation: e.target.value })}
        label="Enter Occupation"
        type="text"
        value={Form.Occupation}
      />
      <Input
        onChange={(e) => setForm({ ...Form, City: e.target.value })}
        label="Enter City"
        type="text"
        value={Form.City}
      />
      <button onClick={handleSubmit}>Submit</button>
      
     <Table records={Records}/>
    </>
  );
}

export default App;