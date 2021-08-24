import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      // retrun is trigger every time the component is dismounted.
      isMounted.current = false; //here perserves the state if is mounted or not
    };
  }, []);
  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        }
      })
      .catch(() => {
        setState({
          loading: false,
          error: "No se pudo cargar la info",
          data: null,
        });
      });
  }, [url]);

  return state;
};
