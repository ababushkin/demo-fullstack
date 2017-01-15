/**
*
* TransactionsList
*
*/

import React from 'react';
import { Table } from 'react-bootstrap'

import TransactionListItem from 'components/TransactionListItem'

function TransactionsList(props) {
  let content = (<tr></tr>)
  if (props.items) {
    content = props.items.map((item, index) => (
      <TransactionListItem item={item} />
    ))
  }

  return (
    <Table>
      <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Credit</th>
        <th>Debit</th>
      </tr>
      </thead>
      <tbody>{content}</tbody>
    </Table>
  )
}

export default TransactionsList;
