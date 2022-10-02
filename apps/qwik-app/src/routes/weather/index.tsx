import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { WeatherComponent } from "~/components/weather";

export default component$(() => {
  return <WeatherComponent />
})

export const head: DocumentHead = {
  title: 'Qwik Weather',
};
