import React from "react";
import "./Header.css";
import Text from "../../components/Text/Text";

const Header = () => {
  return (
    <div className="header">
      {/* status-bar */}
      <Text fontWeight="bold" fontSize="18px">
        Ủng hộ chống dịch Covid-19
      </Text>
    </div>
  );
};

export default Header;
