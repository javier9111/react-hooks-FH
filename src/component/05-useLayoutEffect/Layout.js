import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "./layout.css";
export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  // console.log(state);
  const { quote } = !!data && data[0];

  const pTag = useRef();

  const [boxSize, setBoxSize] = useState({});
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0">
          {quote}
        </p>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <button className="btn btn-primary" onClick={increment}>
        siguiente quote
      </button>
    </div>
  );
};
