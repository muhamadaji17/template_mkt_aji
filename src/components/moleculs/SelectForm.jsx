import Label from "../atoms/labels/Index";
import SelectOption from "../atoms/selectOptions/select";

const SelectedForm = ({ title, valueOptions, selectTitle, ...props }) => {
  return (
    <div>
      <Label>{title}</Label>
      <SelectOption
        valueOptions={valueOptions}
        selectTitle={selectTitle}
        {...props}
      />
    </div>
  );
};

export default SelectedForm;
