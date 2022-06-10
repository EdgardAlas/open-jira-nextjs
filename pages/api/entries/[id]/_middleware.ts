import mongoose from 'mongoose';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { id } = req.page.params as { id: string };

  const checkMongoIDRegExp = new RegExp('^[0-9a-fA-F]{24}$');

  if (!checkMongoIDRegExp.test(id)) {
    return new Response(
      JSON.stringify({ message: `El id no es valido ${id}` }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
  NextResponse.next();
}
