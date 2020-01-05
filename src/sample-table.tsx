import { Table, AddRowButton, RemoveRowButton, Form, Input } from "formik-antd"
import { Formik } from "formik"
import * as React from "react"

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
            style={{ marginBottom: 20 }}
            createNewRow={() => ({
              name: "new",
              description: "",
            })}
          >
            Add
          </AddRowButton>
          <Table
            name="tableData"
            rowKey={(row, index) => "" + index}
            style={{ width: 600 }}
            size="small"
            pagination={false}
            columns={[
              {
                width: 100,
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
                width: 32,
                key: "actions",
                align: "right",
                render: (record, index) => (
                  <RemoveRowButton
                    style={{ border: "none" }}
                    icon="delete"
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