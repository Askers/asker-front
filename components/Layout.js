// index, profile, signup이 공통적으로 사용하는 레이아웃임
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <div>
      <div>
        <Link href="/">
          <a>홈</a>
        </Link>
        {isLoggedIn ? (
          <Link href="/profile">
            <a>프로필/질문함</a>
          </Link>
        ) : (
          <Link href="/login">
            <a>로그인</a>
          </Link>
        )}
      </div>
      {children}
    </div>
  );
};

// node: return안에 들어갈 수 있는 모든 것들이 노드다.
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
