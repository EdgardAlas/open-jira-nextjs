import { List, Paper } from '@mui/material';
import { DragEvent, useMemo } from 'react';
import { useEntriesContext, useUIContext } from '../../hooks';
import { Entry, EntryStatus } from '../../interfaces';
import { EntryCard } from './EntryCard';
import styles from './EntryList.module.css';

interface Props {
  status: EntryStatus;
}

export const EntryList = ({ status }: Props) => {
  const { entries, updateEntry } = useEntriesContext();
  const { isDragging, endDragging } = useUIContext();

  const entriesByStatus = useMemo(
    (): Entry[] => entries.filter((entry) => entry.status === status),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entries]
  );

  console.log(entriesByStatus);

  const allowDrop = (event: DragEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    const entry = entries.find((e) => e._id === id)!;
    entry.status = status;
    updateEntry(entry);
    endDragging();
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
    >
      <Paper
        sx={{
          height: 'calc(100vh - 250px)',
          overflow: 'scroll',
          backgroundColor: 'transparent',
          '&::-webkit-scrollbar': { display: 'none' },
          paddingX: '0.7rem',
        }}
      >
        <List
          sx={{ opacity: isDragging ? 0.5 : 1, transition: 'opacity .3s ease' }}
        >
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
