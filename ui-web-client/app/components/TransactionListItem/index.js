/**
*
* TransactionListItem
*
*/

import React from 'react'

function TransactionListItem(props) {
  const item = props.item
  return (
    <tr>
      <td>{item.date}</td>
      <td>{item.description}</td>
      <td>{item.credit}</td>
      <td>{item.debit}</td>
    </tr>
  )
}

export default TransactionListItem
