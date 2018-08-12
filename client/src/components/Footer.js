import React from "react"
import { SocialIcon } from "react-social-icons"

const Footer = () => (
  <div className="mt-6 text-white bg-black">
    <div className="pb-6">Made with ❤️ in Melbourne, Australia</div>
    <LazyStyledSocialIcon url="https://github.com/James-E-Adams" />
    <LazyStyledSocialIcon url="https://twitter.com/jamesadams0" />
    <LazyStyledSocialIcon url="https://medium.com/@jamesadams0" />
  </div>
)

const LazyStyledSocialIcon = ({ url }) => (
  <SocialIcon style={{ margin: "4px" }} url={url} />
)

export default Footer
