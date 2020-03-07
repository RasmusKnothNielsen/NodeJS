import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    @<Styled.a href="https://github.com/RasmusKnothNielsen">Rasmus Knoth Nielsen</Styled.a>
    {` `}
    <br />
    Blog site containing examples and tips for what we have learned at the NodeJS course at Computer Science, KEA, 2020.
  </Fragment>
)
