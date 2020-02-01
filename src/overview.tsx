import * as React from "react";
import {
  Checkbox,
  Input,
  InputNumber,
  Switch,
  DatePicker,
  TimePicker,
  Radio,
  FormikDebug,
  FormItem,
  ResetButton,
  SubmitButton,
  Select,
  AutoComplete,
  Rate,
  Slider,
  Cascader,
  TreeSelect,
  Transfer,
  Form
} from "formik-antd";
import { Formik } from "formik";
import { Button,  TreeSelect as $TreeSelect } from "antd";
import "./index.css";
import "antd/dist/antd.css";
import { generateSamplePassword, handleSubmit, handleValidate } from "./utils";

const { TreeNode } = $TreeSelect;

export function Overview() {
  return (
    <Formik
      initialValues={{
        userName: "",
        email: "sample@email.com",
        address: { city: "hamburg" },
        password: generateSamplePassword(),
        index: 5,
        dollars: 1,
        newsletter: true,
        consent: false,
        description: "lorem ipsum\ndolor sit amet",
        time: new Date().toISOString(),
        date: new Date().toISOString(),
        city: 3,
        radioGroup: "1",
        todos: ["2", "3"],
        slider1: 30,
        slider2: [20, 60]
      }}
      onSubmit={handleSubmit}
      validate={values => {
        if (!values.userName) {
          return { userName: "required" };
        }
        return undefined;
      }}
      render={formik => (
        <Form>
          <div className="container">
            <div className="component-container">
              <Input name="email" />
              <Form.Item
                name="userName"
                hasFeedback={true}
                showValidateSuccess={true}
              >
                <Input name="userName" placeholder="input with validation" />
              </Form.Item>
              <Input addonBefore="city" name="address.city" />
              <Input.Password name="password" />
              <Input.TextArea name="description" />
              <InputNumber name="index" min={0} />
              <InputNumber
                name="dollars"
                formatter={(value: any) => `$ ${value}`}
              />
              <AutoComplete
                name="auto"
                dataSource={["Berlin", "Amsterdam", "Paris"]}
                showArrow={true}
              />
              <Rate name="rate" allowHalf={true} allowClear={true} />
              <Rate
                name="rate"
                allowHalf={true}
                style={{ color: "red" }}
                allowClear={true}
              />
              <Slider name="slider1" />
              <Slider name="slider2" range={true} />
              <Checkbox name="newsletter">Checkbox</Checkbox>
              <div>
                <Switch name="consent" checkedChildren="开" unCheckedChildren="关" />
              </div>
              <TimePicker name="time" />
              <DatePicker name="date" showTime={true} />
              <Radio.Group
                name="radioGroup"
                options={[
                  { label: "item 1", value: "1" },
                  { label: "item 2", value: 2 },
                  { label: "item 3", value: "3" },
                  { label: <span>foo</span>, value: "4" }
                ]}
              />
              <Radio.Group name="city" size="large">
                <Radio.Button value={1}>Hamburg</Radio.Button>
                <Radio.Button value={2}>Amsterdam</Radio.Button>
                <Radio.Button value={3}>London</Radio.Button>
              </Radio.Group>
              <Checkbox.Group
                name="todos"
                options={[
                  { label: "item 1", value: "1" },
                  { label: "item 2", value: "2" },
                  { label: "item 3", value: "3" }
                ]}
              />
              <Select
                name="select2"
                style={{ width: "100%" }}
                placeholder="Select multiple"
                mode="multiple"
              >
                <Select.Option value={1}>item 1</Select.Option>
                <Select.Option value={2}>item 2</Select.Option>
                <Select.Option value={3}>item 3</Select.Option>
              </Select>
              <Select
                name="select3"
                style={{ width: "100%" }}
                placeholder="Select with groups"
              >
                <Select.OptGroup label="group 1">
                  <Select.Option value={1}>item 1</Select.Option>
                  <Select.Option value={2}>item 2</Select.Option>
                  <Select.Option value={3}>item 3</Select.Option>
                </Select.OptGroup>
                <Select.OptGroup label="group 2">
                  <Select.Option value={4}>item 4</Select.Option>
                  <Select.Option value={5}>item 5</Select.Option>
                  <Select.Option value={6}>item 6</Select.Option>
                </Select.OptGroup>
              </Select>
              <Cascader
                options={[
                  {
                    value: "zhejiang",
                    label: "Zhejiang",
                    children: [
                      {
                        value: "hangzhou",
                        label: "Hangzhou",
                        children: [
                          {
                            value: "xihu",
                            label: "West Lake"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    value: "jiangsu",
                    label: "Jiangsu",
                    children: [
                      {
                        value: "nanjing",
                        label: "Nanjing"
                      }
                    ]
                  }
                ]}
                name="cascader"
                placeholder="Cascader"
              />
              <TreeSelect name="treeselect" placeholder="Treeselect">
                <TreeNode value="parent 1" title="parent 1" key="0-1">
                  <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                    <TreeNode value="leaf1" title="my leaf" key="random" />
                    <TreeNode value="leaf2" title="your leaf" key="random1" />
                  </TreeNode>
                  <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                    <TreeNode
                      value="sss"
                      title={<b style={{ color: "#08c" }}>sss</b>}
                      key="random3"
                    />
                  </TreeNode>
                </TreeNode>
              </TreeSelect>
              <Transfer
                name="transfer"
                dataSource={[
                  { key: "1", title: "item 1" },
                  { key: "2", title: "item 2" },
                  { key: "3", title: "item 3" }
                ]}
                render={item => item.title as string}
                listStyle={()=>({})}
              />
              <Button.Group size="large">
                <ResetButton>Reset</ResetButton>
                <SubmitButton type="primary" disabled={false}>
                  Submit
                </SubmitButton>
              </Button.Group>
            </div>

            <FormikDebug style={{ maxWidth: 400 }} />
          </div>
        </Form>
      )}
    />
  );
}
