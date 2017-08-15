import Router from 'next/router'
import {slides} from '../presentation'

export const getFileByPage = page =>
  slides.filter(slides => slides.page === page)[0].file

export const getPageByFile = file =>
  slides.filter(slides => slides.file === file)[0].page

export const route = fileName => Router.push(fileName)
