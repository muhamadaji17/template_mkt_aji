import Input from "../atoms/inputs/Index";
import Label from "../atoms/labels/Index";
import SelectOption from "../atoms/selectOptions/select";

const InputForms = ({ title, ...props }) => {
  return (
    <div className="mb-6">
      <Label>{title}</Label>

      <Input {...props} />
    </div>
  );
};

export default InputForms;
