import styles from './App.module.css';
import { Route, Routes } from 'solid-app-router';

import Forecast from './components/forecast';
import HomePage from './components/homepage';

const App = () => {
  return (
    <div class={styles.App}>
      <Routes>
        <Route path='/forecast' element={<Forecast />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
