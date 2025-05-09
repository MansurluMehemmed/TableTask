

import React, { useState } from "react";
import { Table, Input, Button } from "antd";

function App() {
  const [myData, setMyData] = useState([{ id: 1, x: 0, y: 0 }]);

  const addRowFunc = () => {
    const addRow = {
      id: Math.random(),
      x: 0,
      y: 0,
    };
    setMyData([...myData, addRow]);
  };

  const deleteFunc = (id) => {
    let filtered = myData.filter((item) => item.id !== id);
    setMyData(filtered);
  };

  const changeInput = (e, id, key) => {
    let val = e.target.value;
    let copy = [...myData];
    let index = copy.findIndex((d) => d.id === id);
    if (index >=0) {
      copy[index][key] = Number(val);
    }
    setMyData(copy);
  };

  const columns = [
    {
      title: "X",
      key: "x",
      render: (_, record) => {
        return (
          <Input
            type="number"
            value={record.x}
            style={{ width: "88px" }}
            onChange={(e) => changeInput(e, record.id, "x")}
          />
        );
      },
    },
    {
      title: "Y",
      key: "y",
      render: (text, record) => {
        return (
          <Input
            type="number"
            style={{ width: "88px" }}
            value={record.y}
            onChange={(e) => changeInput(e, record.id, "y")}
          />
        );
      },
    },
    {
      title: "Sum",
      render: (_, record) => {
        return (
          <Input
            value={record.x + record.y}
            style={{ width: "88px" }}
            disabled
          />
        );
      },
    },
    {
      title: "Action",
      render: (_, record) => {
        return (
          <Button danger onClick={() => deleteFunc(record.id)}>
            Delete
          </Button>
        );
      },
    },
  ];

  return (
    <div style={{ padding: "20px", width: "80%", margin: "auto" }}>
      <Button onClick={addRowFunc} type="primary" style={{ marginBottom: 10,display:'flex', justifySelf:'center' }}>
        Add new row
      </Button>

      <Table columns={columns} dataSource={myData} />
    </div>
  );
}

export default App;
