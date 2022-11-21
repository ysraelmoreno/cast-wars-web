import { useEffect, useState } from "react";
import apiRoutes from "../api/api";
import wordpressAPIFactory from "../api/wordpress";

function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const { getCategories } = wordpressAPIFactory();

      const categoriesList = await getCategories();

      setCategories(categoriesList.data);
    })();
  }, []);

  return { categories };
}

export default useCategories;
