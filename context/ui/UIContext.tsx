import { createContext } from 'react';
import { UIState } from './UIProvider';

export interface ContextProps extends UIState {
  openSideMenu: () => void;
  closeSidebar: () => void;
}

export const UIContext = createContext({} as ContextProps);
