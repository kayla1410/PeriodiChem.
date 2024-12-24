import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const elements = [
  { symbol: 'H', name: 'Hydrogen', description: 'Hydrogen is the first element in the periodic table...' },
  { symbol: 'He', name: 'Helium', description: 'Helium is a noble gas often used in balloons...' },
  { symbol: 'Li', name: 'Lithium', description: 'Lithium is a metal used in rechargeable batteries...' },
  { symbol: 'Be', name: 'Beryllium', description: 'Beryllium is a lightweight metal...' },
];

export default function PembelajaranScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tabel Periodik</Text>
      <View style={styles.grid}>
        {elements.map((element, index) => (
          <TouchableOpacity
            key={index}
            style={styles.element}
            onPress={() => navigation.navigate('DetailUnsur', element)}
          >
            <Text style={styles.symbol}>{element.symbol}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  element: {
    width: 50,
    height: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: 8,
  },
  symbol: { fontSize: 16, fontWeight: 'bold' },
});
