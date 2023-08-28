import React, { useState } from "react";

export default function MayTinh() {
  const keys = [
    {
      label: "1",
      onClick: () => {
        setPhepTinh(phepTinh + "1");
      },
    },
    {
      label: "2",
      onClick: () => {
        setPhepTinh(phepTinh + "2");
      },
    },
    {
      label: "3",
      onClick: () => {
        setPhepTinh(phepTinh + "3");
      },
    },
    {
      label: "DEL",
      onClick: () => {
        setPhepTinh(phepTinh.slice(0, -1));
      },
    },
    {
      label: "4",
      onClick: () => {
        setPhepTinh(phepTinh + "4");
      },
    },
    {
      label: "5",
      onClick: () => {
        setPhepTinh(phepTinh + "5");
      },
    },
    {
      label: "6",
      onClick: () => {
        setPhepTinh(phepTinh + "6");
      },
    },
    {
      label: "+",
      onClick: () => {
        setPhepTinh(phepTinh + "+");
      },
    },
    {
      label: "7",
      onClick: () => {
        setPhepTinh(phepTinh + "7");
      },
    },
    {
      label: "8",
      onClick: () => {
        setPhepTinh(phepTinh + "8");
      },
    },
    {
      label: "9",
      onClick: () => {
        setPhepTinh(phepTinh + "9");
      },
    },
    {
      label: "-",
      onClick: () => {
        setPhepTinh(phepTinh + "-");
      },
    },
    {
      label: ".",
      onClick: () => {
        setPhepTinh(phepTinh + ".");
      },
    },
    {
      label: "0",
      onClick: () => {
        setPhepTinh(phepTinh + "0");
      },
    },
    {
      label: ":",
      onClick: () => {
        setPhepTinh(phepTinh + ":");
      },
    },
    {
      label: "x",
      onClick: () => {
        setPhepTinh(phepTinh + "x");
      },
    },
    {
      label: "Reset",
      onClick: () => {
        setPhepTinh("");
      },
      col: 2,
    },
    {
      label: "=",
      onClick: () => {
        setHienThiKetQua(true);
      },
      col: 2,
    },
  ];


  const [phepTinh, setPhepTinh] = useState("");
  const [hienThiKetQua, setHienThiKetQua] = useState(false);

  return (
    <div className="flex justify-center mx-auto p-10 w-screen h-screen bg-gradient-to-r from-green-300 via-blue-400 to-purple-500">
      <div className="w-96">
      <div className=" h-20 my-4 text-right flex justify-end items-center px-2 font-semibold text-xl border rounded ">
        {phepTinh} =
        <br></br>
        {hienThiKetQua && (
          <> {hamTinhToan(phepTinh.replace(/x/g, "*").replace(/:/g, "/"))}</>
        )}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {keys.map((item, key) => (
          <div
            key={key}
            onClick={item.onClick}
            className={`px-4 py-2 font-semibold text-lg border rounded flex items-center justify-center col-span-${item.col}`}
          >
            {item.label}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

function hamTinhToan(fn) {
  try {
    return new Function("return " + fn)();
  } catch (error) {
    return "";
  }
}
