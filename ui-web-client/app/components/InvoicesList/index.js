/**
 *
 * InvoicesList
 *
 */

import React from 'react';
import { Table } from 'react-bootstrap'

import InvoicesListItem from 'components/InvoicesListItem'

function InvoicesList(props) {
  let content = (<tr></tr>)
  if (props.items) {
    content = props.items.map((item, index) => (
      <InvoicesListItem item={item} />
    ))
  }

  return (
    <Table>
      <thead>
      <tr>
        <th>Invoice number</th>
        <th>Due date</th>
        <th>Issued date</th>
        <th>Issued to</th>
        <th>Issued by</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>{content}</tbody>
    </Table>
  )
}

export default InvoicesList
