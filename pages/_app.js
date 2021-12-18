import Provider from "../store/providers";
import "../styles/globals.css";

const LearnHit = ({ Component, pageProps }) => (
  <Provider>
    <Component {...pageProps} />
  </Provider>
);

export default LearnHit;
