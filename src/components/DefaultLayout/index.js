import {SideBarMenu} from "../SideMenu";

function DefaultLayout({ children }) {
  console.log("CHILDREN", children);
  return (
    <>
      <SideBarMenu />
      {children}
    </>
  );
}

export default DefaultLayout;
