import React from "react";
import fields from "../../src/index";
import Form from "react-jsonschema-form";

import typeahead from "./order";
import medications from "./medications";
import typeaheadNonExpandable from "./typeaheadNonExpandable";
import rte from "./rte";
import rte2 from "./rte2";
import dx from "./dx";
import simpleTable from "./simpleTable";

export default function App() {
  let handleChange = ({ formData }) => console.log(JSON.stringify(formData));
  let formContext = {
    legends: {
      LanguageLegend: props => <h1>Expected {props.language} characters</h1>,
    },
    allActions: {
      Button: props => (
        <a className="btn btn-info pull-right">Update allergies</a>
      ),
    },
  };

  return (
    <div>
      <Form
        {...simpleTable}
        fields={fields}
        onChange={handleChange}
        formContext={formContext}
      />
      <Form
        {...rte2}
        fields={fields}
        onChange={handleChange}
        formContext={formContext}
      />
      <Form
        {...typeaheadNonExpandable}
        fields={fields}
        onChange={handleChange}
        formContext={formContext}
      />
      <Form
        {...medications}
        fields={fields}
        onChange={handleChange}
        formContext={formContext}
      />
      <Form
        {...typeahead}
        fields={fields}
        onChange={handleChange}
        formContext={formContext}
      />
      <Form
        {...rte()}
        fields={fields}
        onChange={handleChange}
        formContext={formContext}
      />
      <Form
        {...dx}
        fields={fields}
        onChange={handleChange}
        formContext={formContext}
      />
    </div>
  );
}
