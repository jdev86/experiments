import { component$, useStore } from '@builder.io/qwik';

export const ResumeComponent = component$(() => {

  return (
    <div style={{ height: "100vh", margin: "0 auto"}}>
    <iframe id="serviceFrameSend" src="http://localhost:3333/api/resume" height="100%" width="100%" />
  </div>
  )
})
