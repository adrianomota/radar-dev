import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MainCard, Dev, DevItem, Avatar, UserInfo } from './styles';
import api from '../../services/api';
import { listDevRequest } from '../../store/modules/dev/actions';

export default function Main() {
  const [devs, setDevs] = useState([]);
  const newDevs = useSelector(state => state.dev);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, [newDevs]);

  useEffect(() => {
    dispatch(listDevRequest());
  }, [dispatch]);
  return (
    <MainCard>
      <Dev>
        {devs.map(dev => (
          <DevItem key={dev._id}>
            <header>
              <Avatar src={dev.avatar_url} alt={dev.name} />
              <UserInfo>
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
              </UserInfo>
            </header>

            <p>{dev.bio}</p>
            <a
              href={`https://github.com/${dev.github_username}`}
              alt={dev.name}
            >
              Acessar perfil do Github
            </a>
          </DevItem>
        ))}
      </Dev>
    </MainCard>
  );
}
