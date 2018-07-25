import App, { Container } from 'next/app';
import React from 'react';
import Layout from '../layouts/Default';

export default class WhatAboutNextJs extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
