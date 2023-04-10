const Input = ({label, placeholder}:any) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={label} className="font-medium text-sm text-stone-700">
        {label}
      </label>
      <input id={label} type="text" placeholder={placeholder} className="input" />
    </div>
  );
};

export default Input;
