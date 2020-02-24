import { Action, Middleware, MiddlewareAPI } from '@reduxjs/toolkit'

export type ActionsPreventMiddlewareOptionType = {
  prevents?: boolean | string[]
  debug?: boolean
}

const defaultOption: ActionsPreventMiddlewareOptionType = {
  prevents: true,
  debug: true,
}

export const preventActions = (
  customOption?: ActionsPreventMiddlewareOptionType,
) => {
  const option: ActionsPreventMiddlewareOptionType = {
    ...defaultOption,
    ...customOption,
  }
  const actionPreventMiddleware: Middleware = (store: MiddlewareAPI) => {
    option.debug && console.log(`[ACTION_PREVENT] Applied!`)

    return next => <A extends Action>(action: A) => {
      const preventAction = () => {
        option.debug && console.log(`[ACTION_PREVENT] Prevent ${action.type}!`)

        return store.getState()
      }

      if (!option.prevents) {
        return next(action)
      }

      if (typeof option.prevents === 'boolean') {
        return preventAction()
      }

      if (option.prevents.indexOf(action.type.split('/')[0]) > -1) {
        return preventAction()
      }

      return next(action)
    }
  }

  return actionPreventMiddleware
}
