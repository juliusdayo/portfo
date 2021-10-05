import React, {useEffect,useState} from "react";
import Caption from "../global_components/Caption";

 function Weather(){

  
  const [data, setData] = useState([]); 
  

  useEffect(() => {
    const fetchData = async () => {      

      await fetch(`${process.env.REACT_APP_API_URL}/weather?q=Angono&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        
       
      });
    }
    ; 
  })
 
  return(
    <div>{data.name}</div>
  )

}
export default Weather;

