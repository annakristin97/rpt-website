import NextApp, { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

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
          colorScheme: 'light',
          primaryShade: { light: 5, dark: 6 },
          colors: {
            primaryBlue: [
              '#364555',
              '#2D3E51',
              '#25384E',
              '#1D334C',
              '#152E4A',
              '#182A3E',
              '#192634',
              '#19222D',
              '#181F26',
              '#171C21',
            ],
            primaryGreen: [
              "#3D5850",
              "#34544A",
              "#2C5045",
              "#244C40",
              "#1C4A3C",
              "#1D3E34",
              "#1D352E",
              "#1D2E29",
              "#1B2824",
              "#1A2320",
            ],
            secondaryGreen: [
              "#F0F9F6",
              "#CDEFE4",
              "#A8EBD6",
              "#7FF0CC",
              "#6CDEBA",
              "#5FCAA8",
              "#55B798",
              "#519F87",
              "#508877",
              "#4D7669"
            ],
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
