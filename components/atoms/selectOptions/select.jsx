const SelectOption = ({ name, value, valueOptions, onChange, selectTitle }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="h-10 border px-2"
    >
      <option value="example" disabled>
        {selectTitle}
      </option>
      {valueOptions.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
