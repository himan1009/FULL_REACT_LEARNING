
import ReactDOM from "react-dom/client";


function MyApp(){
  return(
    <div>
      <h1>CUSTOM APP</h1>
    </div>
  )
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

// const anotherElement=(
//   <a href="https://google.com" target="_blank">visit google</a>
// )

// const reactElement=React.createElement(
//   'a',
//   {href:'https://google.com', target:'_blank'},
//   'click me to visit'
// )


ReactDOM.createRoot(document.getElementById("root")).render(
  <MyApp/>
);
