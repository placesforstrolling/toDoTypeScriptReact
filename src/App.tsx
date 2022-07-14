import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './Components/ReminderList';
import Reminder from './models/reminder';

const reminders: Reminder[] = [
  {id: 1, title: 'Reminder 1'}
]

function App() {
  return (
    <div className="App">
      <ReminderList items={reminders}/>
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9208206187206f7ec532855c9688a738a9aa380ef14b21472a7d5e9021127f04&amp;source=constructor" width="100%" height="720" frameBorder="0"></iframe>

    </div>
  );
}

export default App;
