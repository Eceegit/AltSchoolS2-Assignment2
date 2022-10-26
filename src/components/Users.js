import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react';
import useFetch from 'react-custom-fetch-hook';


const Users = () => {
  //setting a default page to be 1
  const [page, setPage] = useState(1)

  //making an API call using useFtch custom hook
  const {error, loading, data} =  useFetch(
    `https://randomuser.me/api/?page=${page}&results=200&seed=abc`
  );

  console.log({ error, loading, data})

  const perPage = 15
  const total = data?.results?.length
  const noOfPages = Math.ceil(total / perPage)
  // 1 * 20 -20 = 0
  // 2 * 20 -20 = 20
  //calculate skip
  const skip = (page * perPage) - perPage

  //Setting  a condition when the API is loading
  if(loading){
    return (
      <h2>Please wait...</h2>
    )
  }

  //when there is error
  if(!loading && error){
    return(
      <h2>Error</h2>
    )
  }


  return (
    <div>
        <h1>Users of Router</h1>
        <nav>
            <NavLink to='/users/firstUsers'>First User</NavLink>
            <NavLink to='/users/secondUser'>Second User</NavLink>
        </nav>
        <Outlet />

        <h2>List of Users</h2>
        {data?.results.slice(skip, skip + perPage).map((item, index) => {
          const name = `${item.name.title} ${item.name.first} ${item.name.last}`
          return( 
            <li key={name.toLowerCase().replaceAll(' ', '')}>
              {`${index + 1}.
                ${name}`
              }
            </li>
          )
        })}
       
        <p className='noOfPages'>Pages: {page} of {noOfPages}</p>

        {
          <button
           disabled={page <= 1}
           aria-disabled={page <= 1}
           onClick={()=> setPage(prev => prev -1)}
           >Prev
          </button>
        }
        
        {/* Array.from  returns an arraylike, mapfunction(value and index) and this*/}
        {/* the value of this array would be undefined, replacing it with underscore(_) */}
        {
          Array.from({length: noOfPages},( _, index) => index + 1).map(item =>(
            <button onClick={()=> setPage(item)}>{item}</button>
          ))
        }

        {
          <button 
           disabled={page >= noOfPages}
           aria-disabled={page >= noOfPages}
           onClick={()=> setPage(prev => prev + 1)}
          >Next
          </button>
        }

    </div>
  )
}

export default Users