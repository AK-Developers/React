// //We can use different functions to render JSX components.
// //The function name should start with capital letter to recognise is as the HTML element.
// function Header() {
//     return (
//         <header>
//             <h1>This is 3<sup>rd</sup> React File</h1>
//         </header>
//     );
// }
// function Main() {
//     return (
//         <div>
//             <p className="main">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque autem beatae consequatur cum de</p>
//         </div>
//     );
// }

// ReactDOM.render(
//     <div>
//         <Header />
//         <Main/>
//     </div>, document.getElementById("root")
// )

function Header() {
    const headerStyle = {
      backgroundColor: 'lightblue',
      padding: '10px',
      textAlign: 'center',
    };
  
    const titleStyle = {
      fontSize: '24px',
    };
  
    return (
      <header style={headerStyle}>
        <h1 style={titleStyle}>This is 3<sup>rd</sup> React File</h1>
      </header>
    );
  }
  
  function Main() {
    const mainStyle = {
      padding: '20px',
      textAlign: 'center',
    };
  
    return (
      <div style={mainStyle}>
        <p className="main">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque autem beatae consequatur cum de
        </p>
      </div>
    );
  }
  ReactDOM.render(
        <div>
            <Header />
            <Main/>
        </div>, document.getElementById("root")
    )