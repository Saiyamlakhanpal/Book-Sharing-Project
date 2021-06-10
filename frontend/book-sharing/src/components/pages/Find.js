import React from 'react'
import { useTable } from 'react-table'
export default function Find() {
    const columns = React.useMemo(
           () => [
             {
               Header: 'title',
               accessor: 'title', 
             },
             {
               Header: 'author',
               accessor: 'author',
            },
            {
                Header: 'genre',
                accessor: 'genre',
             },
             {
                Header: 'description',
                accessor: 'description',
             },
             {
                Header: 'avaibility',
                accessor: 'avaibility'
             }
           ],
           []
         )
         const data = {location: value}
         const options = {
             method: 'POST',
             headers : {
                 'title': 'title',
                 'author': 'author',
                 'genre': 'genre',
                 'description': 'description',
                 'avaibility':'avaibility'
             },
             body: JSON.stringify(data),

             fetch(`http://localhost:3000`,options)
             .then(response=>console.log(response))
             .then(json => console.log(json))
         }
         const {
                getTableProps,
                 getTableBodyProps,
                 headerGroups,
                 rows,
                 prepareRow,
               } = useTable({ columns, data })
         
    return (
        <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
              <thead>
                {headerGroups.map(headerGroup => (
                   <tr {...headerGroup.getHeaderGroupProps()}>
                     {headerGroup.headers.map(column => (
                       <th
                         {...column.getHeaderProps()}
                         style={{
                           borderBottom: 'solid 3px red',
                           background: 'aliceblue',
                           color: 'black',
                           fontWeight: 'bold',
                         }}
                       >
                         {column.render('Header')}
                       </th>
                     ))}
                   </tr>
                 ))}
               </thead>
               <tbody {...getTableBodyProps()}>
                 {rows.map(row => {
                  prepareRow(row)
                  return (
                     <tr {...row.getRowProps()}>
                       {row.cells.map(cell => {
                         return (
                           <td
                             {...cell.getCellProps()}
                             style={{
                               padding: '10px',
                               border: 'solid 1px gray',
                               background: 'papayawhip',
                             }}
                           >
                             {cell.render('Cell')}
                           </td>
                         )
                       })}
                     </tr>
                   )
                 })}
               </tbody>
             </table>
           )
         }
    
