import { component$, Resource, useResource$, useStore, useWatch$ } from "@builder.io/qwik";

export const WeatherComponent = component$(() => {
  const store = useStore({
    zip: '76226',
  });

  const weatherResource = useResource$<any>(async ({ track, cleanup }) => {
    const zipCode = track(store, 'zip');
    const abortController = new AbortController();
    cleanup(() => abortController.abort('cleanup'));
    return await getRepositories(zipCode, abortController);
  });

  return (
    <div style={{ verticalAlign: "center"}}>
      <h2 style={{display: "flex"}}>Displaying weather for <input name="zip" style={{ marginLeft: "0.5rem" }} value={store.zip} onKeyUp$={(ev: any) => (store.zip = ev.target.value)} placeholder="Enter Zipcode" />
</h2>
      <Resource
        value={weatherResource}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Weather for {store.zip} not found. Please try another zipcode.</div>}
        onResolved={(data) => {
          console.log({data})
          if(data.error) {
            return <div>{data.message}</div>
          }
          return <div>Temperature: {data?.weather.current.feelslike_f}</div>;
        }}
      />
    </div>
  );
});

export async function getRepositories(
  zipCode: string,
  controller?: AbortController
) {
  const res = await fetch(`http://localhost:3333/api/weather/${zipCode}`, {
    signal: controller?.signal,
  });
  const data = await res.json();
  return data ? data : Promise.reject(data);
}
