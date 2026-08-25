import { Text, StyleSheet } from 'react-native';

const Timer = ({ totalSeconds }) => {
  const date = new Date(totalSeconds * 1000);
  const options = { minute: '2-digit', second: '2-digit' };

  return (
    <Text style={styles.timer}>
      {date.toLocaleTimeString('pt-BR', options)}
    </Text>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timer: {
    textAlign: 'center',
    fontSize: 54,
    color: '#fff',
    fontWeight: 'bold',
  },
});
