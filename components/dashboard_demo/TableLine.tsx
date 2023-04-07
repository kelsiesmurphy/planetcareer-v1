import Image from "next/image";
import { demoRoles, demoStages } from "../../content/demoTableItems";

const TableLine = ({ tableLine, index }: any) => {
  const role = demoRoles[tableLine.role_id]
  const stage = demoStages[tableLine.stage_id]

  return (
    <tr
      key={index}
      className="flex flex-1 items-center gap-1 border-b py-3 odd:bg-stone-50"
    >
      <td className="flex flex-1 items-center gap-3 px-6 text-sm text-stone-500">
        <Image
          width="40"
          height="40"
          alt={tableLine.company_name + "company logo"}
          src={tableLine.company_logo}
          className="rounded-full"
        />
        <p className="text-slate-900 font-medium">{tableLine.company_name}</p>
      </td>
      <td className="flex flex-1 items-center gap-3 px-6 text-sm text-stone-500">
      {stage ? stage.title : "N/A"}
      </td>
      <td className="hidden md:flex flex-1 items-center gap-3 px-6 text-sm text-stone-500">
        {role ? role.title : "N/A"}
      </td>
      <td className="hidden md:flex flex-1 items-center gap-3 px-6 text-sm text-stone-500">
      {tableLine.pay_range ? tableLine.pay_range : "Not given"}
      </td>
      <td className="hidden md:flex flex-1 items-center gap-3 px-6 text-sm text-stone-500">
        test
      </td>
      <td className="hidden md:flex flex-1 items-center gap-3 px-6 text-sm text-stone-500">
        test
      </td>
      <td className="hidden md:flex flex-1 items-center gap-3 px-6 text-sm text-stone-500">
        {tableLine.applied_date.toLocaleDateString("en-GB")}
      </td>
      <td className="hidden md:flex flex-1 items-center gap-3 px-6 text-sm text-stone-500">
      {/* {tableLine.further_details} */}
      </td>
    </tr>
  );
};

export default TableLine;
