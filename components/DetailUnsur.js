import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailUnsur({ route }) {
  const { symbol, name, description } = route.params; // Data yang dikirim melalui navigasi

  return (
    <View style={styles.container}>
      <Text style={styles.symbol}>{symbol}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  symbol: { fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  name: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  description: { fontSize: 16, textAlign: 'justify', lineHeight: 24 },
});
