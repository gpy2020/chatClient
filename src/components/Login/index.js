import React from "react";

import "./style.css";

const login = props => {
  return (
    <div className="auth">
      <div className="auth_tabs">
        <button
          className={`${
            props.currentTab === 0
              ? "auth_tabs__tab auth_tabs__tab-active"
              : "auth_tabs__tab"
          }`}
          onClick={props.handleChangeTabs}
          value={0}
        >
          Login
        </button>
        <button
          className={`${
            props.currentTab === 1
              ? "auth_tabs__tab auth_tabs__tab-active"
              : "auth_tabs__tab"
          }`}
          onClick={props.handleChangeTabs}
          value={1}
        >
          Register
        </button>
      </div>
      <form className="auth_content">
        <input
          autoComplete="off"
          className="auth_content__field"
          type="text"
          placeholder="Username"
          name="username"
          onChange={props.onChange}
          value={props.username}
        />
        <input
          className="auth_content__field"
          type="password"
          placeholder="Password"
          name="password"
          onChange={props.onChange}
          value={props.password}
        />
        <button
          onClick={props.handleSubmitForm}
          className="auth_content__submit"
          type="submit"
        >
          {props.currentTab === 0 ? "LOGIN" : "REGISTER"}
        </button>
      </form>
    </div>
  );
};

export default login;
