export default function SlotBox({ id, status }) {
  const color =
    status === "occupied" ? "bg-red-200 text-red-800" : "bg-green-200 text-green-800";

  return (
    <div
      className={`p-4 rounded-lg shadow-md font-medium flex items-center justify-center flex-col ${color}`}
    >
      <span className="text-sm">Slot {id}</span>
      <span className="text-xs uppercase mt-1">{status}</span>
    </div>
  );
}
