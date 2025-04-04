# Gen AI Interactive Learning Games

## 📌 Overview

Gen AI Interactive Learning Games is an AI-powered platform designed to enhance education through interactive quizzes, story-based learning, and gamified learning paths. Built using **Node.js**, **Express**, **MongoDB**, and **React**, this project provides an engaging learning experience.

---

## 🚀 Features

- ✅ AI-Generated Quizzes 🧠
- ✅ AI-Powered Story Learning 📖
- ✅ Gamified Learning Paths 🎮
- ✅ Leaderboard System 🏆
- ✅ MongoDB for User Progress Tracking 💾

---

## 🛠️ Tech Stack

### Backend:

- **Node.js** (Server-side runtime)
- **Express.js** (REST API Framework)
- **MongoDB** (Database)
- **Mongoose** (ODM for MongoDB)
- **Cors & dotenv** (Security & Environment configuration)

### Frontend:

- **React.js** (UI Framework)
- **React Router** (Navigation)
- **Axios** (API Calls)
- **Bootstrap / TailwindCSS** (Styling)

---

## 📂 Project Structure

### Backend (`/backend`)

- `index.js` → Main server file
- `models/User.js` → User schema
- `routes/quizRoutes.js` → Quiz API
- `routes/storyRoutes.js` → Story API
- `package.json` → Dependencies
- `.gitignore` → Ignore `node_modules` & `.env`

### Frontend (`/frontend`)

- `src/App.js` → Main React app
- `src/components/` → UI Components (QuizComponent, StoryComponent, Leaderboard)
- `src/pages/` → Pages (Dashboard, QuizPage, StoryPage)
- `package.json` → Dependencies
- `.gitignore` → Ignore `node_modules`

---

## 🔌 API Endpoints

### 🎯 Quiz API (`/api/quiz`)

| Method   | Endpoint | Description                          |
| -------- | -------- | ------------------------------------ |
| **POST** | `/save`  | Saves quiz answer & updates progress |

### 📖 Story API (`/api/story`)

| Method  | Endpoint    | Description                   |
| ------- | ----------- | ----------------------------- |
| **GET** | `/generate` | Returns an AI-generated story |

---

## 👨‍💻 Contributors

- **SACHIN M S**
- 📧 **[sit23cs100@sairamtap.edu.in](mailto\:sit23cs100@sairamtap.edu.in)**
- 🔗 **GitHub:** [https://github.com/sachinms005/GEN-AI-Interactive-Learning-Games.git](https://github.com/sachinms005/GEN-AI-Interactive-Learning-Games.git)

---

##

