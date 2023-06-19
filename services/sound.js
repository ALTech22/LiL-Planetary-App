async function playSound(sound) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('./assets/Hello.mp3'));
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }