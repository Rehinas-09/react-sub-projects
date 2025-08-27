// import React from 'react'

// function List() {
//     const names=['Bruce','Clark','Diana']
//     const nameList=names.map(name=><h2>{name}</h2>)
//   return (
//     <div>
//         {
//             nameList
//         } 
//     </div> 
//   ) 
// }

// export default List
// import React from 'react'

// function List() {
//     const persons=[
//         {
//             id:1,
//             name:"Bruce",
//             age:30,
//             skill:"React"
//         },
//         {
//             id:2,
//             name:"Clark",
//             age:25,
//             skill:"Angular"
//         },
//         {
//             id:3,
//             name:"Diana",
//             age:28,
//             skill:"vannilla"
//         }
//     ]
//     const nameList=personmap(person=><Person person={person}></Person>)
//   return (
//     <div> 
//       {nameList}
//     </div>
//   ) 
// } 

// export default List
// import React from 'react'

// function List() {
//     const names=["rehinas","anisha","aparna"]
//   return (
//     <div>
//       <h2>Name List</h2>
//       <ul>
//         {names.map(name=><li>{name}</li>)}
//       </ul>
//     </div>
//   )
// }

// export default List
// import React from 'react'

// function List() {
//     const users=[
//         {id:1,name:"rehinas",age:24},
//         {id:2,name:"anisha",age:25},
//         {id:3,name:"aparna",age:24}
//     ]
//   return (
//     <div>
//       <h2>User List</h2>
//       <ul>
//         {users.map(user=>(
//             <li>{user.name}-{user.age} years old</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default List
// import React from 'react'

// function List() {
//     const students=[
//         {id:1,name:"Rehinas",grade:"A"},
//         {id:2,name:"Anisha",grade:"B"},
//         {id:3,name:"Aparna",grade:"f"}
//     ]
//   return (
//     <div>
//        <h2>Passed Students</h2>
//        <ul>
//         {students.filter(student=>student.grade !=="f")
//         .map(student=>(
//             <li>{student.name}-Grade:{student.grade}</li>
//         ))}
//        </ul>zsxss
//     </div>
//   )
// }

// export default List
// import React, { useEffect, useState } from 'react'

// function List() {
//     const [products,setProducts]=useState([])
//     useEffect(()=>{
//         fetch("https://fakestoreapi.com/products")
//         .then(res=>res.json())
//         .then(data=>setProducts(data))
//     },[])
//   return (
//     <div>
//         <h2>Products</h2>
//         <ul>
//             {products.map(product=>(
//                 <li key={product.id}>{product.title}-{product.price}</li>
//             ))}
//         </ul>
//     </div> 
//   )  
// } na

// export default List
import React from 'react'

function List() {
    const names=['Bruice','clark','Diana']
    const persons=[
        {
            id:1,
            name:"rehinas",
            age:23
        },
        {
            id:2,
            name:"anisha",
            age:24
        },
        {
            id:3,
            name:"aparna",
            age:23
        } 
    ] 
  return (
    
    <div>
      <p>f</p>
    </div>
  )
}

export default List





