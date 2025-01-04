// Helper function to check if all selected items are available
import { FileData } from '../data/filesData';

export const areAllAvailable = (selectedItems: Set<string>, data: FileData[]): boolean => {
  return [...selectedItems].every((name) =>
    data.some((file) => file.name === name && file.status === 'available')
  );
};
