import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";

type MyProps = {
  num: number;
};

class Message extends React.Component<MyProps, any> {
  render() {
    return (
      <React.Fragment>
        <div>Hello World</div>
        <div>{this.props.num}</div>
      </React.Fragment>
    );
  }
}

const rootEle = document.getElementById("root");
const root = createRoot(rootEle as HTMLElement);

root.render(<Message num={888} />);
