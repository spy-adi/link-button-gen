import { useState } from "react";
import "./LinkButtonGenPage.css";
import Navbar from "./Navbar";
import AddNewButton from "./AddNewButton";
import Cards from "./Cards";

interface BUTTON {
  name: string;
  url: string;
  description: string;
}

const LinkButtonGenPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const button: BUTTON = {
    name: "Google",
    url: "https://www.google.com/",
    description: "It is a very useful website",
  };

  const buttonL: BUTTON = {
    name: "Lorem Ipsum",
    url: "https://www.lipsum.com/",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
  };

  return (
    <>
      <Navbar />
      <div className="add-new-link-container">
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
      <div className="cards-container">
        <Cards
          buttonName={button.name}
          buttonURL={button.url}
          buttonDescription={button.description}
        />
        <Cards
          buttonName={buttonL.name}
          buttonURL={buttonL.url}
          buttonDescription={buttonL.description}
        />
        <Cards
          buttonName={buttonL.name}
          buttonURL={buttonL.url}
          buttonDescription={buttonL.description}
        />
        <Cards
          buttonName={buttonL.name}
          buttonURL={buttonL.url}
          buttonDescription={buttonL.description}
        />
        <Cards
          buttonName={buttonL.name}
          buttonURL={buttonL.url}
          buttonDescription={buttonL.description}
        />
        <Cards
          buttonName={buttonL.name}
          buttonURL={buttonL.url}
          buttonDescription={buttonL.description}
        />
        <Cards
          buttonName={buttonL.name}
          buttonURL={buttonL.url}
          buttonDescription={buttonL.description}
        />
        <Cards
          buttonName={buttonL.name}
          buttonURL={buttonL.url}
          buttonDescription={buttonL.description}
        />
      </div>
    </>
  );
};

export default LinkButtonGenPage;
