// DEPENDENCIES
import { useRef, useState, useEffect } from "react";

export function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("It's not possible to search an empty string");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("It's not possible to search a number");
      return;
    }

    if (search.length < 3) {
      setError("The search term must be at least 3 characters long");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}
