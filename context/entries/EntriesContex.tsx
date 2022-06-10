import { createContext } from 'react';
import { Entry } from '../../interfaces';
import { EntriesState } from './EntriesProvider';

export interface ContextProps extends EntriesState {
  addNewEntry: (description: string) => void;
  updateEntry: (entry: Entry, showSnackbar?: boolean) => void;
}

export const EntriesContext = createContext({} as ContextProps);
