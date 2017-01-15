/**
*
* InvoicesListItem
*
*/

import React from 'react'

import { Button } from 'react-bootstrap'

import {
  PAID,
  UNPAID,
  PROCESSING,
  FAILED_REJECTED,
  FAILED_SERVER_ERROR
} from './constants'

function InvoicesListItem(props) {
  const item = props.item
  let action = null
  switch (action) {
    case PAID:
      action = (<Button>Pay</Button>)
      break;
    case UNPAID:
      action = (<Button>Revoke</Button>)
      break;
  }

  return (
    <tr>
      <td>{item.invoice_number}</td>
      <td>{item.due_date}</td>
      <td>{item.issued_date}</td>
      <td>{item.issued_to}</td>
      <td>{item.issued_by}</td>
      <td>{item.amount}</td>
      <td>{item.status}</td>
      <td>{action}</td>
    </tr>
  )
}

export default InvoicesListItem
