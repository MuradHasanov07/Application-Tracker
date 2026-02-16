# 🚀 Application Tracker  
**Modern Job Application Management System – React + TypeScript + Vite**

A modern and responsive web application for tracking job applications with full CRUD functionality and LocalStorage persistence.

> Designed with a scalable component architecture and production-ready structure.

---

## 🌐 Live Demo

🔗 **Deployed on Netlify:**  
https://applicationtracker-murad.netlify.app/

---

## 📌 Project Overview

Application Tracker is a fully functional CRUD-based job tracking application built using modern React (Hooks) and TypeScript.

The application allows users to:

- Add job applications
- Edit existing records
- Delete records
- Persist data using LocalStorage
- View real-time statistics
- Manage application statuses visually

The project focuses on:

- Clean architecture
- Component-based design
- Strong typing with TypeScript
- Modern UI principles
- Scalable structure for future backend integration

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| React (Hooks) | UI development |
| TypeScript | Type safety & scalability |
| Vite | Fast build tool |
| Bootstrap | UI utilities |
| LocalStorage API | Data persistence |
| Netlify | Deployment |

---

## ⚙️ Features

### ✅ Core CRUD Operations
- Create application
- Read application list
- Update application (inline edit)
- Delete application

### ✅ Smart State Management
- useState for state control
- useEffect for LocalStorage synchronization
- useMemo for optimized calculations
- Controlled form components

### ✅ Persistent Data
All data is stored in LocalStorage and remains after page refresh.

### ✅ Modern UI Design
- Gradient hero header
- Statistic dashboard cards
- Dynamic status badges
- Responsive layout
- Professional dark theme
- Clean spacing and alignment

### ✅ Dynamic Statistics
- Total Applications
- Active Applications
- Closed Applications


## 🏗️ Project Structure

```
application-tracker/
│
├── public/
│   └── vite.svg
│
├── src/
│   │
│   ├── Components/
│   │   ├── ApplicationForm.tsx
│   │   └── ApplicationTable.tsx
│   │
│   ├── Interfaces/
│   │   └── Application.ts
│   │
│   ├── Pages/
│   │   └── HomePage.tsx
│   │
│   ├── assets/
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

### 📂 Folder Responsibilities

- **Components/** → Reusable UI components
- **Interfaces/** → TypeScript data models
- **Pages/** → Page-level layout and state orchestration
- **main.tsx** → Application entry point
- **App.tsx** → Root component
- **index.css** → Global styling
- **vite.config.ts** → Build configuration

---

---

## 📦 Data Model

```ts
export interface Application {
  id: string;
  company: string;
  position: string;
  status: ApplicationStatus;
}

export type ApplicationStatus =
  | 'Applied'
  | 'Interview'
  | 'Offer'
  | 'Rejected';
```

---

## 🧠 Design Decisions

### Why LocalStorage?

The project was intentionally built without a backend to demonstrate frontend state architecture and persistence handling.

It can easily be extended with:

- REST API integration
- Authentication
- Database support
- Cloud backend (Firebase / Supabase / Node API)

---

### Why TypeScript?

TypeScript ensures:

- Strong typing
- Fewer runtime errors
- Better maintainability
- Scalable architecture
- Professional development standards

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/MuradHasanov07/Application-Tracker.git
cd Application-Tracker
npm install
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## 🏭 Production Build

```bash
npm run build
```

The optimized production build will be generated inside the `/dist` directory.

---

## 🌍 Deployment

The project is deployed using **Netlify**.

Build Settings:

- Build Command: `npm run build`
- Publish Directory: `dist`

---

## 📈 Future Improvements

Planned scalable upgrades:

- Backend integration (Node.js / Express)
- Database integration (MongoDB / PostgreSQL)
- Authentication system
- Search & filtering functionality
- Sorting by status/date
- Pagination
- Dark / Light theme toggle
- Animation support (Framer Motion)
- Kanban board layout
- Analytics dashboard

---

## 🎯 Technical Highlights

This project demonstrates:

- Component-based architecture
- State lifecycle control (useState, useEffect, useMemo)
- Controlled form components
- LocalStorage synchronization
- Type-safe data modeling
- Production deployment workflow
- Git version control usage

---

## 👨‍💻 Author

Murad Hasanov  
Computer Engineering Student  
Fullstack Developer

---

## 📄 License

This project is created for educational and portfolio purposes.
