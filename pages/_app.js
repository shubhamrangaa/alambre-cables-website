import Layout from "@components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

// //vaibhav
// import Footer from "@components/vaibhav/Footer";
// import "../styles/footerV.module.css";

// function MyApp({ Component, pageProps }) {
//   return (
//     <Footer>
//       <Component {...pageProps} />
//     </Footer>
//   );
// }

// export default MyApp;
