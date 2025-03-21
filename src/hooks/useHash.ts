import { useEffect, useState } from "react";

export const useHash = () => {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const listener = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", listener);

    return () => { window.removeEventListener("hashchange", listener) };
  }, [hash]);

  return hash;
};
