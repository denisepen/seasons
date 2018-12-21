import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iocnName: "sun"
  },
  winter: {
    text: "Brrr It is cold",
    iconName: "snowflake"
  }
}

const getSeason = (lat, month) => {
  if(month>2 && month < 9){

    // if lat>0 in northern hemis.
  return  lat > 0 ? 'summer' : "winter"
} else {
  return  lat > 0 ? 'winter' : "summer"
}
}

const SeasonDisplay = (props) => {
  // console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]

  // const icon = season === 'Winter' ? "snowflake icon" : "sun icon"
  return (
    <div>
      <i className= {`${iconName} icon`}></i>
      <h1>{text} </h1>
      <i className= {`${iconName} icon`}></i>
    </div>
  )
}

export default SeasonDisplay;
