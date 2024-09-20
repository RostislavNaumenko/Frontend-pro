interface MyInputProps {
  label: string;
  placeholder: string;
  type: string;
  name?: string;
}

function MyInput({ label, placeholder, type, name }: MyInputProps) {
  return (
    <>
      {/* сопроводительный текст из label */}
      <label>{label}</label>
      <input placeholder={placeholder} type={type} name={name} />
    </>
  );
}

export default MyInput;
