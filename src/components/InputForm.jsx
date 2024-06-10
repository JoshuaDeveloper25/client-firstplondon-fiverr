export const InputForm = ({
  inputLabelHolder,
  inputPlaceholder,
  labelClassNameAdd,
  inputType,
  inputName,
  onChange,
  valueEvent,
}) => {
  return (
    <label className={`block ${labelClassNameAdd || "mb-3"}`}>
      <span>{inputLabelHolder}</span>
      <input
        className={`bootstrap-input block`}
        type={inputType}
        name={inputName}
        onChange={onChange}
        value={valueEvent}
        placeholder={inputPlaceholder}
      />
    </label>
  );
};
