import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../database';
import { Entry as IEntry } from '../../../../interfaces';
import { Entry } from '../../../../models';

type Data =
  | {
      message: string;
    }
  | IEntry;
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query as { id: string };

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'El id no es valido' });
  }

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res);
    case 'GET':
      return getEntry(req, res);
    default:
      return res.status(400).json({ message: 'Metodo no existe' });
  }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query as { id: string };
  await db.connect();
  const entry = await Entry.findById(id);
  if (!entry) {
    await db.disconnect();
    return res
      .status(400)
      .json({ message: `No hay entrada con este id ${id}` });
  }

  await db.disconnect();
  return res.status(200).json(entry!);
};

const updateEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query as { id: string };
  await db.connect();
  const entryToUpdate = await Entry.findById(id);
  if (!entryToUpdate) {
    await db.disconnect();
    return res
      .status(400)
      .json({ message: `No hay entrada con este id ${id}` });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body as { description: string; status: string };

  try {
    const updateEntry = await Entry.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { runValidators: true, new: true }
    );

    await db.disconnect();
    return res.status(200).json(updateEntry!);
  } catch (error) {
    await db.disconnect();
    return res.status(400).json({ message: 'Bad request' }!);
  }
};
