const TableLine = ({ tableLine, index }: any) => {
  return (
    <tr
      key={index}
      className="flex flex-1 items-center gap-1 border-b py-3 odd:bg-stone-50"
    >
        <td className="flex flex-1 items-center gap-3 px-6 text-sm text-stone-500">
          test
        </td>
        <td className="flex flex-1 items-center gap-3 px-6 text-sm text-stone-500">
          test
        </td>
        <td className="hidden md:flex flex-1 items-center gap-3 px-6 text-sm text-stone-500">
          test
        </td>
        <td className="hidden md:flex flex-1 items-center gap-3 px-6 text-sm text-stone-500">
          test
        </td>
        <td className="hidden md:flex flex-1 items-center gap-3 px-6 text-sm text-stone-500">
          test
        </td>
        <td className="hidden md:flex flex-1 items-center gap-3 px-6 text-sm text-stone-500">
          test
        </td>
        <td className="hidden md:flex flex-1 items-center gap-3 px-6 text-sm text-stone-500">
          test
        </td>
        <td className="hidden md:flex flex-1 items-center gap-3 px-6 text-sm text-stone-500">
          test
        </td>
    </tr>
  );
};

export default TableLine;
