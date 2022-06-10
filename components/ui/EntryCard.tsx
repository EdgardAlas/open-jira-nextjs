import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { DragEvent } from 'react';
import { useUIContext } from '../../hooks';
import { Entry } from '../../interfaces';
import { dateFunctions } from '../../utils';

interface Props {
  entry: Entry;
}

export const EntryCard = ({ entry }: Props) => {
  const { startDragging, endDragging } = useUIContext();
  const router = useRouter();
  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', entry._id);
    startDragging();
  };

  const onDtagEnd = (event: DragEvent<HTMLDivElement>) => {
    endDragging();
  };

  const onClick = () => {
    router.push(`/entries/${entry._id}`);
  };

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDtagEnd}
      onClick={onClick}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            {entry.description}
          </Typography>
          <CardActions
            sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}
          >
            <Typography variant='body2'>
              {dateFunctions.getFormatDistanceToNow(entry.createdAt)}
            </Typography>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
