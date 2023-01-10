import { component$, Slot, useStore } from '@builder.io/qwik';
import { NXLogo } from '~/components/icons/nx';
import Header from '../components/header/header';
import { QwikLogo } from '../components/icons/qwik'

export default component$(() => {
  interface TimeStore {
    hours: number
  }
  const store = useStore<TimeStore>( { hours: new Date().getHours() });

  const border = store.hours < 12 ? "linear-gradient(to right, #032642, #05518e, #0d73c6)" : "linear-gradient(to right, #ed692d, #f2b04d, #efc36b)"

  return (
    <>
      <main style={{ height: "100vh", backgroundColor: "slategrey" }}>
        <Header hours={store.hours} />
        <section style={{
          height: "100%",
          borderTop: "10px solid transparent",
          borderImage: `${border}`,
          borderImageSlice: 1,
          backgroundImage: ''
          }}>
          <Slot />
        </section>
      </main>
      <footer style={{ display: "block" }}>
        <a style={{ verticalAlign: "middle" }} href="https://qwik.builder.io/" target="_blank">
          Made using <span style={{ verticalAlign: "middle", paddingLeft: "0.5rem", paddingRight: "0.5rem" }}><QwikLogo /></span>
        </a>
        <a href="https://nx.dev/" target="_blank">
          and <span style={{ verticalAlign: "middle", paddingLeft: "0.5rem", paddingRight: "0.5rem" }}><NXLogo /></span>
        </a>
      </footer>
    </>
  );
});
