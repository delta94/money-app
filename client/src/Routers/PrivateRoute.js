import React from "react";
import { Route } from "react-router-dom";

export default function PrivateRouter({
  component: Component,
  layout: Layout,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
}
