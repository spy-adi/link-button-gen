import { useState } from "react";
import "./LinkButtonGenPage.css";
import Navbar from "./Navbar";
import AddNewButton from "./AddNewButton";

const LinkButtonGenPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <div className="">
        <button
          className="btn btn-success btn-add-new"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          Add a new link
        </button>
        {isModalOpen && (
          <div
            className="modal-parent-div"
            onClick={() => setIsModalOpen(!isModalOpen)} // Close modal when clicking outside content
          >
            <div
              className="modal-child-div"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
            >
              <AddNewButton />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LinkButtonGenPage;
