import { component$, useStore } from '@builder.io/qwik';

import { Document, Page } from 'react-pdf';

export const ResumeComponent = component$(() => {

  return (
    <div style={{ height: "100vh" }}>
    <iframe id="serviceFrameSend" src="http://localhost:3333/api/resume" height="100%" width="100%" />
  </div>
  )
})
