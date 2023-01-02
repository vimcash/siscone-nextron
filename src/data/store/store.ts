import { makeStore } from '../../utils/makeStore'
import reducers from './reducers'

const store = makeStore(reducers)

export default store