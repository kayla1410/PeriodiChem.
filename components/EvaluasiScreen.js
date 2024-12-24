import React, { useState } from 'react';
import { View, Text, StyleSheet, PanResponder } from 'react-native';

export default function EvaluasiScreen() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      setPosition({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: () => {
      // Logika validasi jika drop ke tempat yang benar
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kuis Tabel Periodik</Text>
      <View style={styles.dragArea}>
        <View
          {...panResponder.panHandlers}
          style={[styles.draggable, { transform: [{ translateX: position.x }, { translateY: position.y }] }]}
        >
          <Text style={styles.symbol}>H</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  dragArea: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 },
  draggable: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: 8,
  },
  symbol: { fontSize: 16, fontWeight: 'bold' },
});
