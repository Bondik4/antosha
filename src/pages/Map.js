import Header from "../components/Header";
import Maplockation from "../components/Maplockation";

function Map(){
  return(
    <div>
      <Header/>
      <div className="container mx-auto flex justify-center my-16 pt-[120px]">
        <Maplockation/>
      </div>
    </div>
      
  )
}

export default Map;