"use client";

import { createContext, useContext, useEffect } from "react";
import useImagePreloader from "@/app/hooks/useImagePreloader";
import imageUrls from "@/app/data/imageUrls";
import LoadingScreen from "@/components/LoadingScreen";

interface LoadingContextType {
  isLoading: boolean;
  loadingProgress: number;
  isTransitioning: boolean;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  loadingProgress: 0,
  isTransitioning: false,
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const { isLoading, loadingProgress, isTransitioning } =
    useImagePreloader(imageUrls);

  useEffect(() => {
    const hasLoaded = localStorage.getItem("initialLoadComplete");

    if (hasLoaded) {
      return;
    }

    const timer = setTimeout(() => {
      localStorage.setItem("initialLoadComplete", "true");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <LoadingScreen
        progress={loadingProgress}
        isTransitioning={isTransitioning}
      />
    );
  }

  return (
    <LoadingContext.Provider
      value={{ isLoading, loadingProgress, isTransitioning }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext);
