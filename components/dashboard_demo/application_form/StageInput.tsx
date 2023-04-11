import Dropdown from "../StageDropdown"

const StageInput = ({label, stage, setStage}:any) => {

  const handleChangeStage = (stage: any) => {
    setStage(stage)
  };

  return (
    <div className="flex-1 flex flex-col gap-1.5">
      <label htmlFor={label} className="font-medium text-sm text-stone-700">
        {label}
      </label>
      {/* <input id={label} type="text" className="input" /> */}
      <div className="input py-2 px-3.5">
        <Dropdown stage={stage} handleChangeStage={handleChangeStage} />
      </div>
    </div>
  )
}

export default StageInput