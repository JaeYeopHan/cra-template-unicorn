import { rootReducer } from '@/features'

import { withRedux } from '../../.storybook/decorators/addon-redux-toolkit'

export const withState = withRedux(rootReducer)
