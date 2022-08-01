import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const SPOTIFY_API_URL = "https://api.spotify.com/v1";
const SPOTIFY_OAUTH_TOKEN = process.env.SPOTIFY_OAUTH_TOKEN!;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  axios
    .get(SPOTIFY_API_URL + "/me/player/recently-played", {
      headers: {
        Authorization: `Bearer ${SPOTIFY_OAUTH_TOKEN}`,
        Accept: "application/json",
      },
    })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}
