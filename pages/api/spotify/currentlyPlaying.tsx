import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const SPOTIFY_API_URL = "https://api.spotify.com/v1";
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;

const getAccessToken = async () => {
  return axios.post("https://accounts.spotify.com/api/token", {
    grant_type: "client_credentials",
    client_id: SPOTIFY_CLIENT_ID,
    client_secret: SPOTIFY_CLIENT_SECRET,
  });
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  axios
    .get(SPOTIFY_API_URL + "/me/player/currently-playing", {
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
