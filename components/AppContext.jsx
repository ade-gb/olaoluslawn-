"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { outfits } from "../lib/data";

const AppContext = createContext(null);
const STORAGE_KEY = "virtual-thread-state-v1";

export const AppProvider = ({ children }) => {
  const [category, setCategory] = useState("Streetwear");
  const [selectedId, setSelectedId] = useState(outfits[0].id);
  const [avatarReady, setAvatarReady] = useState(false);
  const [savedLook, setSavedLook] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.category) setCategory(parsed.category);
        if (parsed?.selectedId) setSelectedId(parsed.selectedId);
        if (typeof parsed?.avatarReady === "boolean") setAvatarReady(parsed.avatarReady);
        if (typeof parsed?.savedLook === "boolean") setSavedLook(parsed.savedLook);
      }
    } catch (error) {
      console.error("Failed to hydrate state", error);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const payload = { category, selectedId, avatarReady, savedLook };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (error) {
      console.error("Failed to persist state", error);
    }
  }, [category, selectedId, avatarReady, savedLook, hydrated]);

  const value = {
    category,
    setCategory,
    selectedId,
    setSelectedId,
    avatarReady,
    setAvatarReady,
    savedLook,
    setSavedLook,
    hydrated
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState must be used within AppProvider");
  }
  return context;
};
