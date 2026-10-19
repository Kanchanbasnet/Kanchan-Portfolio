import { Helmet } from "react-helmet-async";

const Seo = ({
  title = "Kanchan Basnet - Software Engineer",
  description = "Software engineer who loves breaking things to understand how they work, finding patterns in chaos, and turning messes into something that makes sense.",
  keywords = "Kanchan Basnet, Software Engineer, Portfolio, Developer",
  ogImage = "https://www.kanchanbasnet.com.np/default-faviconn.png",
  ogUrl = "https://www.kanchanbasnet.com.np/",
  pathName = "",
}) => {
  const url = `${ogUrl}${pathName}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" type="image/png" href="/default-faviconn.png" sizes="16x16"/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default Seo;
