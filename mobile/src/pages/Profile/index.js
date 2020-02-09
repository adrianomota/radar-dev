import React from "react";
import { DevGithub } from "./styles";

export default function Profile({ navigation }) {
  const github_username = navigation.getParam("github_username");
  return (
    <DevGithub source={{ uri: `https://github.com/${github_username}` }} />
  );
}
