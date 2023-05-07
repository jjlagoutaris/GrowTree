import { useState } from "react";
import './Form.scss';

const Form = () => {
  const [formData, setFormData] = useState({hashrate: "",units: "",message: ""});

  const handleChange = (event) => {
    const { hashrate, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [hashrate]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hashrate: ${formData.hashrate}, Units: ${formData.units}, Message: ${formData.message}`
    );
};

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="hashrate">Enter your hash rate: </label>
      <input type="text" id="hashrate" name="hashrate" value={formData.hashrate} onChange={handleChange}/>


      <label htmlFor="units">
        Units:
          <select name="units" id="units" value={formData.units} onChange={handleChange}>
            <option  value="option1">Option 1</option>
            <option  value="option2">Option 2</option>
            <option  value="option3">Option 3</option>
          </select>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form