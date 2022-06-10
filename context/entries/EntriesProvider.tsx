import { useSnackbar } from 'notistack';
import { useEffect, useReducer } from 'react';
import { v4 } from 'uuid';
import { entriesAPi } from '../../apis';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

interface Props {
  children: React.ReactNode;
}

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);
  const { enqueueSnackbar } = useSnackbar();
  const refreshEntries = async () => {
    const resp = await entriesAPi.get<Entry[]>('/entries');
    dispatch({ type: '[Entry] Refresh-data', payload: resp.data });
    console.log(resp.data);
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  const addNewEntry = async (description: string) => {
    const { data } = await entriesAPi.post<Entry>('/entries', { description });

    dispatch({
      type: '[Entry] - Add-Entry',
      payload: data,
    });
  };

  const updateEntry = async (
    { _id, description, status }: Entry,
    showSnackbar = false
  ) => {
    try {
      const { data } = await entriesAPi.put<Entry>(`/entries/${_id}`, {
        description: description,
        status: status,
      });
      dispatch({ type: '[Entry] Entry-updated', payload: data });
      showSnackbar &&
        enqueueSnackbar('Entrada actualizada', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
