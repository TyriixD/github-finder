import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
    <div>
        <UserSearch></UserSearch>
        <UserResults></UserResults>
    </div>
  )
}

export default Home