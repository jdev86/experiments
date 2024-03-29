import { component$, Resource, useResource$, useStore } from "@builder.io/qwik";

export const WeatherComponent = component$(() => {
  const store = useStore({
    zip: '76226',
  });

  const weatherResource = useResource$<any>(async ({ track, cleanup }) => {
    const zipCode: string = track(() => store.zip);
    const abortController = new AbortController();
    cleanup(() => abortController.abort('cleanup'));
    return await getWeather(zipCode, abortController);
  });

  const weatherForecastResource = useResource$<any>(async ({ track, cleanup }) => {
    const zipCode = track(() => store.zip);
    const abortController = new AbortController();
    cleanup(() => abortController.abort('cleanup'));
    return await getWeatherForecast(zipCode, abortController);
  })

  return (
    <>
      <div style={{ verticalAlign: "center" }}>
        <Resource
          value={weatherForecastResource}
          onPending={() => <div>Loading...</div>}
          onRejected={() => <div>Weather for {store.zip} not found. Please try another zipcode.</div>}
          onResolved={(data: { forecast: { forecast: { forecastday: any[]}}, error?: string, message?: string}) => {
            const { forecast: { forecast: { forecastday }}} = data || null
            if(!forecastday){
              return <></>
            }
            if(data.error) {
              return <div>{data.message}</div>
            }
            return (
              <div>
                {forecastday?.map((fd: any) => (
                  <>
                    <div style={{ display: 'inline' }}>{JSON.stringify(fd.day.condition.text)}</div>
                  </>
                  )
                )}
                </div>
            )
          }
          }
        />
      </div>
      <div style={{ verticalAlign: "center" }}>
        <h2
          style={{display: "flex"}}>
            Displaying weather for <input name="zip" style={{ marginLeft: "0.5rem" }} value={store.zip} onKeyUp$={(ev: any) => (store.zip = ev.target.value)} placeholder="Enter Zipcode" />
        </h2>
        <Resource
          value={weatherResource}
          onPending={() => <div>Loading...</div>}
          onRejected={() => <div>Weather for {store.zip} not found. Please try another zipcode.</div>}
          onResolved={(data) => {
            if(data.error) {
              return <div>{data.message}</div>
            }
            return (
              <>
                <div>City: {data.weather.location.name}, {data.weather.location.country}</div>
                <div>Temperature: {data?.weather.current.feelslike_f}° F</div>
              </>
            )
          }}
        />
      </div>
    </>
  );
});

export async function getWeather(
  zipCode: string,
  controller?: AbortController
) {
  const res = await fetch(`http://localhost:3333/api/weather/${zipCode}`, {
    signal: controller?.signal,
  });
  const data = await res.json();
  return data ? data : Promise.reject(data);
}

export async function getWeatherForecast(
  zipCode: string,
  controller?: AbortController
) {
  const res = await fetch(`http://localhost:3333/api/weather/forecast/${zipCode}`, {
    signal: controller?.signal,
  });
  const data = await res.json();
  return data ? data : Promise.reject(data);
}
