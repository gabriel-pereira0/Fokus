import { useState } from 'react';
import { Text, View, StyleSheet, Image, Pressable, useS } from 'react-native';
import { FokusButton } from '../../components/FokusButton/FokusButton';
import { ActionButton } from '../../components/ActionButton/ActionButton';
import { Timer } from '../../components/Timer/Timer';

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require('@/assets/imagens/Imagem_foco.png'),
    display: 'Foco',
  },
  {
    id: 'short',
    initialValue: 5,
    image: require('@/assets/imagens/Imagem_descanso_curto.png'),
    display: 'Pausa curta',
  },
  {
    id: 'long',
    initialValue: 15,
    image: require('@/assets/imagens/Imagem_descanso_longo.png'),
    display: 'Pausa longa',
  },
];

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        resizeMode='contain'
        source={timerType.image}
      />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((p) => (
            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => setTimerType(p)}
              display={p.display}
            />
          ))}
        </View>
        <Timer totalSeconds={timerType.initialValue} />
        <FokusButton />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.{' '}
        </Text>
        <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
      </View>
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
  imagem: {
    width: '90%',
  },
  actions: {
    padding: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32,
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    width: '80%',
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5,
  },
});
