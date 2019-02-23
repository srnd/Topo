import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Link } from "../src";

storiesOf("Link", module)
  .add(
    "Link component",
    withInfo({
      inline: true,
      text: "<Text> extension for links."
    })(() => (
      <Link href="https://codeday.org" target="_blank">
        Homepage
      </Link>
    ))
  )
  .add("Open in same tab", () => (
    <Link href="https://codeday.org" target="_self">
      Open the homepage in same tab
    </Link>
  ))
  .add("Color underline", () => (
    <Link href="https://codeday.org" color="primary" bold underline>
      I’m extra SRND
    </Link>
  ))
  .add("Hoverline", () => (
    <Link href="https://codeday.org" fontSize={5} hoverline bold chevronRight>
      Explore more
    </Link>
  ));
