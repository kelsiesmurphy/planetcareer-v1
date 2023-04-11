import Input from "./Input";
import UrlInput from "./UrlInput";
import StageInput from "./StageInput";
import { demoStages } from "@/content/demoTableItems";
import { useState } from "react";
import CompanyInput from "./CompanyInput";

const FirstScreen = () => {
  const [company, setCompany] = useState("");
  const [postingUrl, setPostingUrl] = useState("");
  const [stage, setStage] = useState(demoStages[0]);
  const [role, setRole] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <CompanyInput />
      <UrlInput
        label="Posting URL"
        placeholder="www.example.com"
        postingUrl={postingUrl}
        setPostingUrl={setPostingUrl}
      />
      <div className="flex flex-wrap gap-4">
        <Input label="Pay Range" placeholder="e.g. £30k - £35k" />
        <StageInput label="Stage" stage={stage} setStage={setStage} />
      </div>
      <Input label="Role" placeholder="e.g. Developer" />
      <button className="bg-green-700 hover:bg-green-800 py-2.5 mt-3 px-4 rounded-lg text-white transition-colors items-center flex-1 hadow-sm justify-center flex gap-2">
        Next
      </button>
    </div>
  );
};

export default FirstScreen;
