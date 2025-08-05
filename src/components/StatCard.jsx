export default function StatCard({ label, value, color }) {
  return (
    <div className={`rounded-2xl shadow-lg p-6 text-white ${color} flex flex-col items-center justify-center`}>
      <p className="text-lg">{label}</p>
      <p className="text-4xl font-bold">{value}</p>
    </div>
  );
}
