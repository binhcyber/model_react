import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export default function InputSearch({ dsViTri }) {
  console.log(dsViTri);
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
            }}
          >
            <span>
              <NavLink to={`/room/${vitri._id}`}>{vitri.province}</NavLink>
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
      }}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      dropdownStyle={{
        maxHeight: "190px",
        overflowY: "scroll",
        maxWidth: "200px",
      }}
      options={(options, lists)}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="input here" enterButton />
    </AutoComplete>
  );
}
