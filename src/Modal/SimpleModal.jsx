import { useState } from "react";

const Modal = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((item) => !item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        className="relative top-0 border-1 border-green-500 rounded-2xl px-4 py-2 mt-6 cursor-pointer"
        onClick={handleClick}
      >
        Open Modal
      </button>
      {open && (
        <div className="fixed  bg-black left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="border-1 border-red-600 p-10 bg-white">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam ad autem sed quis doloremque perspiciatis nemo optio
              adipisci provident. Quo cum quisquam iusto facere sapiente cumque
              modi libero, nisi commodi!
            </p>
            <button
              className="border-1 border-yellow-500 rounded-2xl px-4 py-2 mt-6 cursor-pointer"
              onClick={handleClose}
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
