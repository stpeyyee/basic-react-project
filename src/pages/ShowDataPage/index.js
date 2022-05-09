import React, { useCallback, useState } from 'react'
import AddData from '../../components/AddData'
import DataTable from '../../components/DataTable'


export default function ShowDataPage(){
    // const [data, setData] = useState()
    const [data, setData] = useState([
        {
            id: 1,
            firstName: "abcd",
            lastName: "abcd",
            email: "abc@gmail.com"
        },
        {
            id: 2,
            firstName: "abcd",
            lastName: "abcd",
            email: "hij@gmail.com"
        },
    ])

    const handleAddData = useCallback((firstName, lastName, email) => {
        console.log("data =>", firstName, lastName, email)
        console.log("destruct data =>", data, ...data)
        let upDateData = [...data, {id: data.length+1, firstName: firstName, lastName: lastName, email: email}]
        console.log("add data => ", upDateData)
        setData(upDateData)
    },[data, setData])

    const handleUpdateData = useCallback((id, value) => {
        let index = data.findIndex(d=>d.id === id)
        if(index !== -1){
            let upDateData = [...data.slice(0, index), {...data[index], email: value}, ...data.slice(index+1)]
            setData(upDateData)
            console.log("update data", upDateData)
        }
    },[data, setData])

    const handleDeleteData = useCallback((id) => {
        let upDateData = data.filter(d=>d.id !== id)
        setData(upDateData)
        console.log("delete data", upDateData)
    },[data, setData])

    return(
        <>
        <AddData handleAddData={handleAddData}></AddData>
        <DataTable data={data} onUpdate={handleUpdateData} onDelete={handleDeleteData}></DataTable>
        </>
    )
}