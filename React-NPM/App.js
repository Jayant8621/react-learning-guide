/***
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>H1 tag in child</h1>
 *          <h2>H2 tag in child</h2>
 *      </div>
 *       <div id="child2">
 *          <h1>H1 tag in child</h1>
 *          <h2>H2 tag in child</h2>
 *      </div>
 *  </div>
 * 
 * ReactElement(Obbject) ==>> HTML(Browser understands) 
 */
const heading1 = React.createElement("h1", {}, "H1 tag in child");
const heading2 = React.createElement("h2", {}, "H2 tag in child");

const child = React.createElement("div", {id:"child"}, [heading1, heading2]);
const child2 = React.createElement("div", {id:"child2"}, [heading1, heading2]);
const parent1 = React.createElement("div", {id:"parent"}, [child, child2]);


//const heading1 = React.createElement("h1", { id:"heading", xyz: "123" }, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent1);