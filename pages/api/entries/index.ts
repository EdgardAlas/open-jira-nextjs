import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Entry } from '../../../models';
import { IEntry } from '../../../models/Entry';

type Data =
  | {
      msg: string;
    }
  | IEntry[];

export default function entriesHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return getEntries(res);
    case 'POST':
      return postEntry(req, res);
    default:
      return res.status(400).json({ msg: 'Endpoint no existe' });
  }
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect();
  const entries = await Entry.find().sort({ createdAt: 'ascending' });
  res.status(200).json(entries);
  await db.disconnect();
};

const postEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { description } = req.body as { description: string };
  const newEntry = new Entry({
    description,
    createdAt: Date.now(),
    status: 'pending',
  });

  try {
    await db.connect();
    await newEntry.save();
    await db.disconnect();
    return res.status(201).json(newEntry);
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res.status(500).json({ error });
  }
};
