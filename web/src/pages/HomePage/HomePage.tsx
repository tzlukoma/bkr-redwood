import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>BKR Booklist</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>Welcome to the BKR homepage</p>
    </>
  )
}

export default HomePage
