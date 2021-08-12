import React from 'react';
import PlusMinus from './PlusMinus';
import Data from './Data';
const Right = (props) => {
    return (
        <aside>
            <PlusMinus section="right" handle={props.handle} />
            <div className="section"> 
                Right:{props.data.right}
            </div>
            <Data data={props.data}/>
        </aside>
    )
}

export default Right
