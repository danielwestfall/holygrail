import React from 'react';
import PlusMinus from './PlusMinus';
import Data from './Data';

const Article = (props) => {
    return (
        <article>
            <PlusMinus section="article" handle={props.handle} />
            <div className="section"> 
                Article:{props.data.article}
            </div>
            <Data data={props.data}/>
        </article>
    )
}

export default Article
