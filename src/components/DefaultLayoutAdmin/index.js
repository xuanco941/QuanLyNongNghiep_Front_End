import  { SideBarMenuAdmin } from "../SideMenu";

function DefaultLayoutAdmin({ children }) {
  console.log("CHILDREN", children);
  return (
    <>
      <SideBarMenuAdmin />
      {children}
    </>
  );
}

export default DefaultLayoutAdmin;
