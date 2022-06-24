import React from "react";
//import ReactDOM from "react-dom/client";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HelloWorld from "./components/HelloWorld";
import { render } from "@testing-library/react";

const ColorTab = ["gold", "yellowgreen", "purple"];
const TitleList = ["one", "two", "three"];

function moreHell(num) {
  let compList = []; //<-- 宣告一個空的array list, 準備儲存重複的
  compList = TitleList.map((title, id) => {
    return <HelloWorld msg={title} fontColor={ColorTab[id]} bgColor={"#777"} />;
  });

  /*第一階段用for迴圈取值
  for (let i = 0; i < num; i++) {
    compList.push(
      <HelloWorld
        msg={"Hello~ Its me."}
        fontColor={ColorTab[id]}
        bgColor={"#555"}
      />
    );
  }*/
  return compList;
}

ReactDOM.render(
  moreHell(3), //<-- 接收到moreHelloWorlds(3)產生的3個components, 並render出去

  /*<HelloWorld msg={"success!!"} fontColor={"gold"} bgColor={"#555"} />, //<-- 使用它就像用一個<>標籤符號，裡頭放入HelloWorld, 並在尾端給他一個 /，做為結尾
   */
  document.getElementById("root")
);

//原始程式碼
/*
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
