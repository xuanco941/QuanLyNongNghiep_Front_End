import React, { Fragment } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Detail from "./screens/Detail/index";
import Main from "./screens/Main/index";
import DefaultLayoutAdmin from "./components/DefaultLayoutAdmin";
import DefaultLayout from "./components/DefaultLayout";
import { Login, LoginAdmin } from "./screens/Login";
import AdminDashboard from "./screens/Dashboard/AdminDashboard";



function App() {
  const token = localStorage.getItem("token");
  const token_admin = localStorage.getItem("token_admin");
  const navigate = useNavigate();

  const pageArray = [
    {
      component: <LoginAdmin />,
      path: "/admin",
      layout: false,
    },
    {
      component: <AdminDashboard />,
      path: "/admin/main",
      layout: true,
    },

    {
      component: token ? <Main /> : <Login />,
      path: "/main",
      layout: token ? true : false,
    },
    {
      component: token ? <Main /> : <Login />,
      path: "/",
      layout: token ? true : false,
    },
    {
      component: token ? <Detail /> : <Login />,
      path: "/detail",
      layout: token ? true : false,
    },


  ];

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Routes>
        {pageArray.map((page, index) => {
          const LayoutTotal = page.component.type;
          console.log("page.layout", !!page.layout);

          let Layout;
          if (page.path.includes("/admin") && page.layout === true) {
            Layout = DefaultLayoutAdmin;
          } else if (page.layout === false) {
            Layout = Fragment;
          } else {
            Layout = DefaultLayout;
          }
          console.log("page.path", page.path);

          return (

            <>

              <Route
                key={index}
                path={page.path}
                element={
                  <Layout>
                    <LayoutTotal />
                  </Layout>
                }
              />
            </>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
