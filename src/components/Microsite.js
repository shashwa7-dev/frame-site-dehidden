import MicroSiteNav from "./MicrositeNav"
import UtilitiesPanel from "./UtilitiesPanel"
import DisplayPanel from "./DisplayPanel"
import react from "react";


function MicroSite(){

    const nft = {
        project_name:'Protector Of LABverse',
        nft_name: 'OG Polygon',
        nft_id:'001',
        url:'https://verify.dehidden.com/phygitals/kit'
    }
    return(
        <div className="microsite">
           <MicroSiteNav nft={nft}/>
           <div className="microsite_page">
           <DisplayPanel nft={nft} />
            <div className="mainpanel">
             <UtilitiesPanel />
            </div>
           </div>        
        </div>
    )
}

export default MicroSite