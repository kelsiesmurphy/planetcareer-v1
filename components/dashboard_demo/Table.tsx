import { Plus } from "react-feather";
import { demoTableItems } from "../../content/demoTableItems";
import TableLine from "./TableLine";

const Table = () => {
  return (
    <div className="flex flex-col border-y border-slate-300 bg-white pb-12 shadow-sm md:rounded-xl md:border-x">
      <div className="flex justify-between items-center gap-6 py-5 px-6">
        <div className="flex gap-4">
          <h3 className="text-lg font-medium text-slate-900">
            Job Applications
          </h3>
        </div>
        <button className="btn-primary">
          <Plus size={20} className="text-white" /> New
        </button>
      </div>
      <table>
        <thead className="text-left">
          <tr className="flex flex-1 justify-between gap-1 border-y py-3">
            <th className="flex-1 px-6">
              <h4 className="text-xs font-medium text-stone-600">Company</h4>
            </th>
            <th className="flex-1 px-6">
              <h4 className="text-xs font-medium text-stone-600">Stage</h4>
            </th>
            <th className="hidden flex-1 px-6 md:block">
              <h4 className="text-xs font-medium text-stone-600">Role</h4>
            </th>
            <th className="hidden flex-1 px-6 md:block">
              <h4 className="text-xs font-medium text-stone-600">Pay Range</h4>
            </th>
            <th className="hidden flex-1 px-6 md:block">
              <h4 className="text-xs font-medium text-stone-600">Documents</h4>
            </th>
            <th className="hidden flex-1 px-6 md:block">
              <h4 className="text-xs font-medium text-stone-600">Posting URL</h4>
            </th>
            <th className="hidden flex-1 px-6 md:block">
              <h4 className="text-xs font-medium text-stone-600">Date Applied</h4>
            </th>
            <th className="hidden flex-1 px-6 md:block">
              <h4 className="text-xs font-medium text-stone-600">Further Details</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {demoTableItems.map((tableLine: any, index: number) => {
            return (
              <TableLine key={index} tableLine={tableLine} index={index} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
