import axios from 'axios';

import Dev from '../models/Dev';
import { findConnections, sendMessage } from '../../websocket';
import { parseStringAsArray } from '../../utils/parseStringAsArray';

class DevContrller {
  async index(req, res) {
    const devs = await Dev.find({});

    return res.json(devs);
  }

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    const devExists = await Dev.findOne({ github_username });

    if (devExists) {
      return res.json({ error: 'Dev already exists' });
    }

    const response = await axios.get(
      `https://api.github.com/users/${github_username}`
    );

    const { name = login, avatar_url, bio } = response.data;

    const techList = parseStringAsArray(techs);

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    const newDev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techList,
      location,
    });

    const sendSocketMessageTo = findConnections(
      {
        latitude,
        longitude,
      },
      techList
    );

    sendMessage(sendSocketMessageTo, 'new-dev', newDev);

    return res.json(newDev);
  }
}

export default new DevContrller();
