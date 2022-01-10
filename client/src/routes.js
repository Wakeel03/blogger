import React from 'react'
import Login from './pages/Login'

const Home = React.lazy(() => import('./pages/Home'))
const Post = React.lazy(() => import('./pages/Post'))

const routes = [
//   { path: '/', exact: true, name: 'Home' },
  { path: '/', name: 'Home', component: Home, exact: true },
  { path: '/post/:id', name: 'Post', component: Post },
  { path: '/login', name: 'Login', component: Login },
]

export default routes

