// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect"

import { shallow, mount, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import "jest-enzyme"
import "jest-styled-components"

configure({ adapter: new Adapter() })

global.shallow = shallow
global.mount = mount
global.fetch = require("jest-fetch-mock")
