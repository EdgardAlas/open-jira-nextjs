import { useContext } from 'react';
import { UIContext } from '../context/ui';

export const useUIContext = () => {
  return useContext(UIContext);
};
