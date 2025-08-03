# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Task Manager

A simple React + Redux application for managing tasks, featuring a user profile section and responsive layout.

## Features

- User profile card
- Add, view, and manage tasks
- Responsive design: profile on the left (desktop), on top (mobile)
- Bootstrap styling

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm

### Installation

```sh
npm install
```

### Running the App

```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Running Tests

```sh
npm test
```

## Project Structure

```
src/
  ├── components/
  │     ├── profile/
  │     │     └── ProfileCard.tsx
  │     └── todos/
  │           └── TaskList.tsx
  ├── reducers/
  │     └── todos/
  │           └── TodoSlice.ts
  ├── assets/
  │     └── images/
  │     |      └── profile-pic.png   |     |
  │     └── css/
  │           └── App.css  
  ├── store/
  │     └── store.ts
  ├── App.tsx
  ├── main.tsx

```

## Customization

- **Profile Data:** Edit `ProfileCard.tsx` to update user info.
- **Task Logic:** Update `TaskList.tsx` and `TodoSlice.ts` for custom task behavior.

## Responsive Layout

- On desktop: Profile card on the left, tasks on the right.
- On mobile: Profile card on top, tasks below.

## License

MIT

---

**Made with React, Redux, and Bootstrap**
