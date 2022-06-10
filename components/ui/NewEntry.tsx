import { Box, Button, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { ChangeEvent, useEffect, useState } from 'react';
import { useEntriesContext, useUIContext } from '../../hooks';

export const NewEntry = () => {
  const { addNewEntry } = useEntriesContext();
  const { setIsAddingEntry, isAddingEntry: isAdding } = useUIContext();
  // const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setinputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setinputValue(event.target.value);
    setTouched(true);
  };

  useEffect(() => {
    console.log(isAdding);
  }, [isAdding]);

  const cancel = () => {
    // setIsAdding(false);
    setIsAddingEntry(false);
    setTouched(false);
    setinputValue('');
  };

  const onSave = () => {
    addNewEntry(inputValue);
    cancel();
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder='Nueva entrada'
            multiline
            label='Nueva entrada'
            helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={onTextFieldChanged}
          />
          <Box display='flex' justifyContent='space-between'>
            <Button variant='text' onClick={cancel}>
              Cancelar
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              endIcon={<SaveIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddIcon />}
          fullWidth
          variant='outlined'
          onClick={() => {
            setIsAddingEntry(true);
          }}
        >
          Agregar Tarea
        </Button>
      )}
    </Box>
  );
};
