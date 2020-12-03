import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <header>
        <Link to={routes.items()}>Items</Link>
      </header>

      <h1>HomePage</h1>
      <p>It Works</p>
    </>
  )
}

export default HomePage
