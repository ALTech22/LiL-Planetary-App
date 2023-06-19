import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, Modal, Pressable, ScrollView, ImageBackground } from 'react-native';
import { IpModal, ipModal } from './components/ipModal';
import { ConstellationButton } from './components/constellationbtn';
import { Header } from './components/header';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { ConstellationModal } from './components/constellationmodal';
import { Audio } from 'expo-av';

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [ip, setIp] = useState('192.168.4.1');
  const [ipModalVisible, setIpModalVisible] = useState(false);

  const [ariesModal, setAriesModal] = useState(false);
  const [touroModal, setTouroModal] = useState(false);
  const [gemeosModal, setGemeosModal] = useState(false);
  const [cancerModal, setCancerModal] = useState(false);
  const [leaoModal, setLeaoModal] = useState(false);
  const [virgemModal, setVirgemModal] = useState(false);
  const [libraModal, setLibraModal] = useState(false);
  const [escorpiaoModal, setEscorpiaoModal] = useState(false);
  const [sagitarioModal, setSagitarioModal] = useState(false);
  const [capricornioModal, setCapricornioModal] = useState(false);
  const [aquarioModal, setAquarioModal] = useState(false);
  const [peixesModal, setPeixesModal] = useState(false);
  const [sound, setSound] = useState();

  const [fontsLoaded] = useFonts({
    CrazyWish: require('./assets/fonts/CrazyWish.otf'),
    'Night-Rain': require('./assets/fonts/NightRain.ttf')
  })

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('./assets/sounds/HighNoon-TrackTribe.mp3'));

    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      if(!sound) playSound();
    }
    
  }, [fontsLoaded]);

  

  if (!fontsLoaded) return null

  function openIpModal() {
    setIpModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/splash.png')} resizeMode="cover">

        <IpModal
          ip={ip}
          modalVisible={ipModalVisible}
          setIp={setIp}
          setModalVisible={setIpModalVisible}
        />
        <ConstellationModal img={require('./assets/constellations/Aries.png')} setModalVisible={setAriesModal} modalVisible={ariesModal} title="Aries" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Ut tristique et egestas quis ipsum suspendisse. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Aliquam nulla facilisi cras fermentum odio eu feugiat. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Id diam maecenas ultricies mi eget mauris pharetra. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Cursus turpis massa tincidunt dui ut ornare lectus sit. Neque egestas congue quisque egestas diam. Eget sit amet tellus cras adipiscing enim. Elit pellentesque habitant morbi tristique senectus et netus et. Amet est placerat in egestas erat imperdiet sed euismod. Arcu cursus euismod quis viverra." />
        <ConstellationModal img={require('./assets/constellations/Touro.jpg')} setModalVisible={setTouroModal} modalVisible={touroModal} title="Touro" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Ut tristique et egestas quis ipsum suspendisse. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Aliquam nulla facilisi cras fermentum odio eu feugiat. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Id diam maecenas ultricies mi eget mauris pharetra. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Cursus turpis massa tincidunt dui ut ornare lectus sit. Neque egestas congue quisque egestas diam. Eget sit amet tellus cras adipiscing enim. Elit pellentesque habitant morbi tristique senectus et netus et. Amet est placerat in egestas erat imperdiet sed euismod. Arcu cursus euismod quis viverra." />
        <ConstellationModal img={require('./assets/constellations/Gemeos.jpg')} setModalVisible={setGemeosModal} modalVisible={gemeosModal} title="Gemeos" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Ut tristique et egestas quis ipsum suspendisse. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Aliquam nulla facilisi cras fermentum odio eu feugiat. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Id diam maecenas ultricies mi eget mauris pharetra. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Cursus turpis massa tincidunt dui ut ornare lectus sit. Neque egestas congue quisque egestas diam. Eget sit amet tellus cras adipiscing enim. Elit pellentesque habitant morbi tristique senectus et netus et. Amet est placerat in egestas erat imperdiet sed euismod. Arcu cursus euismod quis viverra." />
        <ConstellationModal img={require('./assets/constellations/Cancer.jpg')} setModalVisible={setCancerModal} modalVisible={cancerModal} title="Cancer" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Ut tristique et egestas quis ipsum suspendisse. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Aliquam nulla facilisi cras fermentum odio eu feugiat. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Id diam maecenas ultricies mi eget mauris pharetra. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Cursus turpis massa tincidunt dui ut ornare lectus sit. Neque egestas congue quisque egestas diam. Eget sit amet tellus cras adipiscing enim. Elit pellentesque habitant morbi tristique senectus et netus et. Amet est placerat in egestas erat imperdiet sed euismod. Arcu cursus euismod quis viverra." />
        <ConstellationModal img={require('./assets/constellations/Leao.jpg')} setModalVisible={setLeaoModal} modalVisible={leaoModal} title="Leao" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Ut tristique et egestas quis ipsum suspendisse. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Aliquam nulla facilisi cras fermentum odio eu feugiat. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Id diam maecenas ultricies mi eget mauris pharetra. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Cursus turpis massa tincidunt dui ut ornare lectus sit. Neque egestas congue quisque egestas diam. Eget sit amet tellus cras adipiscing enim. Elit pellentesque habitant morbi tristique senectus et netus et. Amet est placerat in egestas erat imperdiet sed euismod. Arcu cursus euismod quis viverra." />
        <ConstellationModal img={require('./assets/constellations/Virgem.jpg')} setModalVisible={setVirgemModal} modalVisible={virgemModal} title="Virgem" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Ut tristique et egestas quis ipsum suspendisse. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Aliquam nulla facilisi cras fermentum odio eu feugiat. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Id diam maecenas ultricies mi eget mauris pharetra. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Cursus turpis massa tincidunt dui ut ornare lectus sit. Neque egestas congue quisque egestas diam. Eget sit amet tellus cras adipiscing enim. Elit pellentesque habitant morbi tristique senectus et netus et. Amet est placerat in egestas erat imperdiet sed euismod. Arcu cursus euismod quis viverra." />
        <ConstellationModal img={require('./assets/constellations/Libra.jpg')} setModalVisible={setLibraModal} modalVisible={libraModal} title="Libra" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Ut tristique et egestas quis ipsum suspendisse. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Aliquam nulla facilisi cras fermentum odio eu feugiat. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Id diam maecenas ultricies mi eget mauris pharetra. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Cursus turpis massa tincidunt dui ut ornare lectus sit. Neque egestas congue quisque egestas diam. Eget sit amet tellus cras adipiscing enim. Elit pellentesque habitant morbi tristique senectus et netus et. Amet est placerat in egestas erat imperdiet sed euismod. Arcu cursus euismod quis viverra." />
        <ConstellationModal img={require('./assets/constellations/Escorpiao.jpg')} setModalVisible={setEscorpiaoModal} modalVisible={escorpiaoModal} title="Escorpiao" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Ut tristique et egestas quis ipsum suspendisse. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Aliquam nulla facilisi cras fermentum odio eu feugiat. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Id diam maecenas ultricies mi eget mauris pharetra. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Cursus turpis massa tincidunt dui ut ornare lectus sit. Neque egestas congue quisque egestas diam. Eget sit amet tellus cras adipiscing enim. Elit pellentesque habitant morbi tristique senectus et netus et. Amet est placerat in egestas erat imperdiet sed euismod. Arcu cursus euismod quis viverra." />
        <ConstellationModal img={require('./assets/constellations/Sagitario.jpg')} setModalVisible={setSagitarioModal} modalVisible={sagitarioModal} title="Sagitario" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Ut tristique et egestas quis ipsum suspendisse. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Aliquam nulla facilisi cras fermentum odio eu feugiat. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Id diam maecenas ultricies mi eget mauris pharetra. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Cursus turpis massa tincidunt dui ut ornare lectus sit. Neque egestas congue quisque egestas diam. Eget sit amet tellus cras adipiscing enim. Elit pellentesque habitant morbi tristique senectus et netus et. Amet est placerat in egestas erat imperdiet sed euismod. Arcu cursus euismod quis viverra." />
        <ConstellationModal img={require('./assets/constellations/Capricorn.jpg')} setModalVisible={setCapricornioModal} modalVisible={capricornioModal} title="Capricornio" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Ut tristique et egestas quis ipsum suspendisse. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Aliquam nulla facilisi cras fermentum odio eu feugiat. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Id diam maecenas ultricies mi eget mauris pharetra. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Cursus turpis massa tincidunt dui ut ornare lectus sit. Neque egestas congue quisque egestas diam. Eget sit amet tellus cras adipiscing enim. Elit pellentesque habitant morbi tristique senectus et netus et. Amet est placerat in egestas erat imperdiet sed euismod. Arcu cursus euismod quis viverra." />
        <ConstellationModal img={require('./assets/constellations/Aquario.jpg')} setModalVisible={setAquarioModal} modalVisible={aquarioModal} title="Aquario" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Ut tristique et egestas quis ipsum suspendisse. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Aliquam nulla facilisi cras fermentum odio eu feugiat. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Id diam maecenas ultricies mi eget mauris pharetra. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Cursus turpis massa tincidunt dui ut ornare lectus sit. Neque egestas congue quisque egestas diam. Eget sit amet tellus cras adipiscing enim. Elit pellentesque habitant morbi tristique senectus et netus et. Amet est placerat in egestas erat imperdiet sed euismod. Arcu cursus euismod quis viverra." />
        <ConstellationModal img={require('./assets/constellations/Peixes.jpg')} setModalVisible={setPeixesModal} modalVisible={peixesModal} title="Peixes" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Ut tristique et egestas quis ipsum suspendisse. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Aliquam nulla facilisi cras fermentum odio eu feugiat. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Id diam maecenas ultricies mi eget mauris pharetra. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Cursus turpis massa tincidunt dui ut ornare lectus sit. Neque egestas congue quisque egestas diam. Eget sit amet tellus cras adipiscing enim. Elit pellentesque habitant morbi tristique senectus et netus et. Amet est placerat in egestas erat imperdiet sed euismod. Arcu cursus euismod quis viverra." />


        <TouchableHighlight
          onLongPress={openIpModal}
          underlayColor="black"
        >
          <ScrollView>
            <Header title="Micro Planetário" subtitle="Lil Planetary" styles={styles.header} />
            <View style={styles.constellations}>
              <ConstellationButton img={require('./assets/signs/aries.jpg')} statusId={0} ip={ip}
                onPress={() => {
                  setAriesModal(true);
                  sound.unloadAsync();
                  playSound();
                }}
              />

              <ConstellationButton img={require('./assets/signs/touro.jpg')} statusId={1} ip={ip}
                onPress={() => {
                  setTouroModal(true);
                  sound.unloadAsync();
                }}
              />

              <ConstellationButton img={require('./assets/signs/gemeos.jpg')} statusId={2} ip={ip}
                onPress={() => {
                  setGemeosModal(true);
                  sound.unloadAsync();
                }}
              />

              <ConstellationButton img={require('./assets/signs/cancer.jpg')} statusId={3} ip={ip}
                onPress={() => {
                  setCancerModal(true);
                  sound.unloadAsync();
                }}
              />

              <ConstellationButton img={require('./assets/signs/leao.jpg')} statusId={4} ip={ip}
                onPress={() => {
                  setLeaoModal(true);
                  sound.unloadAsync();
                }}
              />

              <ConstellationButton img={require('./assets/signs/virgem.jpg')} statusId={5} ip={ip}
                onPress={() => {
                  setVirgemModal(true);
                  sound.unloadAsync();
                }}
              />

              <ConstellationButton img={require('./assets/signs/libra.jpg')} statusId={6} ip={ip}
                onPress={() => {
                  setLibraModal(true);
                  sound.unloadAsync();
                }}
              />

              <ConstellationButton img={require('./assets/signs/escorpiao.jpg')} statusId={7} ip={ip}
                onPress={() => {
                  setEscorpiaoModal(true);
                  sound.unloadAsync();
                }}
              />

              <ConstellationButton img={require('./assets/signs/sagitario.jpg')} statusId={8} ip={ip}
                onPress={() => {
                  setSagitarioModal(true);
                  sound.unloadAsync();
                }}
              />

              <ConstellationButton img={require('./assets/signs/capricornio.jpg')} statusId={9} ip={ip}
                onPress={() => {
                  setCapricornioModal(true);
                  sound.unloadAsync();
                }}
              />

              <ConstellationButton img={require('./assets/signs/aquario.jpg')} statusId={10} ip={ip}
                onPress={() => {
                  setAquarioModal(true);
                  sound.unloadAsync();
                }}
              />

              <ConstellationButton img={require('./assets/signs/peixes.jpg')} statusId={11} ip={ip}
                onPress={() => {
                  setPeixesModal(true);
                  sound.unloadAsync();
                }}
              />

            </View>
          </ScrollView>
        </TouchableHighlight>

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  constellations: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  header: {
    paddingTop: 25,
    paddingBottom: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
