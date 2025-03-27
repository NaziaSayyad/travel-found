import ItenarySlideshow from "../../UI/Itenaries_slideshow"
import InfoCard from "./components/InfoCard"
import SidebarForm from "./components/SidebarForm"
import TabNavigation from "./components/TabNavigation"

export const Shrinagar_Manali = ()=>{
    return(
        <>
        <h1> Shrinagar  to Manali Itenary </h1>
        <ItenarySlideshow />
        <div> 
            <h1> Two different Components </h1>
           <div style={{display: 'flex',
            gap : '15%' }}>
               
           <div> 
                <InfoCard />
                <TabNavigation />

           </div>
           <div> <SidebarForm /> </div>
           </div>
        </div>
        </>
    )
}