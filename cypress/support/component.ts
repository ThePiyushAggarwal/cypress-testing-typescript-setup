import "./commands"

import { mount } from "cypress/react18"

// Keep the types in cypress.d.ts

Cypress.Commands.add("mount", mount)
