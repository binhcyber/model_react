import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export default function InputSearch({ dsViTri }) {
  const cloneDsViTri = dsViTri.map((vitri) => {
    return { value: vitri.province, id: vitri._id };
  });
  const options = cloneDsViTri;
  const searchResult = (value) =>
    dsViTri.map((vitri, index) => {
      const category = `${vitri.province}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <NavLink to={`/room/${vitri._id}`}>{vitri.province} </NavLink>
            <span className="ml-auto">
              <EnvironmentOutlined />
            </span>
          </div>
        ),
      };
    });
  const [lists, setLists] = useState([]);
  const handleSearch = (value) => {
    setLists(value ? searchResult(value) : []);
  };
  const onSelect = (value) => {
    console.log(value);
    // setLists(value ? searchResult(value) : []);
    // value !== "" ? searchResult(value) : [];
  };
  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 300,
        borderColor: "transparent",
      }}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      dropdownStyle={{
        maxHeight: "190px",
        maxWidth: "200px",
      }}
      options={(options, lists)}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search
        size="large"
        placeholder="Where are you going?"
        className="hover:border-transparent"
        enterButton
      />
    </AutoComplete>
  );
}