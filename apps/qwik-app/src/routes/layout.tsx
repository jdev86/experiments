import { component$, Slot } from '@builder.io/qwik';
import { NXLogo } from '~/components/icons/nx';
import Header from '../components/header/header';
import { QwikLogo } from '../components/icons/qwik'

export default component$(() => {
  return (
    <>
      <main style={{ height: "100vh",           backgroundColor: "slategrey",
 }}>
        <Header />
        <section style={{
          height: "100vh",
          borderTop: "10px solid transparent",
          // borderImage: "linear-gradient(to right, #a57308, #c47713, #eda923)",
          borderImage: "linear-gradient(to right, #032642, #05518e, #0d73c6)",
          borderImageSlice: 1
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
