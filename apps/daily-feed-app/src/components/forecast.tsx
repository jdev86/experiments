import { NavLink } from 'solid-app-router';
import { createResource, For } from 'solid-js';

import styles from '../App.module.css';

const fetchWeatherInfo = async () =>
  (await fetch(`http://localhost:8080`)).json();

const formatDate = (date: string) => {
  const dateDate = new Date(date);
  return dateDate.toDateString();
};

const [weatherData] = createResource(fetchWeatherInfo);

const Forecast = () => {
  return (
    <>
      <span>{weatherData.loading && 'Loading...'}</span>
      {weatherData() && (
        <header class={styles.header}>
          <NavLink class="nav text-lg" href="/">
            Home
          </NavLink>
          <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <div>
              <img
                class={`${styles.logo} text-center`}
                src={weatherData().current.condition.icon}
                alt=""
              />
            </div>
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
              {/* <figcaption class="font-medium"> */}
              <div class="text-slate-700 dark:text-slate-500 text-lg">
                Location: {weatherData().location.name}
              </div>
              <div class="text-slate-700 dark:text-slate-500 text-lg">
                Current Temp: {weatherData().current.temp_f}
              </div>
              <div class="text-slate-700 dark:text-slate-500 text-lg">
                Condition: {weatherData().current.condition.text}
              </div>
              {/* </figcaption> */}
              <For each={weatherData().forecast.forecastday}>
                {(forecast: {
                  date: string;
                  astro: { moon_phase: string };
                  day: { maxtemp_f: string; mintemp_f: string };
                }) => (
                  <>
                    <br />
                    <div class="text-lg">{formatDate(forecast.date)}</div>
                    <div class="text-lg">
                      Moon Phase: {forecast.astro.moon_phase}
                    </div>
                    <div class="text-lg">
                      Max Temp: {forecast.day.maxtemp_f}
                    </div>
                    <div class="text-lg">
                      Min Temp: {forecast.day.mintemp_f}
                    </div>
                    <br />
                  </>
                )}
              </For>
            </div>
          </figure>
        </header>
      )}
    </>
  );
};

export default Forecast;

{
  /* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512">
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <figcaption class="font-medium">
                      <div class="text-slate-700 dark:text-slate-500 text-lg">
                    Location: {weatherData().location.name}</div>
                <div class="text-slate-700 dark:text-slate-500 text-lg">Current Temp: {weatherData().current.temp_f}</div>
                <div class="text-slate-700 dark:text-slate-500 text-lg">Condition: {weatherData().current.condition.text}</div>
    </figcaption>
                        <For each={weatherData().forecast.forecastday}>
                    {
                        (forecast: {date:string, astro: {moon_phase: string}, day: {maxtemp_f: string, mintemp_f: string}}) =>
                        <>
                        <br />
                        <div class="text-lg">
                            Date:  {formatDate(forecast.date)}
                        </div>
                        <div class="text-lg">
                            Moon Phase: {forecast.astro.moon_phase}
                        </div>
                        <div class="text-lg">
                            Max Temp: {forecast.day.maxtemp_f}
                        </div>
                        <div class="text-lg">
                            Min Temp: {forecast.day.mintemp_f}
                        </div>
                        <br />
                        </>
                    }
                    </For>
  </div>
</figure> */
}
