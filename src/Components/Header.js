import React from 'react';
import PlusMinus from './PlusMinus';
import Data from './Data';

const Header = (props) => {
    return (
        <header>
            <PlusMinus section="header" handle={props.handle} />
            <div className="section"> 
                Header:{props.data.header}
            </div>
            <Data data={props.data}/>
        </header>
    )
}

export default Header
