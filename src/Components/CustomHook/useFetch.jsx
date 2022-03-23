import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [mydata, setData] = useState([]);
    useEffect(() => {
        fetch(url).then((res) => res.json().then((data) => {
            setData([...data]);
            
       })) 
    },[url])
    return [mydata] //Importan because we need to destructure it again;
}
