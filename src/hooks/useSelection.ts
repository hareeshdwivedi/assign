import { useState } from 'react';

// Custom hook for selection logic
export function useSelection<T>(items: T[], key: keyof T) {
  const [selectedItems, setSelectedItems] = useState<Set<T[keyof T]>>(new Set());

  const isSelected = (item: T) => selectedItems.has(item[key]);

  const toggleSelection = (item: T) => {
    setSelectedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(item[key])) {
        newSet.delete(item[key]);
      } else {
        newSet.add(item[key]);
      }
      return newSet;
    });
  };

  const toggleAll = () => {
    if (selectedItems.size === items.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(items.map((item) => item[key])));
    }
  };

  return {
    selectedItems,
    isSelected,
    toggleSelection,
    toggleAll,
  };
}
