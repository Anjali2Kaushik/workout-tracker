import * as SecureStore from 'expo-secure-store';

export async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export async function getValueFor(key) {
  return await SecureStore.getItemAsync(key);
}

