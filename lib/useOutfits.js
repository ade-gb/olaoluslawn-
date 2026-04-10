"use client";

import { useEffect, useState } from "react";
import { outfits as fallbackOutfits } from "./data";

export const useOutfits = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const load = async () => {
      try {
        const response = await fetch("/api/outfits", {
          signal: controller.signal,
          cache: "no-store"
        });
        if (!response.ok) {
          throw new Error("Failed to load outfits");
        }
        const data = await response.json();
        const nextItems = Array.isArray(data?.items) && data.items.length ? data.items : fallbackOutfits;
        if (isMounted) setItems(nextItems);
      } catch (err) {
        if (isMounted) {
          setItems(fallbackOutfits);
          setError("Live feed unavailable. Showing cached looks.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    load();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return { items, loading, error };
};
