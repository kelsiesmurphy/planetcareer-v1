import { ArrowUpRight } from "react-feather";
import UploadFile from "./UploadFile";

const SecondScreen = ({ setSecondScreen, handleClose, handleChange }: any) => {
  return (
    <div className="flex flex-col gap-4">
      <UploadFile fileName="Resume"/>
      <UploadFile fileName="Cover Letter"/>
      <div className="flex-1 flex flex-col gap-1.5">
        <label htmlFor="further-details" className="font-medium text-sm text-stone-700">
          Further Details
        </label>
        <textarea
          id="further-details"
          rows={3}
          name="FurtherDetails"
          onChange={handleChange}
          placeholder="Add additional details relating to this role..."
          className="input min-h-[100px]"
        ></textarea>
      </div>
      <div className="flex flex-wrap flex-1 gap-4">
        <button onClick={() => setSecondScreen(false)} className="btn-secondary flex-1 max-w-none">Back to details</button>
        <button className="btn-primary flex-1 max-w-none" onClick={handleClose}>Add Application <ArrowUpRight /></button>
      </div>
    </div>
  );
};

export default SecondScreen;
