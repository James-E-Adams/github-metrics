import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        {" "}
        Made with love in Melbourne, Australia{" "}
      </div>
      <LazyStyledSocialIcon url="https://github.com/James-E-Adams" />
      <LazyStyledSocialIcon url="https://twitter.com/jamesadams0" />
      <LazyStyledSocialIcon url="https://medium.com/@jamesadams0" />
    </div>
  );
};

const LazyStyledSocialIcon = ({ url }) => (
  <SocialIcon style={{ margin: "4px" }} url={url} />
);

export default Footer;
