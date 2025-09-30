import React, { useState } from "react";
import ReusableModal from "./Reusable-Modal";

export default function Dashboard() {
  const [infoOpen, setInfoOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="p-6 space-x-4">
      {/* Info Modal */}
      <button
        className="border border-blue-500 rounded px-4 py-2"
        onClick={() => setInfoOpen(true)}
      >
        Show Info
      </button>
      <ReusableModal open={infoOpen} onClose={() => setInfoOpen(false)}>
        <h2 className="text-xl font-bold mb-2">Information</h2>
        <p>This is a reusable info modal</p>
      </ReusableModal>

      {/* Form Modal */}
      <button
        className="border border-green-500 rounded px-4 py-2"
        onClick={() => setFormOpen(true)}
      >
        Open Form
      </button>
      <ReusableModal open={formOpen} onClose={() => setFormOpen(false)}>
        <h2 className="text-xl font-bold mb-2">Edit Profile</h2>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
        </form>
      </ReusableModal>
    </div>
  );
}
