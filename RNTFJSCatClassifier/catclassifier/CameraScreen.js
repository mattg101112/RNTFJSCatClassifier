import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync();
      navigation.navigate('ImageScreen', { photo });
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={(ref) => setCamera(ref)}
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
      />
      <Button title="Take Picture" onPress={takePicture} />
    </View>
  );
};

export default CameraScreen;