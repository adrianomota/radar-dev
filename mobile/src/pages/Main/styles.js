import styled from "styled-components/native";
import MapView from "react-native-maps";

export const MapRadar = styled(MapView)`
  flex: 1;
`;

export const Avatar = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 4px;
  border-width: 4px;
  border-color: #fff;
`;

export const Description = styled.View`
  width: 260px;
`;

export const DevName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
export const DevBio = styled.Text`
  color: #666;
  margin-top: 5px;
`;
export const DevTechs = styled.Text`
  margin-top: 5px;
`;

export const DevSearchForm = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 5;
  flex-direction: row;
`;

export const DevInput = styled.TextInput`
  flex: 1;
  height: 50px;
  background: #fff;
  color: #333;
  border-radius: 25px;
  padding: 0 20px;
  font-size: 16px;
  box-shadow: 10px 5px 5px #999;
`;

export const DevButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: #8e4dff;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;
