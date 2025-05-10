import * as Speech from 'expo-speech';
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { insertWorkout } from '../utils/db';

const exercises = ['Jumping Jacks', 'Push-ups', 'Squats'];

export default function DetailScreen({ route, navigation }) {
  const { workout } = route.params;
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running && step < exercises.length) {
      Speech.speak(exercises[step]);
      timer = setTimeout(() => setStep(step + 1), 3000);
    } else if (step >= exercises.length) {
      const date = new Date().toISOString();
      insertWorkout(workout, date);
      setRunning(false);
    }
    return () => clearTimeout(timer);
  }, [running, step]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{running ? exercises[step] || "Done!" : "Press Start"}</Text>
      {!running && <Button title="Start" onPress={() => setRunning(true)} />}
    </View>
  );
}

