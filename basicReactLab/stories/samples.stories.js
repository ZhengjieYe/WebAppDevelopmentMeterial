import React from "react";
import { storiesOf } from "@storybook/react";

import StaticComponent from "../components/samples/01_staticComponent";
import JSXEnbeddedVars from "../components/samples/02_embeddedVar";
import ComponentWithProps from "../components/samples/03_props";
import JSXCollection from "../components/samples/04_iteration";
import ComponentHierarchy from "../components/samples/05_hierarchy";

const list = ["Javascript", "Python", "Java", "C#"];
const bestFrameworks = [
  { name: "React", url: "https://facebook.github.io/react/" },
  { name: "Vue", url: "https://vuejs.org/" },
  { name: "Angular", url: "https://angularjs.org/" }
];

storiesOf("Samples", module)
  .add("01 - static component", () => {
    return <StaticComponent />;
  })
  .add("02 - JSX embedded variables", () => {
    return <JSXEnbeddedVars />;
  })
  .add("03 - component with props", () => {
    const classification = "Ranked";
    return <ComponentWithProps languages={list} heading={classification} />;
  })
  .add("04 - Component collection (Iteration)", () => {
    const type = "Most Popular client-side frameworks";
    return <JSXCollection frameworks={bestFrameworks} type={type} />;
  })
  .add("05 - component hierarchy", () => {
    const type = "Ranked client-side frameworks";
    const data = { 
      frameworks: {
        bestFrameworks: bestFrameworks,
        type: "Ranked client-side frameworks"
      },
      languages: {
        list: list,
        title: "Ranked Server-side"
      }
    };
    return <ComponentHierarchy tech={data} />;
  });