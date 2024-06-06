import Helmet from "react-helmet";

const SEO = ({ title = "", meta = "barantin" }) => {
  return (
    <>
      <Helmet title={`Barantin | ${title}`}>
        <meta name="description" content={meta} />
      </Helmet>
    </>
  );
};
export default SEO;
