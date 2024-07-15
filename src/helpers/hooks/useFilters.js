import { useState } from "react";

export default function useFilters(initialFilters) {
  const [filters, setFilters] = useState(initialFilters);

  const changeFilter = (key, value) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilter };
}
