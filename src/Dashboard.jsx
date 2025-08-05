import { useEffect, useState } from "react";
import SlotBox from "./components/SlotBox";
import StatCard from "./components/StatCard";

export default function Dashboard() {
  const [slots, setSlots] = useState([]);
  console.log("Slots 👇", slots);


  useEffect(() => {
    // 💻 MOCK DATA for UI development without backend
    const mockSlots = [
      { id: 1, status: "occupied" },
      { id: 2, status: "empty" },
      { id: 3, status: "occupied" },
      { id: 4, status: "empty" },
      { id: 5, status: "occupied" },
      { id: 6, status: "empty" },
    ];
    setSlots(mockSlots);

    // 🔌 Uncomment below to switch to backend fetch mode later
    /*
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/slots");
        setSlots(res.data.slots);
      } catch (err) {
        console.error("Error fetching slot data:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // refresh every 5 secs
    return () => clearInterval(interval);
    */
  }, []);

  const total = slots.length;
  const occupied = slots.filter((s) => s.status === "occupied").length;
  const empty = total - occupied;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-400 mb-10">
        🚗 Smart Parking Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <StatCard label="Total Slots" value={total} color="bg-blue-500" />
        <StatCard label="Occupied" value={occupied} color="bg-red-500" />
        <StatCard label="Available" value={empty} color="bg-green-500" />
      </div>

      <div className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Slot Overview
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {slots.map((slot) => (
            <SlotBox key={slot.id} id={slot.id} status={slot.status} />
          ))}
        </div>
      </div>
    </div>
  );
}
