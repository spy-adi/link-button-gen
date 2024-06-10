import { useState } from "react";
import "./AddNewButton.css";

const AddNewButton = () => {
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [buttonType, setButtonType] = useState<string>("Public"); // Default value

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, link, description, buttonType);
  };

  return (
    <div>
      <h2 className="d-flex justify-content-center ">Add New Button</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">
            <strong>Name of button</strong>
          </label>
          <input
            type="text"
            placeholder="Enter a name for the button"
            autoComplete="off"
            name="name"
            className="form-control rounded-0"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="link">
            <strong>Link to be attached</strong>
          </label>
          <input
            type="text"
            placeholder="Enter the link"
            autoComplete="off"
            name="link"
            className="form-control rounded-0"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="buttonType">
            <strong>Type of Button</strong>
          </label>
          <div className="dropdown-wrapper">
            <select
              name="buttonType"
              className="form-control rounded-0"
              onChange={(e) => setButtonType(e.target.value)}
              value={buttonType}
            >
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="description">
            <strong>Description for the button</strong>
          </label>
          <textarea
            placeholder="Enter description for the button"
            autoComplete="off"
            name="description"
            className="form-control rounded-0"
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-success rounded-0">
            Add the button
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewButton;
