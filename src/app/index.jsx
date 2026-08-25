import { View, Text, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';
import FokusButton from '../../components/FokusButton/FokusButton';
import FokusFooter from '../../components/Footer/FokusFooter';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode='contain'
        source={require('@/assets/Logo_e_Favicons/Logo.png')}
      />
      <View style={styles.inner}>
        <Text style={styles.tittle}>
          Otimize sua {'\n'}produtividade,{'\n'}
          <Text style={styles.bold}>mergulhe no que{'\n'} importa</Text>
        </Text>

        <Image
          resizeMode='contain'
          source={require('@/assets/images/Imagem_tela_inicial.png')}
        />
        <FokusButton
          tittle={'Quero iniciar!'}
          onPress={() => router.navigate('/pomodoro')}
        />
      </View>
      <FokusFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#021123',
    gap: 40,
  },
  inner: {
    gap: 16,
  },
  tittle: {
    color: '#fff',
    fontSize: 26,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});
