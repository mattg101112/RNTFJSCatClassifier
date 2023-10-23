const mobilenet = require('@tensorflow-models/mobilenet')

export const classifyImage = async (img) => {
  const model = await mobilenet.load()

  try {
    const predictions = await model.classify(img.uri)
      if(predictions){
        console.log('Predictions: ')
        console.log(predictions)
      }
    } catch (err) {
      console.error('Error', err.message)
    }

    return predictions
}
