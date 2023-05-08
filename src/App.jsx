import React, { Component } from "react";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from "./components/Section";
import ThemeContext from "./contexts/themeContext";

class App extends Component {

  state = {
    theme : 'dark'
  }

  render() {

    const {theme} = this.state

    return (
      <div>
        <Counter
          render={(count, increament) => (
            <ClickCounter count={count} increament={increament} />
          )}
        />
           <ThemeContext.Provider value={{theme: theme}}><Section/></ThemeContext.Provider>       
      </div>
    );
  }
}

export default App;
