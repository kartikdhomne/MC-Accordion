import React, { useState } from "react";
import ReusableModal from "./Reusable-Modal";

export default function Dashboard() {
  const [infoOpen, setInfoOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [step, setStep] = useState(1);

  // form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCloseForm = () => {
    setFormOpen(false);
    setStep(1); // reset steps when closing modal
  };

  const handleSave = () => {
    const userData = { name, email };
    localStorage.setItem("userProfile", JSON.stringify(userData)); // save in localStorage
    console.log("Saved:", userData);

    handleCloseForm();
  };

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

      {/* Multi-Step Form Modal */}
      <button
        className="border border-green-500 rounded px-4 py-2"
        onClick={() => setFormOpen(true)}
      >
        Open Form
      </button>
      <ReusableModal open={formOpen} onClose={handleCloseForm}>
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

        {step === 1 && (
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
            <button
              onClick={() => setStep(2)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
            <div className="flex space-x-2">
              <button
                onClick={() => setStep(1)}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Back
              </button>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </ReusableModal>
    </div>
  );
}
