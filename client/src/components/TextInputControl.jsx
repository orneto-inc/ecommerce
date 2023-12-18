import React from "react";
import "../styling/css/components.css"


export const TextInputControl = ({ value, label, name, placeholder, type, onChange}) =>{
  const handleChange = (e) =>{
    const { value } = e.target;
    onChange(value);
  }  
  return (
      <div>
        {label && <label htmlFor="input-field">{label}</label>}
        <input
            type={type}
            value={value}
            label={label}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
        /> 
      </div>
    );
}