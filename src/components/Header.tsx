import React from "react";

export interface IHeaderProps {
  siteTitle: string;
}

const Header: React.FC<IHeaderProps> = ({ siteTitle = "Hello" }) => {
  return <header className="site-header" />;
};

export default Header;
