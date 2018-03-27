// Let's create a simple functional component in the FunctionalComponentDemo.js file. 
// At this point you probably want to start typing (instead of copying and pasting) 
// so that you can get a good feel for the React keystrokes and syntax. Add the following:

// import React from 'react';
// const FunctionalComponentDemo = function () {
//     return (
        // error described below:
//     );
// }

// You should see an error at this point. Why? If you hover over the error, 
// it should say Expression expected. Because a functional component is a function that 
// should return something. Let's do that:

// import React from 'react';
// const FunctionalComponentDemo = function () {
//     return (
//     <div>
//         Hello React
//     </div>
//     );
// }

// Here we added a few lines that appear to be a simple bit of HTML. 
// However, they are actually something called JSX, which we'll talk about in a future module. 
// For now, assume that it's working just like HTML.

// For the component to work, we need to export it. See the bottom line:

import React from 'react';
const FunctionalComponentDemo = () => {          // as a fat arrow
    return (
        <div className="main">
            <div className="mainDiv">
                <div>
                    <h1>Functional Components</h1>
                    <p>Functional components allow you to render information to the web page without having to use or change state.</p>
                    <dl>
                        <dt>Presentational</dt>
                        <dd>Often used for simply rendering a small chunk of code to the DOM.</dd>
                        <dt>No 'this' keyword</dt>
                        <dd>Unlike class components, functional ones don't use 'this'.</dd>
                        <dt>No-state</dt>
                        <dd>These are 'dumb' components for UI.</dd>
                        <dt>return()</dt>
                        <dd>Must return a single element</dd>
                    </dl>
                    const FunctionalComponentDemo1 = () => {
                        return (
                        <div>
                            <h2>Challenge</h2>
                        </div>
                        );
                    };
                    const FunctionalComponentDemo2 = () => {
                        return (

                        );
                    };
                </div>
            </div>
        </div>
    );
};
export default FunctionalComponentDemo;