import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';

const workouts = ['Full Body', 'Cardio Burn', 'Stretch & Flex'];

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      {workouts.map((w, i) => (
        <Button key={i} title={w} onPress={() => navigation.navigate('Detail', { workout: w })} />
      ))}
      <Button title="View History" onPress={() => navigation.navigate('History')} />
    </View>
  );
}

const { colors } = useTheme();

<View style={{ backgroundColor: colors.background }}>
  <Text style={{ color: colors.text }}>Hello</Text>
</View>

