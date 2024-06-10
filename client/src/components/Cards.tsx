import React from "react";
import "./Cards.css";

interface CardProps {
  buttonName: string;
  buttonURL: string;
  buttonDescription: string;
}

const Cards: React.FC<CardProps> = ({
  buttonName,
  buttonURL,
  buttonDescription,
}) => {
  const truncatedDescription =
    buttonDescription.length > 100
      ? buttonDescription.substring(0, 100) + "..."
      : buttonDescription;

  return (
    <div className="card" style={{ width: "18rem", textAlign: "center" }}>
      <div className="card-body">
        <h5 className="card-title">{buttonName}</h5>
        <p
          className="card-text"
          title={buttonDescription.length > 100 ? buttonDescription : ""}
        >
          {truncatedDescription}
        </p>
        <a
          href={buttonURL}
          className="btn btn-primary stretched-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click
        </a>
      </div>
    </div>
  );
};

export default Cards;
