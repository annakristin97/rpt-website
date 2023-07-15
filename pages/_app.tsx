import NextApp, { AppProps, AppContext } from 'next/app';
import { Rubik } from 'next/font/google'
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

const mainFont = Rubik({ subsets: ['latin'] })

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>Reykjavik Private Tours</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/logo_no_text.svg" />
      </Head>

      <MantineProvider
        theme={{
          fontFamily: mainFont.style.fontFamily,
          fontFamilyMonospace: 'Monaco, Courier, monospace',
          headings: { fontFamily: mainFont.style.fontFamily },

          colorScheme: 'light',
          primaryShade: { light: 5, dark: 6 },
          colors: {
            white: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
            lightBlue: ['#dee6ed', '#dee6ed', '#dee6ed', '#dee6ed', '#dee6ed', '#dee6ed', '#dee6ed', '#dee6ed', '#dee6ed', '#dee6ed'],
            orange: ['#fd6d3c', '#fd6d3c', '#fd6d3c', '#fd6d3c', '#fd6d3c', '#fd6d3c', '#fd6d3c', '#fd6d3c', '#fd6d3c', '#fd6d3c'],
            green: ['#304e3f', '#304e3f', '#304e3f', '#304e3f', '#304e3f', '#304e3f', '#304e3f', '#304e3f', '#304e3f', '#304e3f'],
            blue: ['#90d0d0', '#90d0d0', '#90d0d0', '#90d0d0', '#90d0d0', '#90d0d0', '#90d0d0', '#90d0d0', '#90d0d0', '#90d0d0'],
            yellow: ['#fdc904', '#fdc904', '#fdc904', '#fdc904', '#fdc904', '#fdc904', '#fdc904', '#fdc904', '#fdc904', '#fdc904'],
                      },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Component {...pageProps} />
        <Notifications />
      </MantineProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
  };
};
