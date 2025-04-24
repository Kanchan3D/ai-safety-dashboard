# 🧠 AI Safety Incident Dashboard

A visually engaging and interactive dashboard to report, filter, and track AI safety-related incidents. This project highlights issues such as biased algorithms, hallucinations in LLMs, and data leaks. Built using **React**, **Tailwind CSS**, **Framer Motion**, and more for a seamless UI/UX experience.

🌐 **Live Demo**: [ai-kanchan.vercel.app](https://ai-kanchan.vercel.app/)

---

## 🚀 Features

- 📋 **Incident Reporting Form** with custom dropdowns and smooth validation.
- 🔍 **Severity-Based Filtering** (Low, Medium, High, All).
- 📊 **Date Sorting** (Newest First or Oldest First).
- 🎨 **Responsive UI** styled with Tailwind CSS.
- ✨ **Animations** powered by Framer Motion.
- 🛠️ Easily extendable and developer-friendly structure.

---

## 📸 Preview

![AI Safety Dashboard Preview](https://raw.githubusercontent.com/Kanchan3D/ai-safety-dashboard/main/public/s1.png)
![AI Safety Dashboard Preview](https://raw.githubusercontent.com/Kanchan3D/ai-safety-dashboard/main/public/s2.png)

---

## 🛠️ Tech Stack

- **React.js** – Component-based frontend
- **Tailwind CSS** – Utility-first CSS framework
- **Framer Motion** – Animations and transitions
- **Lucide Icons** – Clean, customizable icon set
- **React Toastify** – Toast notifications
- **Vite** – Fast development build tool

---

## 🧑‍💻 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the Repository

```bash
git clone https://github.com/Kanchan3D/ai-safety-dashboard.git
cd ai-safety-dashboard
```
### 2. Install Dependencies

```
npm install
```

### 3. Start the Development Server

```
npm run dev
```

## 📁 Folder Structure

```kotlin
ai-safety-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── IncidentFilter.jsx
│   │   ├── IncidentSort.jsx
│   │   ├── IncidentList.jsx
│   │   └── IncidentForm.jsx
│   ├── data/
│   │   └── mockIncidents.js
│   └── App.jsx
├── tailwind.config.js
└── package.json
