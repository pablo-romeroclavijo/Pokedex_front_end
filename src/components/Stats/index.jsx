//import ReactSlider from "react-slider";

import { useEffect } from "react"



const Stats = ({setFilter, statsFilter}) => {
    console.log(statsFilter)


    function handleSlider(e){
        const id = e.target.id
        const value = e.target.value

        statsFilter[id] = value
        setFilter(statsFilter)
        console.log(statsFilter)

        const { textContent } = e.currentTarget;
        console.log(textContent);
        setFilter(data => ({
          ...data,            // <-- copy previous state
          title: textContent, // <-- update property
        }));
      }
    







    return ( 
    <>
        <div className="slider-container">
            <label for='hp'>HP: <span>{statsFilter.hp}</span> </label>
            <input onClick={handleSlider} id='hp' type='range' className="ranger" min="1" max="100" defaultValue='1'/>
        </div>
        <div className="slider-container">
            <label for='attack'>Attack: <span>{statsFilter.attack}</span>  </label>
            <input onClick={handleSlider} id='attack' type='range' className="ranger" min="1" max="130" defaultValue='1'/>
        </div>
        <div className="slider-container" >
            <label for='defense'>Defense: <span>{statsFilter.defense}</span>  </label>
            <input onClick={handleSlider} id='defense' type='range' className="ranger" min="1" max="180" defaultValue='1' />
        </div>
 

    </>
                
            

     );
}
 
export default Stats;