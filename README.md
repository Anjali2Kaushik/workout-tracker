# 🏋️‍♀️ Three‑Screen Workout Tracker

A simple yet powerful mobile fitness tracking app built with **React Native (Expo)**. Designed as a mini-challenge for internship applications, this app helps users stay on track with their workouts while showcasing modern mobile development skills.

---

## 📱 Features

✅ **Authentication**
- Secure login with email & password using Expo SecureStore
- Optionally supports Firebase Authentication

✅ **Home Screen**
- Displays a list of 3 hard-coded workout routines

✅ **Detail Screen**
- Shows a list of exercises for each workout
- “Start” button begins a simple timer
- Auto-advances between exercises
- Voice prompts via Text-to-Speech (TTS)

✅ **History Screen**
- Logs completed workouts
- Weekly calendar or list view
- Local persistence using SQLite

✅ **Nice-to-Have**
- Dark mode ready (can be extended)
- Export to Google Fit / Apple Health (future scope)

---

## 🧰 Tech Stack

- **React Native** (with Expo)
- **React Navigation** (stack navigation)
- **SQLite** (via `expo-sqlite`)
- **SecureStore** for on-device credential storage
- **Expo Speech** for voice cues
- **Firebase (optional)** for auth
- **LocalStorage / SQLite** for workout history

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/workout-tracker.git
cd workout-tracker
```

### 2. Install dependencies

Make sure you have `Node.js` and `npm` installed.

```bash
npm install
npx expo install
```

### 3. Start the app

```bash
npx expo start
```

Scan the QR code with your phone using the **Expo Go** app.

---

## 🔐 Secure Authentication

The app uses **Expo SecureStore** to safely store credentials locally.

You can optionally connect Firebase for production-ready auth:
- Set up Firebase project
- Replace config in `firebase.js`

---

## 🗃️ Local Storage (SQLite)

Workout history is saved locally using Expo SQLite:
- Creates a local table
- Saves timestamp of completed workouts
- Used to render a calendar or list of past sessions

---

## 📦 Project Structure

```
workout-tracker/
├── App.js
├── firebase.js
├── screens/
│   ├── AuthScreen.js
│   ├── HomeScreen.js
│   ├── DetailScreen.js
│   └── HistoryScreen.js
├── utils/
│   ├── secureStore.js
│   └── db.js
└── assets/
```

---

## 💡 Future Enhancements

- Dark mode theme switch
- Google Fit / Apple Health integration
- Editable workouts
- Cloud sync with Firebase Firestore

---

## 🙋‍♀️ Author

**Anjali Kaushik**  
🔗 [LinkedIn](https://www.linkedin.com/in/kaushikanjali//)  
📧 Email: kaushikanjali1124@gmail.com

---

## 📄 License

This project is licensed under the MIT License - feel free to use and modify!

