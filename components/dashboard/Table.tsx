import { useEffect, useState } from "react";
import TableLine from "./TableLine";

import AddApplication from "./application_form/AddApplication";


const Table = ({session, user, supabase}:any) => {
  const [loading, setLoading] = useState(true);
  const [tableLines, setTableLines] = useState([]);

  async function getTableLines() {
    try {
      setLoading(true);
      if (!user) throw new Error("No user");

      // let { data, error, status } = await supabase
      //   .from("job_application_period")
      //   .select(`
      //     id,
      //     applications!inner (
      //       *
      //     )
      //   `)
      //   .range(0, 7)

      let { data, error, status } = await supabase
        .from("application")
        .select('*')
        .eq('user_profile_id', user.id) 

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setTableLines(data)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTableLines();
  }, [session, user]);

  return (
    <div className="flex flex-col border-y border-slate-300 pb-8 bg-white shadow-sm md:rounded-xl md:border-x">
      <div className="flex justify-between items-center gap-6 py-5 px-4">
        <div className="flex gap-4">
          <h3 className="text-lg font-medium text-slate-900">
            Job Applications
          </h3>
        </div>
        <AddApplication />
      </div>
      <table>
        <thead className="text-left">
          <tr className="flex flex-1 justify-between items-center gap-1 border-y py-3">
            <th className="flex-1 min-w-[180px] md:max-w-[190px] px-4">
              <h4 className="text-xs font-medium text-stone-600">Company</h4>
            </th>
            <th className="min-w-[154px] px-4">
              <h4 className="text-xs font-medium text-stone-600">Stage</h4>
            </th>
            <th className="hidden min-w-[162px] px-4 md:flex">
              <h4 className="text-xs font-medium text-stone-600">Role</h4>
            </th>
            <th className="hidden min-w-[100px] px-4 sm:flex">
              <h4 className="text-xs font-medium text-stone-600">Pay Range</h4>
            </th>
            <th className="hidden flex-1 max-w-[270px] px-4 xl:flex">
              <h4 className="text-xs font-medium text-stone-600">Documents</h4>
            </th>
            <th className="hidden flex-1 max-w-[60px] px-4 sm:flex justify-center">
              <h4 className="text-xs font-medium text-stone-600">URL</h4>
            </th>
            <th className="hidden flex-1 max-w-[112px] px-4 lg:flex">
              <h4 className="text-xs font-medium text-stone-600">
                Date Applied
              </h4>
            </th>
            <th className="hidden flex-1 px-4 lg:flex">
              <h4 className="text-xs font-medium text-stone-600">
                Further Details
              </h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableLines.map((tableLineItem: any, index: number) => {
            return (
              <TableLine key={index} tableLineItem={tableLineItem} index={index} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
