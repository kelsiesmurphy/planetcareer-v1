import Image from "next/image";
import { demoRoles, demoStages } from "../../content/demoTableItems";
import { Globe, Paperclip } from "react-feather";

const TableLine = ({ tableLine, index }: any) => {
  const role = demoRoles[tableLine.role_id];
  const stage = demoStages[tableLine.stage_id];

  return (
    <tr
      key={index}
      className="flex flex-1 justify-between items-center gap-1 border-b py-3 odd:bg-stone-50"
    >
      <td className="flex flex-1 min-w-[180px] md:max-w-[190px] items-center gap-3 px-4 text-sm text-stone-500">
        <Image
          width="40"
          height="40"
          alt={tableLine.company_name + "company logo"}
          src={tableLine.company_logo}
          className="rounded-full"
        />
        <p className="text-slate-900 font-medium">{tableLine.company_name}</p>
      </td>
      <td className="flex min-w-[154px] items-center gap-3 px-4 text-sm text-stone-500">
        <div
          className={`rounded-full flex gap-2 items-center py-1 px-3 font-medium ${
            stage.title !== "Rejected"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {stage.title !== "Rejected" && (
            <div className="w-[6px] aspect-square rounded-full bg-green-600" />
          )}
          {stage ? stage.title : "N/A"}
        </div>
      </td>
      <td className="hidden md:flex min-w-[162px] items-center gap-3 px-4 text-sm text-stone-500">
        {role ? role.title : "N/A"}
      </td>
      <td className="hidden sm:flex min-w-[100px] items-center gap-3 px-4 text-sm text-stone-500">
        {tableLine.pay_range ? tableLine.pay_range : "Not given"}
      </td>
      <td className="hidden xl:flex flex-1 max-w-[270px] flex-wrap items-center gap-3 px-4 text-sm text-stone-500">
        <div className="rounded-full flex gap-2 items-center py-1 px-3 font-medium bg-green-100 text-green-700">
          <Paperclip size={12} />
          Resume
        </div>
        <div className="rounded-full flex gap-2 items-center py-1 px-3 font-medium bg-blue-100 text-blue-700">
          <Paperclip size={12} />
          Cover Letter
        </div>
      </td>
      <td className="hidden sm:flex flex-1 max-w-[60px] items-center gap-3 px-4 text-sm text-stone-500">
        <Globe className="text-stone-400 hover:text-stone-700 transition-colors cursor-pointer" />
      </td>
      <td className="hidden lg:flex flex-1 max-w-[112px] items-center gap-3 px-4 text-sm text-stone-500">
        {tableLine.applied_date.toLocaleDateString("en-GB")}
      </td>
      <td className="hidden lg:flex flex-1 items-center gap-3 px-4 text-sm text-stone-500">
        {tableLine.further_details}
      </td>
    </tr>
  );
};

export default TableLine;
