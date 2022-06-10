import { UIState } from './';

const initialState: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

type UIActions =
  | { type: 'UI - Open Sidebar' }
  | { type: 'UI - Close Sidebar' }
  | { type: 'UI - set isAddingEntry'; payload: boolean }
  | { type: 'UI - Start Dragging' }
  | { type: 'UI - End Dragging' };

export const UIReducer = (
  state: UIState = initialState,
  action: UIActions
): UIState => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        sidemenuOpen: true,
      };
    case 'UI - Close Sidebar':
      return {
        ...state,
        sidemenuOpen: false,
      };
    case 'UI - set isAddingEntry':
      return {
        ...state,
        isAddingEntry: action.payload,
      };
    case 'UI - Start Dragging':
      return {
        ...state,
        isDragging: true,
      };

    case 'UI - End Dragging':
      return {
        ...state,
        isDragging: false,
      };

    default:
      return state;
  }
};
