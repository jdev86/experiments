import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { CryptoComponent } from "../../components/crypto";

export default component$(() => {
  return <CryptoComponent />
})

export const head: DocumentHead = {
  title: 'Qwik Crypto',
};
