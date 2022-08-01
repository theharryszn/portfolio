import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import {
  getAccessToken,
  SPOTIFY_API_URL,
} from "../../../helpers/spotifyHelpers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return new Promise((resolve) => {
    getAccessToken()
      .then(async (response) => {
        const accessToken = response["access_token"];
        const resp = await fetch(SPOTIFY_API_URL + "/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        return await resp.json();
      })
      .then((resp) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Cache-Control", "max-age=180000");
        res.end(JSON.stringify(resp));
        resolve(null);
      })
      .catch((error) => {
        res.json(error);
        res.status(405).end();
        resolve(null); // in case something goes wrong in the catch block (as vijay commented)
      });
  });
}
