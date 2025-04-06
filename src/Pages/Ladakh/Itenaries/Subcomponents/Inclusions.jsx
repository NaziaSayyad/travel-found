export const Inclusions= ({data})=>{
    console.log("Inclu",data);
    
    return(
        <>
        <h1> Inclusions</h1>
        <ul>
            <li>
                {
                    data?.map((el) =>{
                        console.log(el,"el");
                        
                    })
                }
            </li>
        </ul>
        </>
    )
}