import React, { Fragment } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Detail from "./screens/Detail/index";
import Main from "./screens/Main/index";
import Login from "./screens/Login/Login";
import DefaultLayout from "./components/DefaultLayout";

function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  const pageArray = [
    {
      component: token ? <Main /> :<Login/>,
      path: "/main",
      layout: true,
    },
    {
      component:  token ? <Main /> :<Login/>,
      path: "/",
      layout: token ? true : false,
    },
    {
      component: <Detail />,
      path: "/detail",
      layout: true,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
    <Routes>
      {pageArray.map((page, index) => {
        const LayoutTotal = page.component.type;
        console.log("page.layout", !!page.layout);

        let Layout;
        if (page.layout === true) {
          Layout = DefaultLayout;
        } else if (page.layout === false) {
          Layout = Fragment;
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
