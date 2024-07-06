import React from 'react'
import styles from './Countries.module.css'
import Link from 'next/link'
import ReactCountryFlag from "react-country-flag"


const Countries = () => {

const country=[
     {name:'america',url:'US'},
     {name:'iran',url:'IR'},
     {name:'brazil',url:'BR'},
     {name:'turkie',url:'TR'},
     {name:'greece',url:'GR'},
     {name:'france',url:'FR'},
     {name:'italy',url:'IT'},
     {name:'norvey',url:'NO'},
     {name:'afghanistan',url:'AF'},
     {name:'india',url:'IN'},
     {name:'gibuty',url:'GB'},
     {name:'gourgia',url:'GE'}
]
  return (
    <div className={`${styles.outerContainer}`}>
       {
          country.map(item=>{
               return<Link href={''} className={`${styles.link}`}>
                         <ReactCountryFlag countryCode={item.url} style={{ fontSize: "4em" }} svg /> 
                    </Link>
          })
       }
       
    </div>
  )
}

export default Countries