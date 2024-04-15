const Uers =()=>{
    let[content,setContent] =useState([])

    useEffects(()=>{
        axios.get("http")
        .then({response}=>{
            console.log(response.data);
            setCount(response.data)
        })
    },[])
    return(
        <>
        <h2>Users</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>

            <tbody>{
                content.map((value)=>{
                    return <tr key={value.id}>
                    <td>{value.name}</td>
                    <td>{value.Email}</td>
                    <Link to={'./editusers/${ualue.id}'}>Edit</Link>
                    <td><button onClick={()=>handleDelete(value.id)}>Delete</button></td>
                    <td>Delete</td>
                    </tr>
                })
            }
        </tbody>
        </table>
        </>
    )  
    
}
export default Uers