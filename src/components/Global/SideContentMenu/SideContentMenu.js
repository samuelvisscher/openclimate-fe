import React from "react";
import "./SideContentMenu.scss";
import Info from "./Info/Info";
import Menu from "./Menu/Menu";

const SideContentMenu = ({ complex, menu, current = null}) => {
  const showSecondMenu = current && (current.subnationals || current.organizations);

  const data = showSecondMenu ? [
    {
      index: "subnationals",
      title: "Subnationals",
      type: 3,
      list: current.subnationals,
    },
    {
      index: "organizations",
      title: "Organizations",
      type: 4,
      list: current.organizations,
    }
  ] : [];

  return (
    <div className="side-content-panel">
      <Info />
      <Menu data={menu} current={current} />
      {showSecondMenu  && <Menu data={data} current={current} /> }
    </div>
  );
};

export default SideContentMenu;
