import * as React from "react"
import { Formik } from "formik"
import {
  SubmitButton,
  Input,
  Checkbox,
  ResetButton,
  FormikDebug,
  Form,
  FormItem,
} from "formik-antd"
import { message, Button, Row, Col } from "antd"

function validateRequired(value: string) {
  return value ? undefined : "required"
}

export const SampleForm = () => {
  return (
    <div
      style={{
        marginTop: 80,
      }}
    >
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          newsletter: false,
        }}
        onSubmit={(values, actions) => {
          message.info(JSON.stringify(values, null, 4))
          actions.setSubmitting(false)
          actions.resetForm()
        }}
        validate={values => {
          if (!values.lastName) {
            return { lastName: "required" }
          }
          return {}
        }}
        render={() => (
          <Form
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
            labelCol={{ xs: 4 }}
            wrapperCol={{ xs: 20 }}
          >
            <div style={{ flex: 1 }} />
            <div style={{ background: "white", flex: 1, padding: 40 }}>
              <FormItem
                name="firstName"
                label="Firstname"
                required={true}
                validate={validateRequired}
              >
                <Input name="firstName" placeholder="Firstname" />
              </FormItem>
              <FormItem name="lastName" label="Lastname" required={true}>
                <Input name="lastName" placeholder="Lastname" />
              </FormItem>
              <FormItem name="email" label="Email">
                <Input name="email" placeholder="Email" />
              </FormItem>
              <FormItem name="password" label="Password">
                <Input.Password name="password" placeholder="Password" />
              </FormItem>
              <FormItem
                name="newsletter"
                labelCol={{ xs: 4 }}
                wrapperCol={{ offset: 4, xs: 20 }}
              >
                <Checkbox name="newsletter">Newsletter</Checkbox>
              </FormItem>

              <Row style={{ marginTop: 60 }}>
                <Col offset={8}>
                  <Button.Group>
                    <ResetButton>Reset</ResetButton>
                    <SubmitButton>Submit</SubmitButton>
                  </Button.Group>
                </Col>
              </Row>
            </div>
            <pre style={{ flex: 1 }}>
              <FormikDebug />
            </pre>
          </Form>
        )}
      />
    </div>
  )
}
