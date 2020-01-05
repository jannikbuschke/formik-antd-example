import * as React from "react";
import { notification } from "antd";

export function handleValidate(values) {
  return !values.userName
    ? {
        userName: "required"
      }
    : undefined;
}

export function handleSubmit(values, actions) {
  notification.open({
    duration: 0,
    message: <pre>{JSON.stringify(values, null, 2)}</pre>
  });
  actions.setSubmitting(false);
}

// this is not necessarily a good password generator
export function generateSamplePassword() {
  return new Array(20)
    .join()
    .replace(/(.|$)/g, () => ((Math.random() * 36) | 0).toString(36));
}
