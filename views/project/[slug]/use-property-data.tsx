"use client";

import React, { createContext, useContext } from "react";
import type { ProjectDocument } from "@/lib/sanity.types";

interface PropertyDataContextType {
  property: ProjectDocument;
}

const PropertyDataContext = createContext<PropertyDataContextType | undefined>(
  undefined
);

interface PropertyDataProviderProps {
  property: ProjectDocument;
  children: React.ReactNode;
}

export function PropertyDataProvider({
  property,
  children,
}: PropertyDataProviderProps) {
  return (
    <PropertyDataContext.Provider value={{ property }}>
      {children}
    </PropertyDataContext.Provider>
  );
}

export function usePropertyData(): PropertyDataContextType {
  const context = useContext(PropertyDataContext);
  if (context === undefined) {
    throw new Error(
      "usePropertyData must be used within a PropertyDataProvider"
    );
  }
  return context;
}
