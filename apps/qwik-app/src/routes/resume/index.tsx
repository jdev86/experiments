import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { ResumeComponent } from "~/components/resume";

export default component$(() => {
  return <ResumeComponent />
})

export const head: DocumentHead = {
  title: 'Qwik Resume',
};
