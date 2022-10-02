import { component$, useStore } from '@builder.io/qwik';

import { Document, Page } from 'react-pdf';

export const ResumeComponent = component$(() => {

  return (
    <div>
    <iframe id="serviceFrameSend" src="http://localhost:3333/api/resume" width="100%" height="100%" />
  </div>
  )
})
