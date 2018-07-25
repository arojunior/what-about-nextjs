import Router from 'next/router';
import { slides } from '../presentation';

export const getFileByPage = page =>
  slides.find(slides => slides.page === page).file;

export const getPageByFile = file =>
  slides.find(slides => slides.file === file).page;

export const route = fileName => Router.push(fileName);
