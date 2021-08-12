import React from 'react';

const PlusMinus = (props) => {
    function handle(e){
        if(e.target.id.includes('minus')){
            props.handle({name:props.section, value: -1});
            return;    
        }
        props.handle({name:props.section, value: 1});   
    }
    return(
    <>
        <img src={`../icons/${props.section}_plus.png`} id="plus" onClick={((e) => handle(e))}/>
        <img src={`../icons/${props.section}_minus.png`} id="minus" onClick={((e) => handle(e))}/>
    </>
    );
}

export default PlusMinus
