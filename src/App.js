import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Counter } from "./Components/Counter";
import { Todos } from "./Components/Todos/Todos";
import { Sorting } from "./Components/Sorting";
import { Stopwatch } from "./Components/Stopwatch";
import { MyAxiosWithMockServer } from "./Components/MyAxiosWithMockServer";
import { PostingEmployye } from "./Components/PostingEmployye";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MyForm } from "./Components/MyForm";
import { SiblingStateLifting } from "./Components/SiblingStateLifting";
import { ParentToChildState } from "./Components/ParentToChildState";
import { ChidToParent } from "./Components/ChidToParent";
import { UseMemoExp } from "./Components/useCallBackUseMemo/UseMemoExp";
import { ReactMemoWithUseCallBack } from "./Components/ReactMemoWithUseCallBack/ReactMemoWithUseCallBack";
import { DataWithoutCustomHook } from "./Components/CustomHook/DataWithoutCustomHook";
import { DataWithUseFetchHook } from "./Components/CustomHook/DataWithUseFetchHook";
import { PropsDrilling } from "./Components/UseContextImportance/PropsDrilling";
import { UseContextToPreventPropDrilling } from "./Components/UseContextImportance/UseContextToPreventPropDrilling";
import { UseReduserHook } from "./Components/UseReducerHook.jsx/UseReduserHook";
import { ReduxApp } from "./Components/MyRedux/ReduxApp";
function App() {
  const [isEmloyeeAdded, setIsEmloyeeAdded] = useState(false);
  return (
    <div className="">
      {/* <ReduxApp /> */}
      {/* <UseReduserHook /> */}
      {/* <UseContextToPreventPropDrilling /> */}
      {/* <PropsDrilling /> */}
      {/* <DataWithUseFetchHook /> */}
      {/* <DataWithoutCustomHook /> */}
      {/* <ReactMemoWithUseCallBack /> */}
      {/* <UseMemoExp /> */}
      {/* <Todos /> */}
      {/* <SiblingStateLifting />
      <ParentToChildState />
      <ChidToParent /> */}
      <MyForm />
      {/* <Routes>
        <Route
          exact
          path="/"
          element={<MyAxiosWithMockServer isAction={isEmloyeeAdded} />}
        ></Route>
        <Route
          exact
          path="/form"
          element={
            <PostingEmployye
              setAction={setIsEmloyeeAdded}
              isAction={isEmloyeeAdded}
            />
          }
        ></Route>
      </Routes> */}

      {/* <Counter />
      <Todos />
      <Sorting />
      <Stopwatch /> */}
    </div>
  );
}

export default App;
