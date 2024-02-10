import DataTable from "../components/Tickets/DataTable";

export default function Tickets() {
  return (
    <div className="m-3 h-screen-91 border-2 border-slate-400">
      <div className="h-9 px-3 border-2 text-white bg-violet-500/75 text-lg font-semibold">Open Tickets</div>
      <DataTable />
    </div>
  );
}
