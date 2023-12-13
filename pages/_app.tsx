import type { AppProps } from "next/app";
import "../styles/global.css"; // 전역 CSS 적용

const App = ({ Component, pageProps }: AppProps) => {
  console.log('################ App > pageProps = ', pageProps);
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default App;