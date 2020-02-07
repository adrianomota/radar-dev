import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Aside, InputBlock, InputGroup } from './styles';
import { addDevRequest } from '../../store/modules/dev/actions';

export default function Side() {
  const [loading, setLoading] = useState(false);
  const [github_username, setGitHubUserName] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    dispatch(addDevRequest({ github_username, techs, latitude, longitude }));

    setLoading(false);
  }
  return (
    <Aside>
      <strong>Cadastrar</strong>
      <form onSubmit={handleSubmit}>
        <InputBlock>
          <label htmlFor="github_username">Usuário Github</label>
          <input
            type="text"
            value={github_username}
            onChange={e => setGitHubUserName(e.target.value)}
            name="github_username"
            id="github_username"
            required
          />
        </InputBlock>
        <InputBlock>
          <label htmlFor="techs">Tecnologias</label>
          <input
            type="text"
            name="techs"
            id="techs"
            value={techs}
            onChange={e => setTechs(e.target.value)}
            required
          />
        </InputBlock>
        <InputGroup>
          <InputBlock>
            <label htmlFor="latitude">Latitude</label>
            <input
              type="number"
              name="latitude"
              id="latitude"
              onChange={e => setLatitude(e.target.value)}
              value={latitude}
              required
            />
          </InputBlock>
          <InputBlock>
            <label htmlFor="longitude">Longitude</label>
            <input
              type="number"
              name="longitude"
              id="longitude"
              onChange={e => setLongitude(e.target.value)}
              value={longitude}
              required
            />
          </InputBlock>
        </InputGroup>
        <button disabled={loading} type="submit">
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </Aside>
  );
}
