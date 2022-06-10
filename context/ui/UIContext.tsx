import { createContext } from 'react';
import { UIState } from './UIProvider';

export interface ContextProps extends UIState {
  openSideMenu: () => void;
  closeSidebar: () => void;
  setIsAddingEntry: (isAddingEntry: boolean) => void;
  startDragging: () => void;
  endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
