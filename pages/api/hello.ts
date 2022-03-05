// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

interface HelloResponse {
  message: string;
  ok: boolean;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<HelloResponse>) {
  res.status(200).json({message: 'Hola Gustavo', ok: true});
};
