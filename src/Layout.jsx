import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const Layout=()=> {
  return (
    <div>
      <ul>
        <li>
            <Link to='./'>Create User</Link>
        </li>
        <li>
            <Link to='./datausers'>users</Link>
        </li>
      </ul>
      <hr/>
      <Outletlet/>
    </div>
  )
}

export default Layout
