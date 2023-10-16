import React from 'react';
import { View, Image } from 'react-native';

const ImageScreen = ({ route }) => {
  const { photo } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={{ uri: photo.uri }} style={{ width: 300, height: 400 }} />
    </View>
  );
};

export default ImageScreen;
