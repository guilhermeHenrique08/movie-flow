import { useCallback, useReducer, useEffect } from "react";

function useFetch(url) {
  const initialState = {
    loading: true,
    data: undefined,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "loading":
        return {
          ...initialState,
          loading: true,
        };
      case "data":
        return {
          data: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const apiMovie = useCallback(async () => {
    dispatch({ type: "loading" });

    const response = await fetch(url);
    const data = await response.json();

    dispatch({ type: "loading" });
    dispatch({ type: "data", payload: data });
  }, [url]);

  useEffect(() => {
    apiMovie();
  }, [apiMovie]);

  return {
    data: state.data,
    loading: state.loading,
  };
}

export default useFetch;
