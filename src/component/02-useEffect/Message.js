import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({});
  const { x, y } = coords;
  useEffect(() => {
    const mousemove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove); // el return en el use effect se usa para hacer el clean up de la app, en este caso se remueven los eventos
    };
  }, []);
  return (
    <div>
      <h3>Hola</h3>

      <p>
        x:{x} y:{y}
      </p>
    </div>
  );
};
