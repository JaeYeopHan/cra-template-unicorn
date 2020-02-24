import React from 'react'
import { Provider } from 'react-redux'

import store from '@/features'

type StoryFunctionType = () => React.ReactNode

export const withProvider = (reduxStore = store) => (storyFn: StoryFunctionType) => {
  return <Provider store={reduxStore}>{storyFn()}</Provider>
}