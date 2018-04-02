import React from 'react';
import JSXCompiler from '../JSXCompiler';

const JSXRules = function () {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1 className="section-title">JSX</h1>
                <p>Most of JSX (JavaScript XML) highly resembles HTML5 and many of the tags are exactly the same.</p>
                <dl>
                    <dt>Resembles HTML </dt>
                    <dd>It's not. It really is much closer to JavaScript.</dd>
                    <dt>React.createElement() </dt>
                    <dd>Used to construct and update the DOM (What you see on the screen).</dd>
                    <dt>Not required</dt>
                    <dd>You can write this in vanilla JavaScript, but JSX makes it much simpler.</dd>
                </dl>
                <hr />
                <h1>Egghead.io's JSX Compiler</h1>
                <JSXCompiler />
            </div>
        </div>
    );
};

export default JSXRules;