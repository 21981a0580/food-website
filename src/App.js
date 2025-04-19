const parent=React.createElement("div",
  {id:"root"},
  React.createElement.("div",{id:"child"},
      React.createElement("h1",{},
          "im a h1 tag"
      )
  )

);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);