import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { getHistory } from '../utils/db';

export default function HistoryScreen() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory(setHistory);
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.date.split('T')[0]} - {item.workout}</Text>
        )}
      />
    </View>
  );
}

