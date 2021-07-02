import React from 'react'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

const NavigationDropdown = (props) => {
 

        return(
            <div className="dropdown-container">
            
            <ArrowDropUpIcon fontSize="large" style={{position:"absolute", top:0,color:"#d44b63"}} />
                <div
                className="dropdown-content">
                {                
                    props.data
                    ?
                    props.data.items.map(item => {
                        return(
                            <a href="#" key={item.name} className="dropdown-link">
                                <span>{item.name}</span>
                                <ArrowForwardIosRoundedIcon />
                            </a>
                        )
                    })
                    :
                    null
                }
                </div>
            </div>
        )
}

export default NavigationDropdown