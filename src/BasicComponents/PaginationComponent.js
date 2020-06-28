import React from "react"
import { Pagination } from "semantic-ui-react"

const PaginationComponent = ({ onChange }) => {
  return (
    <Pagination
      boundaryRange={0}
      onPageChange={onChange}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={10}
    />
  )
}

export default PaginationComponent
