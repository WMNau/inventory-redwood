import { Link, routes } from '@redwoodjs/router'
import styled from 'styled-components'

import MaterialTable from 'material-table'

const ItemsPage = () => {
  const columns = [
    { title: 'Items', field: 'name' },
    { title: 'Amount', field: 'amount', type: 'numeric' },
    { title: 'Get by date', field: 'date' },
    { title: 'Location', field: 'location' },
  ]

  const data = [
    {
      name: 'butter',
      amount: 3,
      date: '12/1/2020',
      location: 'KITCHEN',
    },
  ]

  return (
    <>
      <ItemList columns={columns} data={data} title="Main List" />

      <footer>
        <Link to={routes.home()}>Home</Link>
      </footer>
    </>
  )
}

export default ItemsPage

function ItemList({ columns, data, title }) {
  return (
    <FullWidth>
      <MaterialTable columns={columns} data={data} title={title} />
    </FullWidth>
  )
}

const FullWidth = styled.div`
  max-width: 100%;
`
