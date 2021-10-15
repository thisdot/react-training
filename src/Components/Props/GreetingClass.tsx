import React from "react";

type Props = {
  message: string;
};

export class GreetingClass extends React.Component<Props> {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}