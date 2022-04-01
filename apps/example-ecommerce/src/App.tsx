import styles from './App.module.css';
import { createResource, For } from 'solid-js';

const fetchWeatherInfo = async () => (await fetch(`http://localhost:8080`)).json();

const formatDate = (date: string) => {
  const dateDate = new Date(date);
  return dateDate.toDateString();
}

const App = () => {
  const [weatherData] = createResource(fetchWeatherInfo);

  return (
    <div class={styles.App}>
      <span>{weatherData.loading && "Loading..."}</span>
      {weatherData() &&
      <header class={styles.header}>
        <img src={weatherData().current.condition.icon} class={styles.logo} alt="logo" />
        <div>Location: {weatherData().location.name}</div>
        <div>Current Temp: {weatherData().current.temp_f}</div>
        <div>Condition: {weatherData().current.condition.text}</div>
          <For each={weatherData().forecast.forecastday}>
            {
              (forecast: {date:string, astro: {moon_phase: string}, day: {maxtemp_f: string, mintemp_f: string}}) =>
              <>
                <br />
                <div>
                  Date:  {formatDate(forecast.date)}
                </div>
                <div>
                  Moon Phase: {forecast.astro.moon_phase}
                </div>
                <div>
                  Max Temp: {forecast.day.maxtemp_f}
                </div>
                <div>
                  Min Temp: {forecast.day.mintemp_f}
                </div>
                <br />
              </>
            }
          </For>
      </header>
      }
    </div>
  );
}

export default App;
