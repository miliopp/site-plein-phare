import Script from 'next/script';
import './globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="shotgun-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.__shotgun = {
              'events-listing': {
                organizerId: 193943,
                layout: 'shotgun',
                showEventTags: true,
                showEventState: true
              }
            };
          `,
        }}
      />
      <Script
        src="https://widgets.shotgun.live/events-listing.js"
        strategy="lazyOnload"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
