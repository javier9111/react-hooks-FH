import React from "react";
import { useFetch } from "../../Hooks/useFetch";
import "../02-useEffect/effects.css";
export const MultipleCustomHooks = () => {
  const { data, loading, error } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/1`
  );
  // console.log(state);
  const { author, quote } = !!data && data[0];
  return (
    <div>
      <h1>Breaking bad Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
    </div>
  );
};
