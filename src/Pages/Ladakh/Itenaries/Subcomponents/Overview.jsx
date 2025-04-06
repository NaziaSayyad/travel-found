export const Overview = ({data})=>{
     // console.log("over",data);

    return(
        <>
       <div style={{
        width : '800px',
        marginTop: "3%",
        textAlign : 'left',
        marginLeft : '2%',
        marginBottom :'5%',
        marginTop : '5%'
         }}>
       <h5 >  {data} </h5 >
       </div>
       
        </>
    )
}