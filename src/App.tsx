import React from 'react';
import TaskList from './components/todos/TaskList';
import ProfileCard from './components/profile/ProfileCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';

const App: React.FC = () => (
  <div className="page-layout">
    <aside className="profile-section">
      <ProfileCard />
    </aside>
    <main className="tasks-section">
      <TaskList />
    </main>
  </div>
);

export default App;
