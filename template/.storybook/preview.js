import { addDecorator, addParameters } from '@storybook/react'
import { withProvider } from './decorators/addon-redux-toolkit'
import StoryRouter from 'storybook-react-router'
import { withConsole } from '@storybook/addon-console'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addDecorator(withProvider())
addDecorator(StoryRouter())

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphonex',
  },
})
