import React,{useEffect,useState } from 'react'

export default function Searchfilter(){
    const [cdata, setData] = useState([]);
    useEffect(()=>{
           const fetchData=()=>{
               fetch('https://migrocer-test.s3.ap-south-1.amazonaws.com/data_requests/products.json')
                   .then(response => response.json())
                   .then(json =>{
                       setData(json)
                   })

           }
           fetchData();
    },[])
    return(
        <div>
            <table>
                <th>name</th>
                <th>category_level1</th>
                <th>category_level2</th>
                <th>category_level3</th>
                {
                    cdata.map(item => {
                        return(
                            <tr>
                                <td>{item.category_level3}</td>
                            </tr>
                            
                        )

                    })
                }
                
            </table>
        </div>
    )
}