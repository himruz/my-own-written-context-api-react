import React from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter/";
import ThemeContext from "../contexts/themeContext";

const Content = () => {
  return (
    <div>
      <h2>This is content</h2>
      <Counter
        render={(count, increament) => {
          return (
            <ThemeContext.Consumer>
              {({ theme }) => (
                <HoverCounter
                  count={count}
                  increament={increament}
                  theme={theme}
                />
              )}
            </ThemeContext.Consumer>
          );
        }}
      />
    </div>
  );
};

export default Content;
