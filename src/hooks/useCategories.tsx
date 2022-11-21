import { useEffect, useState } from "react";
import apiRoutes from "../api/api";

function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await apiRoutes.get("/categories");

      setCategories(data.data);
    })();
  }, []);

  return { categories };
}

export default useCategories;
