import React from 'react'

import App from '@/components/App'
import { withState } from '@/stories/addons'


export default {
  title: 'App',
  component: App,
}

export const Index = () => <App />

Index.story = {
  decorators: [withState({})],
}
