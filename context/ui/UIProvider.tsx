import { useReducer } from 'react';
import { UIContext, UIReducer } from './';

interface Props {
  children: React.ReactNode;
}

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

const UIProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' });
  };

  const closeSidebar = () => {
    dispatch({ type: 'UI - Close Sidebar' });
  };

  const setIsAddingEntry = (isAddingEntry: boolean) => {
    dispatch({ type: 'UI - set isAddingEntry', payload: isAddingEntry });
  };

  const startDragging = () => {
    dispatch({ type: 'UI - Start Dragging' });
  };

  const endDragging = () => {
    dispatch({ type: 'UI - End Dragging' });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSidebar,
        setIsAddingEntry,
        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
