import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme, Input } from "antd";
import { BellOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
const { Search } = Input;

export default function HeaderAdmin({ toggleCollapsed, collapsed }) {
  const navigate = useNavigate();
  // Function to handle search
  const onSearch = (value) => {
    console.log(value); // Handle your search logic here
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleLogOut = () => {
    // Perform any logout logic here, such as clearing local storage, cookies, etc.

    // Redirect to the home page
    navigate("/");
  };

  return (
    <>
      <Header
        style={{
          padding: 0,
          // background: colorBgContainer,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#A13333",
        }}
      >
        <div className="flex items-center">
          <Button
            type="text"
            icon={
              collapsed ? (
                <MenuUnfoldOutlined
                  style={{
                    fontSize: "30px",
                  }}
                />
              ) : (
                <MenuFoldOutlined
                  style={{
                    fontSize: "30px",
                  }}
                />
              )
            }
            onClick={toggleCollapsed} // Call the toggle function when clicked
            style={{
              fontSize: "30px",
              width: 64,
              height: 64,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <Search
            placeholder="Search..."
            onSearch={onSearch}
            enterButton
            style={{ width: 300, marginLeft: "16px" }}
          />
        </div>
        <div className="flex items-center">
          <BellOutlined
            style={{
              fontSize: "30px",
              width: 64,
              height: 64,
            }}
          />
          <div className="flex items-center rounded-full cursor-pointer overflow-hidden h-[40px] w-[40px] justify-center">
            <img
              src="https://i.pinimg.com/564x/5d/ac/92/5dac9212b3ecd47758aedbdfc5277018.jpg"
              alt=""
              className=" w-[64px] "
            />
          </div>
          <button className="Btn" onClick={handleLogOut}>
            <div className="sign">
              <svg viewBox="0 0 512 512">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
              </svg>
            </div>
            <div className="text">Logout</div>
          </button>
        </div>
      </Header>
    </>
  );
}
