import React from 'react';
import Author from './Author';
import Conclusion from './Conclusion';
import Body from './Body';


function Article(){
    return(
        <div>
            <h1>The Rise of Quantum Computing: A New Era of Technology</h1>
            <Author/>
            <Body/>
            <Conclusion/>
        </div>
    );
}

export default Article;