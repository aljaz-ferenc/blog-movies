import React from "react";
import "./Filter.scss";
import { Link, useSearchParams } from "react-router-dom";

export default function Filter({ categories }) {
    const [searchParams, setSearchParams] = useSearchParams();

  function capitalize(string) {
    const [initial, ...rest] = string.split("");
    return initial.toUpperCase() + rest.join("");
  }

  return (
    <div className="filter__container">
      <h2>Filter by</h2>
      <div className="filter">
        <div className="filter__by-categories">
          <h3>Categories</h3>
          <button onClick={() => setSearchParams({})}>All</button>
          {categories &&
            categories.map((category, i) => (
              <button onClick={() => setSearchParams({category: category})} key={i}>
                {capitalize(category)}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}