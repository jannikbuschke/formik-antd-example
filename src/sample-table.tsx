import { Table, AddRowButton, RemoveRowButton, Form, Input } from "formik-antd"
import { Formik } from "formik"
import * as React from "react"
import { DeleteOutlined } from "@ant-design/icons"

export function SampleTable() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Formik
        initialValues={{
          tableData: [
            {
              id: "123",
              name: "item 1",
              description: "lorem ipsum",
            },
          ],
        }}
        onSubmit={() => {}}
      >
        <Form>
          <AddRowButton
            name="tableData"
            style={{ marginBottom: 12 }}
            createNewRow={() => ({
              id: "" + Math.random(),
              name: "new",
              description: "" + Math.random(),
            })}
          >
            Add
          </AddRowButton>
          <Table
            name="tableData"
            rowKey={(row, index) => "" + row.id}
            size="small"
            pagination={false}
            style={{ width: 600 }}
            columns={[
              {
                title: "Name",
                key: "name",
                render: (text, record, i) => (
                  <Input
                    style={{ border: "none" }}
                    name={`tableData.${i}.name`}
                  />
                ),
              },
              {
                title: "Description",
                key: "description",
                render: (text, record, i) => (
                  <Input
                    style={{ border: "none" }}
                    name={`tableData.${i}.description`}
                  />
                ),
              },
              {
                key: "actions",
                render: (text, record, index) => (
                  <RemoveRowButton
                    style={{ border: "none" }}
                    icon={<DeleteOutlined />}
                    name="tableData"
                    index={index}
                  />
                ),
              },
            ]}
          />
        </Form>
      </Formik>
    </div>
  )
}
