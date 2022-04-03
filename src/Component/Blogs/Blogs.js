import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>This is Blog section</h1>
            <div>
                <h1>Q.What is context api?</h1>
                <p>Context api is a react structure that we use instead of prop drilling.To understand Context api we need to understand prop drilling first.So when a use a prop of a parents component to its chlid or child's component we need to pass that prop to every chlid component even if we dont use that there.There comes context api where we use this react feature to use a prop where ever we want without prop drilling.We can share a prop form parent component to chlid component without passing it to other props where the prop is not needed.</p>
            </div>
            <div>
                <h1>Q.What is semantic tag?</h1>
                <p>Semantic tag are special tags introduced in HTML5.Their main purpose are being specific of what part does in a website to browser.Before semantic tag it always was div and span which really didnt specificed as a website have many parts.This really helps search engine to optimize result.Also we have to keep in mind that they don't have any kind of special functionality other than spcifying what that part of that website does</p>
            </div>
        </div>
    );
};

export default Blogs;