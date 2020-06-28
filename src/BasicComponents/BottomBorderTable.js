import styled from "styled-components"
import { Table } from "semantic-ui-react"

const BottomBorderTable = styled(Table)`
  && {
    border-style: none;
    font-size: 14px;
    border-collapse: collapse;
  }
  & tbody tr td {
    vertical-align: top;
    border: none;
    border-bottom: 1px solid white;
  }

  && thead tr th {
    vertical-align: top;
    border: none;
    background-color: white;
    border-bottom: 1px solid white;
  }
`

export default BottomBorderTable
