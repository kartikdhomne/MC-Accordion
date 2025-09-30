import React from "react";

const ReusableModal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="w-[50%] bg-white p-8 rounded-2xl shadow-lg border-2 border-amber-400"
        onClick={(e) => e.stopPropagation()}
      >
        {children}

        <button
          onClick={onClose}
          className="mt-4 border border-yellow-500 rounded-2xl py-2 px-4 cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ReusableModal;
