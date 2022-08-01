import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send(process.env.SPOTIFY_CLIENT_ID);
}
