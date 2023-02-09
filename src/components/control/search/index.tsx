import React from "react";
import { Input } from "antd";
import "./styles.scss"

const SearchComponent :React.FC<{testHint? : String , width?: number}>= (props) => {
  const { Search } = Input;
  return (
    <div>
      <Search
        placeholder={`${props.testHint}`}
        // onSearch={onSearch}
        style={{
          width: props.width,
        }}
      />
    </div>
  );
};

export default SearchComponent;
