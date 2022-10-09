import { component$, Resource, useResource$, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const CryptoComponent = component$(() => {
  const store = useStore({
    coin: null
  });

  const cryptoResource = useResource$<any>(async ({ track, cleanup }) => {
    const coin = track(store, 'coin');
    const abortController = new AbortController();
    cleanup(() => abortController.abort('cleanup'));
    return await getRepositories(coin, abortController);
  });

  return (
    <div style={{ verticalAlign: "center" }}>
      <h2
        style={{display: "flex"}}>
          Top 50 Crypto Coins
      </h2>
      <Resource
        value={cryptoResource}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Coins not found. Please try again.</div>}
        onResolved={(data) => {
          if(data.error) {
            return <div>{data.message}</div>
          }

          if(data.coin) {
            return (
              <>
                <button onClick$={() => store.coin=null}>Back to list</button>
                <h3>{data?.coin?.data?.coin.symbol}</h3>
                <div>Current Price: {data?.coin?.data?.coin.price}</div>
              </>
            )
          }
          return (
            <>
              <ul>
              {/* @ts-ignore */}
                {data.coins.coins.map((c) => <div><span style={{padding: "1rem"}}>{c.rank}</span><button onClick$={() => store.coin=c.uuid}>{c.name}</button></div>)}
              </ul>
            </>
          )
        }}
      />
    </div>
  );
});

export async function getRepositories(
  coin?: string | null,
  controller?: AbortController
) {
  const fetchUrl = coin ? `http://localhost:3333/api/crypto/coin/${coin}` : `http://localhost:3333/api/crypto/coins`

  const res = await fetch(fetchUrl, {
    signal: controller?.signal,
  });
  const data = await res.json();
  return data ? data : Promise.reject(data);
}
