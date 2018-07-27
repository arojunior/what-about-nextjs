import Router from 'next/router';
import React from 'react';
import { compose, withStateHandlers, withHandlers, lifecycle } from 'recompose';
import { route, getFileByPage, getPageByFile } from '../libs/pages';
import KEYBOARD from '../constants/keyboard';

const KeyboardListener = ({ keyHandler }) => (
  <>{document.addEventListener('keydown', keyHandler)}</>
);

export default compose(
  withStateHandlers(
    ({ currentPage = getPageByFile(Router.route) }) => ({
      page: currentPage
    }),
    {
      pageNext: ({ page }) => () => ({
        page: page + 1
      }),
      pagePrev: ({ page }) => () =>
        page > 0 ? { page: page - 1 } : { page: page },
      setPage: () => current => ({ page: current })
    }
  ),
  withHandlers({
    keyHandler: ({ pageNext, pagePrev }) => event => {
      if (event.keyCode === KEYBOARD.RIGHT || event.keyCode === KEYBOARD.TAB) {
        return pageNext();
      }

      if (event.keyCode === KEYBOARD.LEFT || event.keyCode === KEYBOARD.ENTER) {
        return pagePrev();
      }
    }
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      const { page } = this.props;
      if (prevProps.page !== page) {
        route(getFileByPage(page));
      }
    },
    shouldComponentUpdate(prevProps) {
      if (prevProps.page === this.props.page) {
        return false;
      }
      return true;
    }
  })
)(KeyboardListener);
