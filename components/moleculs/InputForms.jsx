import Input from "../atoms/inputs/Index";
import Label from "../atoms/labels/Index";
import SelectOption from "../atoms/selectOptions/select";

const InputForms = ({ name, title, type, placeholder, onChange }) => {
  return (
    <div className="mb-6">
      <Label>{title}</Label>

      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputForms;
