import React, { useEffect, useState } from "react";
import movies from "../movies.json";
import "./MovieList.scss";
import Filter from "../components/Filter";
import { useSearchParams } from "react-router-dom";

export default function MovieList() {
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let categories = [];
    setDisplayedMovies(movies);
    movies.forEach((movie) => {
        categories.push(movie.category.toLowerCase())
    });
    setCategories(Array.from(new Set(categories)));
  }, []);

  useEffect(() => {
    if (!searchParams) return;
    const category = searchParams.get("category");
    const newMovies = searchParams.get("category")
      ? movies.filter((movie) => movie.category.toLowerCase() === category.toLowerCase())
      : movies;
    setDisplayedMovies(newMovies);
  }, [searchParams]);

  function getColor(value) {
    let color = null;
    if (value < 101) color = "green";
    if (value < 90) color = "lightgreen";
    if (value < 80) color = "yellow";
    if (value < 70) color = "orange";
    if (value < 50) color = "red";
    return color;
  }

  return (
    <div>
      <Filter categories={categories} />
        <div className="movie-list">
          {displayedMovies && displayedMovies.map((movie) => (
              <div 
              key={movie.id} 
              className="movie-card"
              >
                <h3 className="movie-card__title">{movie.name}</h3>
                <p className="movie-card__description">{movie.description}</p>
                <p className="movie-card__category">Category: {movie.category}</p>
                <div className="rating">
                  <div style={{width: `${+movie.rating * 10}%`, backgroundColor: getColor(movie.rating * 10)}}className="rating__bar"></div>
                  <p className="rating__percentage">{movie.rating * 10}%</p>
                </div>
              </div>
            ))}
        </div>
    </div>
  );
}
