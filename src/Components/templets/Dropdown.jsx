import React from "react";

const Dropdown = ({ title, options, func }) => {
  return (
    <div className="select">
      <select defaultValue="0" onChange={func} name="format" id="format"
      className="outline-none focus:ring-0 focus:outline-none border-none">
        <option value="0" disabled hidden>
          {title}
        </option>

        {options.map((o, i) => (
          <option key={i} value={o}>{o.toUpperCase()}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
