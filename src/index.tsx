import * as React from "react";
import { render } from "react-dom";
import {  Tabs } from "antd";
import { Header } from "./header";
import { Overview } from "./overview";
import { useHistory, useParams, BrowserRouter, Route, Switch as BrowserSwitch} from "react-router-dom";
import { SampleForm } from "./sample-form";
import { SampleTable } from "./sample-table";
import "./index.css";
import "antd/dist/antd.css";

function Root() {
  const { tab } = useParams<{ tab: string | undefined }>()
  const history = useHistory()
  return (
    <Tabs
      animated={false}
      onChange={(key) => {
        history.push(key)
      }}
      activeKey={tab || "/"}
      style={{margin:0}}
    >
      <Tabs.TabPane tab="Overview" key={"/"}>
        <Header />
        <Overview />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Sample Form" key={"form"}>
        <SampleForm />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Table" key="table">
        <SampleTable />
      </Tabs.TabPane>
    </Tabs>
  )
}

const rootElement = document.getElementById("root")
render(
  <BrowserRouter>
    <BrowserSwitch>
      <Route path="/" exact={true} component={Root} />
      <Route path="/:tab" component={Root} />
    </BrowserSwitch>
  </BrowserRouter>,
  rootElement,
)
