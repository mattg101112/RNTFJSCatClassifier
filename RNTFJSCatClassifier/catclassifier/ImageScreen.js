import React, {useEffect, useRef} from 'react';
import { View, Image } from 'react-native';
import { classifyImage } from './src/components/ImageClassifier';

const ImageScreen = ({ route }) => {
  const { photo } = route.params;
  const mounted = useRef(false)

  classifyImage(photo)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image id="img" source={{ uri: photo.uri }} style={{ width: 300, height: 400 }} />
    </View>
  );
};

export default ImageScreen;
