import { Sample } from "./Sample"

describe("<Sample />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Sample />)
  })
})
