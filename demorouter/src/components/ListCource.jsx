import React from "react";
import { Link } from "react-router-dom";

const cources = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "Javahihi",
  },
  {
    id: 3,
    name: "React",
  },
  {
    id: 4,
    name: "Java",
  },
  {
    id: 5,
    name: "Hihi5",
  },
];

export default function ListCource() {
  return (
    <div>
      <h3>ListCoutce</h3>
      <div style={{ display: "flex", gap: 20 }}>
        {cources.map((cource) => (
          <div key={cource.id}>
            <p>Id: {cource.id}</p>
            <p>Name: {cource.name}</p>
            <button>
              <Link to={`/course-detail/${cource.id}`}>Xem chi tiet</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
