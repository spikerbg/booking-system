import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - MedRent`;
  }, [title]);
  return null;
};

export default useTitle;
