//global.fetch = require('node-fetch');
import React, { useState, useEffect } from 'react';
import { View, Image, Button } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as ImagePicker from 'expo-image-picker';

const ImageScreen = ({ route }) => {
  const { photo } = route.params;
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    // Load the model when the component mounts.
    loadModel();
  }, []);

  const loadModel = async () => {
    try {
      await tf.ready();
      const mobilenetModel = await mobilenet.load();
      setModel(mobilenetModel);
    } catch (error) {
      console.error('Error loading the model:', error);
    }
  };

  const classifyImage = async () => {
    if (model) {
      const imageUri = photo.uri;
      const imageElement = document.createElement('img');
      imageElement.src = imageUri;

      const predictions = await model.classify(imageElement);
      setPredictions(predictions);
    }
  };

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled) {
      route.params.photo = result;
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={{ uri: photo.uri }} style={{ width: 300, height: 400 }} />
      <Button title="Classify Image" onPress={classifyImage} />
      <Button title="Select Another Image" onPress={selectImage} />
      {predictions.length > 0 && (
        <View>
          <Text>Predictions:</Text>
          {predictions.map((prediction, index) => (
            <Text key={index}>{`${prediction.className}: ${prediction.probability.toFixed(2)}`}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default ImageScreen;
/*import React from 'react';
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
*/