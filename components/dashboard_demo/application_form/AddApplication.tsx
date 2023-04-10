import { useState } from "react";
import { Briefcase, Plus } from "react-feather";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Input from "./Input";

const AddApplication = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="btn-primary">
        <Plus size={20} />
        New
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          modal: "customModal",
        }}
      >
        <div className="flex flex-col gap-4">
          <div className="p-3.5 border shadow-sm rounded-lg">
            <Briefcase />
          </div>
          <div>
            <h1 className="font-medium text-lg text-stone-900">
              New Application
            </h1>
            <h1 className="text-sm text-stone-600">
              Add your application details here.
            </h1>
          </div>
          <form>
            <Input label="Company" placeholder="Search for company"/>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddApplication;
