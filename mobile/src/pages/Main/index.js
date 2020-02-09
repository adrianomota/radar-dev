import React, { useState, useEffect } from "react";
import { Marker, Callout } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";

import {
  socketConnect,
  socketDisconnect,
  subscribeToNewDevs
} from "../../services/socket";
import api from "../../services/api";

import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";
import {
  MapRadar,
  Avatar,
  Description,
  DevName,
  DevBio,
  DevTechs,
  DevSearchForm,
  DevInput,
  DevButton
} from "./styles";

export default function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [devs, setDevs] = useState([]);
  const [techs, setTechs] = useState("");

  useEffect(() => {
    async function loadInitialPosittion() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        });
      }
    }

    loadInitialPosittion();
  }, []);

  useEffect(() => {
    subscribeToNewDevs(dev => setDevs([...devs, dev]));
  }, [devs]);

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;

    const { data } = await api.get("/searchs", {
      params: {
        latitude,
        longitude,
        techs
      }
    });

    setDevs(data);

    setupWebSocket();
  }

  function setupWebSocket() {
    socketDisconnect();

    const { latitude, longitude } = currentRegion;

    socketConnect(latitude, longitude, techs);
  }

  function handleRegionChange(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }
  return (
    <>
      <MapRadar
        onRegionChangeComplete={handleRegionChange}
        initialRegion={currentRegion}
      >
        {devs.map(dev => (
          <Marker
            key={dev._id}
            coordinate={{
              latitude: dev.location.coordinates[1],
              longitude: dev.location.coordinates[0]
            }}
          >
            <Avatar
              source={{
                uri: dev.avatar_url
              }}
            />

            <Callout
              onPress={() => {
                navigation.navigate("Profile", {
                  github_username: dev.github_username
                });
              }}
            >
              <Description>
                <DevName>{dev.name}</DevName>
                <DevBio>{dev.bio}</DevBio>
                <DevTechs>{dev.techs.join(", ")}</DevTechs>
              </Description>
            </Callout>
          </Marker>
        ))}
      </MapRadar>

      <DevSearchForm>
        <DevInput
          placeholder="Buscar Dev por techs..."
          placeholderTextColor="#999"
          autoCorrect={false}
          autoCapitalize="words"
          value={techs}
          onChangeText={setTechs}
        ></DevInput>

        <DevButton onPress={loadDevs}>
          <MaterialIcons
            name="my-location"
            size={20}
            color="#fff"
          ></MaterialIcons>
        </DevButton>
      </DevSearchForm>
    </>
  );
}
