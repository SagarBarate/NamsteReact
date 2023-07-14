{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I' m h2 tag</h2>
    </div>
</div> */}

//if you want to create above html code using react then we can do as following
//react.crreate element takes three arguments where 1-html tag ,2- object where you can define the attributes
//3- children or output that you want to show is this case there is siblings you can define those using array or else just create child


const parent =React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div", {id: "child"},
    [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")
    ])
);

console.log(parent);

const heading = React.createElement("h1", {}, "Hello world from react!!" ); 
    //createing element is core thing of react it will came along with react 

const root = ReactDOM.createRoot(document.getElementById("root"));
    //here we have crated the root for our react library so to that so we need reactdom instead of react

root.render(parent);