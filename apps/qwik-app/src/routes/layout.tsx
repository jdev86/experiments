import { component$, Slot } from '@builder.io/qwik';
import { NXLogo } from '~/components/icons/nx';
import Header from '../components/header/header';
import { QwikLogo } from '../components/icons/qwik'

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
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
