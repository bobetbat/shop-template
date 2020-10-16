import loadable from 'react-loadable'
import Loading from './components/Loading'

export default [
  {
    path: '/shop',
    exact: true,
    component: loadable({
      loader: () => import('./views/Shop'),
      loading: Loading
    })
  },
  {
    path: '/s2',
    exact: true,
    component: loadable({
      loader: () => import('./views/s2'),
      loading: Loading
    })
  },
  {
    path: '/s3',
    exact: true,
    component: loadable({
      loader: () => import('./views/s3'),
      loading: Loading
    })
  },
]