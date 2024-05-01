import Login from '@/components/Header/Login';
import React from 'react'
import { getAllUsers } from '@/repository/UsersRepository'

const login = (props) => {
 const users=props.users
 
  return (
    <div>
        <Login data={users}/>
    </div>
  )
}

export default login
export async function getServerSideProps(){
    const users=await getAllUsers();
    return{
        props:{
            users:users
        }
    }
  }