import React from 'react';
import Child from './Child';

function Parent() {
    return(
        <div>
            <h1>This is the Parent Component</h1>
            <Child/>
        </div>
    );
}

export default Parent;