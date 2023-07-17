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

  async function playSound(soundToPlay) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(soundToPlay);

    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      if(!sound) playSound(require('./assets/sounds/HighNoon-TrackTribe.mp3'));
    }
    
  }, [fontsLoaded]);

  

  if (!fontsLoaded) return null

  function openIpModal() {
    setIpModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.jpg')} resizeMode="cover">

        <IpModal
          ip={ip}
          modalVisible={ipModalVisible}
          setIp={setIp}
          setModalVisible={setIpModalVisible}
        />
        {ariesModal && <ConstellationModal img={require('./assets/constellations/Aries.png')} setModalVisible={setAriesModal} modalVisible={ariesModal} title="Aries" 
        text={`
  O signo de Áries é representado como um carneiro, geralmente associado ao mito do Velo de Ouro da mitologia grega. 
  Na astronomia, a constelação de Áries está localizada no hemisfério celestial norte, entre a Constelação de Peixes e a Constelação de Touro. É uma constelação relativamente pequena, mas de fácil identificação.
  A estrela mais brilhante em Áries é chamada de Hamal, que significa "carneiro" em árabe. Hamal é uma estrela gigante laranja, localizada a uma distância de aproximadamente 66 anos-luz da Terra. É uma estrela notável e uma das principais referências para a constelação de Áries.
  Áries é também uma constelação importante para a astronomia porque marca o ponto onde o Sol cruza a linha celestial equatorial durante o equinócio de primavera no hemisfério norte. Esse evento marca o início da primavera astronômica e o momento em que o dia e a noite têm aproximadamente a mesma duração.

        `} />}
        {touroModal && <ConstellationModal img={require('./assets/constellations/Touro.jpg')} setModalVisible={setTouroModal} modalVisible={touroModal} title="Touro" 
        text={`
  O signo de Touro é representado como um touro poderoso e imponente, geralmente associado ao mito do touro de Creta, da mitologia grega. 
  Na astronomia, a constelação de Touro está localizada no hemisfério celestial norte e é facilmente identificável pelas Plêiades, um aglomerado estelar visível a olho nu.
  A estrela mais brilhante em Touro é chamada de Aldebarã, que significa "o que segue" em árabe. Aldebarã é uma estrela gigante vermelha e é uma das estrelas mais brilhantes visíveis no céu noturno. Ela está localizada a cerca de 65 anos-luz de distância da Terra e é uma referência importante para a constelação de Touro.
  Além das Plêiades, Touro também abriga outra famosa nebulosa chamada Nebulosa do Caranguejo. Essa nebulosa, também conhecida como M1, é o remanescente de uma supernova que ocorreu em 1054 d.C. Ela é visível como uma mancha difusa no céu e é um alvo popular para astrônomos amadores.

        `} />}
        {gemeosModal && <ConstellationModal img={require('./assets/constellations/Gemeos.jpg')} setModalVisible={setGemeosModal} modalVisible={gemeosModal} title="Gemeos" 
        text={`
  O signo de Gêmeos é representado por dois irmãos gêmeos, Castor e Pólux, da mitologia grega. 
  Na astronomia, a constelação de Gêmeos está localizada no hemisfério celestial norte, próxima à linha do equador celeste. Ela é facilmente identificável no céu por suas duas estrelas brilhantes, Castor e Pólux, que representam os dois irmãos.
  Castor e Pólux são estrelas binárias, o que significa que cada uma delas é composta por duas estrelas que orbitam uma em torno da outra. Castor é um sistema estelar mais complexo, composto por pelo menos seis estrelas, enquanto Pólux é um sistema binário simples. Essas estrelas estão localizadas a uma distância de aproximadamente 51 anos-luz da Terra.
  Além disso, Gêmeos abriga uma região conhecida como Nebulosa do Esquimó, ou NGC 2392. Essa nebulosa planetária, localizada a cerca de 5.000 anos-luz da Terra, recebe esse nome devido à sua aparência que se assemelha ao rosto de um esquimó. É um objeto celeste fascinante e frequentemente observado por astrônomos amadores.

        `} />}
        {cancerModal && <ConstellationModal img={require('./assets/constellations/Cancer.jpg')} setModalVisible={setCancerModal} modalVisible={cancerModal} title="Cancer" 
        text={`
  O signo de Câncer é representado como um caranguejo, geralmente associado ao mito de Hércules e o caranguejo enviado pela deusa Hera para derrotar o herói grego. 
  Na astronomia, a constelação de Câncer está localizada no hemisfério celestial norte, próximo ao equador celeste. É uma constelação relativamente pequena e não tão fácil de ser identificada a olho nu.
  A constelação abriga um objeto celeste interessante conhecido como Aglomerado de Câncer, ou M44, também chamado de "Praia de Estrelas". É um aglomerado estelar aberto composto por várias estrelas jovens e brilhantes. O Aglomerado de Câncer pode ser visto com binóculos ou telescópios pequenos e é um alvo popular para observadores amadores do céu.
  Além disso, Câncer é conhecido por ser o ponto no céu onde o Sol atinge seu ponto mais ao norte durante o solstício de verão no hemisfério norte, marcando o início do verão astronômico.

        `} />}
        {leaoModal && <ConstellationModal img={require('./assets/constellations/Leao.jpg')} setModalVisible={setLeaoModal} modalVisible={leaoModal} title="Leao" 
        text={`
  O signo de Leão é representado como um leão majestoso, geralmente associado ao mito do Leão de Nemeia, da mitologia grega, que foi morto pelo herói Hércules como parte de seus famosos doze trabalhos. 
  Na astronomia, a constelação de Leão está localizada no hemisfério celestial norte, próxima à eclíptica, a faixa aparente percorrida pelo Sol durante o ano. É uma constelação facilmente identificável e uma das mais brilhantes do céu.
  A estrela mais brilhante em Leão é chamada de Regulus, que significa "pequeno rei" em latim. Regulus é uma estrela azul-branco e uma das estrelas mais brilhantes do céu noturno. Ela está localizada a cerca de 79 anos-luz de distância da Terra e é uma referência importante para a constelação de Leão.
  Outro objeto astronômico interessante em Leão é o aglomerado de galáxias chamado de Aglomerado de Leão. É um grupo de galáxias localizado a uma distância de cerca de 80 milhões de anos-luz da Terra. O Aglomerado de Leão é conhecido por ser um dos aglomerados de galáxias mais próximos de nós e é um alvo importante para estudos científicos.

        `} />}
        {virgemModal && <ConstellationModal img={require('./assets/constellations/Virgem.jpg')} setModalVisible={setVirgemModal} modalVisible={virgemModal} title="Virgem" 
        text={`
  O signo de Virgem é representada como uma mulher segurando uma espiga de trigo, simbolizando a colheita e a fertilidade. 
  Na astronomia, a constelação de Virgem está localizada no hemisfério celestial sul, próxima à eclíptica, a faixa aparente percorrida pelo Sol durante o ano. É uma constelação relativamente grande e pode ser identificada por sua forma de um Y invertido.
  A constelação abriga um objeto celeste notável chamado de Galáxia de Virgem, ou Messier 87 (M87). A Galáxia de Virgem é uma galáxia elíptica gigante situada a aproximadamente 53 milhões de anos-luz da Terra. Ela é conhecida por ter um buraco negro supermassivo em seu centro e por apresentar jatos de matéria expelidos em velocidades incríveis.
  Além disso, a constelação abriga um objeto celeste notável chamado de Galáxia do Sombrero, ou Messier 104 (M104). A Galáxia do Sombrero é uma galáxia espiral localizada a cerca de 28 milhões de anos-luz da Terra. Ela é caracterizada por seu formato distinto, que se assemelha a um chapéu mexicano, daí o seu nome.

        `} />}
        {libraModal && <ConstellationModal img={require('./assets/constellations/Libra.jpg')} setModalVisible={setLibraModal} modalVisible={libraModal} title="Libra" 
        text={`
  O signo de Libra é representada como uma balança, frequentemente associada à deusa da justiça e do equilíbrio, Têmis, da mitologia grega. 
  Na astronomia, a constelação de Libra está localizada no hemisfério celestial sul, próxima à eclíptica, a faixa aparente percorrida pelo Sol durante o ano. É uma constelação relativamente pequena e pode ser identificada por suas estrelas brilhantes e distintivas.
  a estrela mais expressiva é a Alpha Librae, também conhecida como Zubenelgenubi – “Garra do Sul” em árabe. Essa estrela é dupla, sendo que uma do par também é binária. Está a cerca de 70 anos-luz de nós, tem magnitude 2.7 e pode ser observada de binóculos.
  Libra também possue outra estrela conhecida: Beta Librae ou Zubeneschamali (Garra do Norte), uma anã branco-azulada, que possui magnitude 2.6. Um fato interessante sobre ela é que sua fusão intensa de hidrogênio faz com que nossos olhos a enxerguem através de ilusão de ótica, a tornando “esverdeada”.

        `} />}
        {escorpiaoModal && <ConstellationModal img={require('./assets/constellations/Escorpiao.jpg')} setModalVisible={setEscorpiaoModal} modalVisible={escorpiaoModal} title="Escorpiao" 
        text={`
  O signo de Escorpião é representado como um escorpião, geralmente associado ao mito de Orionte, o caçador, que foi morto por um escorpião gigante enviado pela deusa Artemis. 
  Na astronomia, a constelação de Escorpião está localizada no hemisfério celestial sul e é uma das constelações mais distintivas e reconhecíveis no céu noturno.
  Uma das estrelas mais brilhantes em Escorpião é chamada de Antares, que significa "rival de Marte" em grego, devido à sua cor avermelhada semelhante à do planeta Marte. Antares é uma supergigante vermelha e uma das estrelas mais brilhantes do céu noturno. Está localizada a uma distância de cerca de 600 anos-luz da Terra.
  Além disso, Escorpião é conhecido por abrigar uma região do céu chamada de "fim do Zodíaco", onde o Sol passa durante o solstício de inverno no hemisfério sul. Esse evento marca o início do inverno astronômico e representa o dia mais curto e a noite mais longa do ano.

        `} />}
        {sagitarioModal && <ConstellationModal img={require('./assets/constellations/Sagitario.jpg')} setModalVisible={setSagitarioModal} modalVisible={sagitarioModal} title="Sagitario" 
        text={`
        O signo de Sagitário é representado como um arqueiro, frequentemente associado ao centauro Quíron, da mitologia grega, que era um sábio e habilidoso com o arco. 
        Na astronomia, a constelação de Sagitário está localizada no hemisfério celestial sul, próxima ao centro da Via Láctea. É uma constelação grande e facilmente identificável, com uma forma que se assemelha a uma chaleira ou bule.
        Dentro da constelação de Sagitário, existe uma região conhecida como Centro Galáctico, onde está localizado um objeto extremamente interessante: um buraco negro supermassivo chamado Sagittarius A*. Esse buraco negro está localizado no coração da Via Láctea, a cerca de 26.000 anos-luz da Terra. Sagittarius A* tem uma massa equivalente a cerca de 4 milhões de vezes a massa do nosso Sol e exerce uma forte influência gravitacional na região ao seu redor.
        Além das estrelas, Sagitário abriga um objeto celestial fascinante chamado de Nebulosa da Lagoa. Essa nebulosa é uma nuvem de gás e poeira interestelar onde novas estrelas estão se formando. Ela é visível como uma mancha difusa no céu e é um alvo popular para observação astronômica.
        `} />}
        {capricornioModal && <ConstellationModal img={require('./assets/constellations/Capricorn.jpg')} setModalVisible={setCapricornioModal} modalVisible={capricornioModal} title="Capricornio" 
        text={`
        O signo de Sagitário é representado como um arqueiro, frequentemente associado ao centauro Quíron, da mitologia grega, que era um sábio e habilidoso com o arco. 
        Na astronomia, a constelação de Sagitário está localizada no hemisfério celestial sul, próxima ao centro da Via Láctea. É uma constelação grande e facilmente identificável, com uma forma que se assemelha a uma chaleira ou bule.
        Dentro da constelação de Sagitário, existe uma região conhecida como Centro Galáctico, onde está localizado um objeto extremamente interessante: um buraco negro supermassivo chamado Sagittarius A*. Esse buraco negro está localizado no coração da Via Láctea, a cerca de 26.000 anos-luz da Terra. Sagittarius A* tem uma massa equivalente a cerca de 4 milhões de vezes a massa do nosso Sol e exerce uma forte influência gravitacional na região ao seu redor.
        Além das estrelas, Sagitário abriga um objeto celestial fascinante chamado de Nebulosa da Lagoa. Essa nebulosa é uma nuvem de gás e poeira interestelar onde novas estrelas estão se formando. Ela é visível como uma mancha difusa no céu e é um alvo popular para observação astronômica.

        `} />}
        {aquarioModal && <ConstellationModal img={require('./assets/constellations/Aquario.jpg')} setModalVisible={setAquarioModal} modalVisible={aquarioModal} title="Aquario" 
        text={`
        O signo de Aquário é representado como um portador de água, muitas vezes associado ao jovem Ganímedes da mitologia grega, que servia como copeiro dos deuses no Olimpo.
        Na astronomia, a constelação de Aquário está localizada no hemisfério celestial norte, próxima a outras constelações relacionadas à água, mais Precisamente, entre a Constelação de Capricórnio e a de Peixes. É uma constelação de difícil localização, pois suas estrelas são pouco brilhantes.
        A estrela mais brilhante em Aquário é chamada de Sadalsuud, que significa "Sorte do Sortudo" em árabe. É uma estrela gigante vermelha, localizada a cerca de 610 anos-luz da Terra, sendo um supergigante amarelo com magnitude 2,87, com luminosidade 2.200 vezes mais forte que a do Sol.
        Além disso, a constelação de Aquário é famosa por ser o lar do radiante do meteoro das Delta Aquarídeas, uma chuva de meteoros que ocorre todos os anos em julho e agosto, proporcionando um espetáculo celeste impressionante para os observadores do céu.

        `} />}
        {peixesModal && <ConstellationModal img={require('./assets/constellations/Peixes.jpg')} setModalVisible={setPeixesModal} modalVisible={peixesModal} title="Peixes" 
        text={`
        O signo de Peixes é representado como dois peixes nadando em direções opostas, frequentemente associados a alguns mitos, entre eles, um referente à deusa Afrodite e seu filho, Eros, onde os mesmos se transformaram em peixes e mergulharam no rio Eufrates para fugir de Tifon, deus da seca.
        Na astronomia, a constelação de Peixes está localizada no hemisfério celestial norte, ocupando uma boa parte do nosso céu, e em relação à área, é a 14ª maior constelação das 88 catalogadas.
        Uma das estrelas mais conhecidas em Peixes é chamada de Alrisha, que significa "o nó" em árabe. Alrisha é uma estrela binária, o que significa que é formada por dois corpos celestes que orbitam um em torno do outro. Essa estrela está localizada a uma distância de aproximadamente 139 anos-luz da Terra.        
        Além disso, Peixes é conhecida por ser a constelação que abriga o ponto vernal, o ponto onde o Sol cruza o equador celeste durante o equinócio de primavera no hemisfério norte. Esse evento marca o início do ano astrológico e é considerado um momento significativo tanto na astronomia quanto na astrologia.

        `} />}


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
                  playSound(require('./assets/sounds/Aries.mp3'));
                }}
              />

              <ConstellationButton img={require('./assets/signs/touro.jpg')} statusId={1} ip={ip}
                onPress={() => {
                  setTouroModal(true);
                  sound.unloadAsync();
                  playSound(require('./assets/sounds/Touro.mp3'));
                }}
              />

              <ConstellationButton img={require('./assets/signs/gemeos.jpg')} statusId={2} ip={ip}
                onPress={() => {
                  setGemeosModal(true);
                  sound.unloadAsync();
                  playSound(require('./assets/sounds/Gemeos.mp3'));
                }}
              />

              <ConstellationButton img={require('./assets/signs/cancer.jpg')} statusId={3} ip={ip}
                onPress={() => {
                  setCancerModal(true);
                  sound.unloadAsync();
                  playSound(require('./assets/sounds/Cancer.mp3'));
                }}
              />

              <ConstellationButton img={require('./assets/signs/leao.jpg')} statusId={4} ip={ip}
                onPress={() => {
                  setLeaoModal(true);
                  sound.unloadAsync();
                  playSound(require('./assets/sounds/Leao.mp3'));
                }}
              />

              <ConstellationButton img={require('./assets/signs/virgem.jpg')} statusId={5} ip={ip}
                onPress={() => {
                  setVirgemModal(true);
                  sound.unloadAsync();
                  playSound(require('./assets/sounds/Virgem.mp3'));
                }}
              />

              <ConstellationButton img={require('./assets/signs/libra.jpg')} statusId={6} ip={ip}
                onPress={() => {
                  setLibraModal(true);
                  sound.unloadAsync();
                  playSound(require('./assets/sounds/Libra.mp3'));
                }}
              />

              <ConstellationButton img={require('./assets/signs/escorpiao.jpg')} statusId={7} ip={ip}
                onPress={() => {
                  setEscorpiaoModal(true);
                  sound.unloadAsync();
                  playSound(require('./assets/sounds/Escorpiao.mp3'));
                }}
              />

              <ConstellationButton img={require('./assets/signs/sagitario.jpg')} statusId={8} ip={ip}
                onPress={() => {
                  setSagitarioModal(true);
                  sound.unloadAsync();
                  playSound(require('./assets/sounds/Sagitario.mp3'));
                }}
              />

              <ConstellationButton img={require('./assets/signs/capricornio.jpg')} statusId={9} ip={ip}
                onPress={() => {
                  setCapricornioModal(true);
                  sound.unloadAsync();
                  playSound(require('./assets/sounds/Capricornio.mp3'));
                }}
              />

              <ConstellationButton img={require('./assets/signs/aquario.jpg')} statusId={10} ip={ip}
                onPress={() => {
                  setAquarioModal(true);
                  sound.unloadAsync();
                  playSound(require('./assets/sounds/Aquario.mp3'));
                }}
              />

              <ConstellationButton img={require('./assets/signs/peixes.jpg')} statusId={11} ip={ip}
                onPress={() => {
                  setPeixesModal(true);
                  sound.unloadAsync();
                  playSound(require('./assets/sounds/Peixes.mp3'));
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
