import { configureStore, getDefaultMiddleware, Reducer } from '@reduxjs/toolkit'

import { withProvider } from './withProvider'
import {
  preventActions,
  ActionsPreventMiddlewareOptionType,
} from './redux-action-prevent'

const defaultWithReduxOption: ActionsPreventMiddlewareOptionType = {
  prevents: true,
  debug: false,
}

export const withRedux = <R extends Reducer>(rootReducer: R) => (
  mockState: any,
  customOption: ActionsPreventMiddlewareOptionType = defaultWithReduxOption,
) => {
  const option = { ...defaultWithReduxOption, ...customOption }
  const preventActionsMiddleware = preventActions(option)

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: mockState,
    devTools: true,
    middleware: [...getDefaultMiddleware(), preventActionsMiddleware],
  })

  option.debug && console.log('[STORE] -> ', store.getState())

  return withProvider(store)
}
