import React from "react";
import { Link } from "react-router-dom";
import movies from "../movielist";

function HomePage() {
  return (
    <div>
      <h1>Movie App</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{ border: "1px solid #ddd", padding: "10px" }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{ width: "200px" }}
            />
            <h3>{movie.title}</h3>
            {/* Link to MovieDetails */}
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
