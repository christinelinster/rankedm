import {useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse } from "date-fns";

const CustomDateInput = ({ selectedDate, onChange }) => {
  const [startDate, setStartDate] = useState(
    selectedDate ? parse(selectedDate, "MM/dd/yyyy", new Date()) : null
  );

  function handleChange (date){
    setStartDate(date);
    onChange(format(date, "MM/dd/yyyy"));
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      dateFormat="MM/dd/yyyy"
      placeholderText="MM/DD/YYYY"
    />
  );
};

export default CustomDateInput;
