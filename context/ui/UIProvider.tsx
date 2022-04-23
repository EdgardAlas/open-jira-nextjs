import { useReducer } from 'react';
import { UIContext, UIReducer } from './';

interface Props {
  children: React.ReactNode;
}

export interface UIState {
  sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
};

const UIProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' });
  };

  const closeSidebar = () => {
    dispatch({ type: 'UI - Close Sidebar' });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSidebar,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
