import Router from 'next/router'
import {compose, withStateHandlers, withHandlers, lifecycle} from 'recompose'
import {route, getFileByPage, getPageByFile} from '../libs/Pages'

const KeyboardListener = ({page, keyHandler}) =>
  <div>
    {document.addEventListener('keydown', keyHandler)}
  </div>

export default compose(
  withStateHandlers(
    ({currentPage = getPageByFile(Router.route)}) => ({
      page: currentPage
    }),
    {
      pageNext: ({page}) => () => ({
        page: page + 1
      }),
      pagePrev: ({page}) => () => (page > 0 ? {page: page - 1} : {page: page}),
      setPage: props => current => ({page: current})
    }
  ),
  withHandlers({
    keyHandler: ({pageNext, pagePrev}) => event => {
      if (event.keyCode === 39) {
        // right
        return pageNext()
      }

      if (event.keyCode === 37) {
        // Left
        return pagePrev()
      }
    }
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      const page = this.props.page
      if (prevProps.page !== page) {
        route(getFileByPage(page))
      }
    },
    shouldComponentUpdate(prevProps) {
      if (prevProps.page === this.props.page) {
        return false
      }
      return true
    }
  })
)(KeyboardListener)
