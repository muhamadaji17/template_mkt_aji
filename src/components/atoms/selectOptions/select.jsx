const SelectOption = ({ valueOptions, selectTitle, ...props }) => {
  return (
    <select {...props} className="h-10 border px-2 border-slate-700">
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
