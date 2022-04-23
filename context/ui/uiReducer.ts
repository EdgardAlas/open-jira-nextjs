import { UIState } from './';

const initialState: UIState = {
  sidemenuOpen: false,
};

type UIActions = { type: 'UI - Open Sidebar' } | { type: 'UI - Close Sidebar' };

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
    default:
      return state;
  }
};
