import { Upload, UploadCloud } from "react-feather";

const UploadFile = ({ fileName }: any) => {
  return (
    <div className="flex-1 flex flex-col gap-1.5">
      <label
        htmlFor="further-details"
        className="font-medium text-sm text-stone-700"
      >
        {fileName}
      </label>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full border border-stone-300 rounded-lg cursor-pointer bg-stone-50 hover:bg-stone-100 transition-colors"
        >
          <div className="flex p-4 flex-col items-center justify-center gap-2 text-stone-500">
            <div className="p-1">
                <UploadCloud />
            </div>
            <p className="mb-2 text-sm ">
              <span className="font-semibold text-green-700">
                Click to upload your {fileName.toLowerCase()}
              </span>
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default UploadFile;
