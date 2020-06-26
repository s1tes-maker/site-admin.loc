import React from 'react'
import Layout from './hoc/Layout/Layout'
import {Provider} from 'react-redux'
import rootReducer from './redux/rootReducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import './reset.sass'

const store= createStore(rootReducer, applyMiddleware(thunk))

export default () =>

<Provider store= {store}>
	<Layout/>
</Provider>

