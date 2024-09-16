import { useEffect, useState } from "react"

const Table = () => {
    const [Top10, setTop10] = useState([])

    useEffect(() => {
        const fetchData=async ()=>{
            const response= await fetch('http://localhost:3000/getdata')
            const resJson = await response.json()
            setTop10(resJson.data)
            console.log(resJson)
        }
        fetchData()
        console.log("object")
    }, [])
    return (
        <div className="mx-5 mt-5">
            <table className="  w-full text-xl border-separate border-spacing-0 ">
                <thead >
                    <tr className="text-slate-700 ">
                    <th className="px-3 py-3">#</th>
                    <th className="px-3 py-3">name</th>
                    <th className="px-3 py-3">last</th>
                    <th className="px-3 py-3">buy</th>
                    <th className="px-3 py-3">sell</th>
                    <th className="px-3 py-3">volume</th>
                    <th className="px-3 py-3">base_unit</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Top10.map(({ name, last, buy, sell, volume, base_unit },index) => (
                        <tr key={name} className="text-center bg-[#2e3241] border-t-[10rem] border-transparent">
                            <td className="py-4">{index+1}</td>
                            <td>{name}</td>
                            <td>{last}</td>
                            <td>{buy}</td>
                            <td>{sell}</td>
                            <td>{volume}</td>
                            <td>{base_unit}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default Table
