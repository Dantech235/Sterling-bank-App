import { DirectLine } from "botframework-directlinejs";
import React from "react";
import ReactWebChat from "botframework-webchat";

// Define props interface if needed
interface Props {
  token: string;
  userID: string;
}

// Define state interface if needed
interface State {}

export default class ChatComponent extends React.Component<Props, State> {
  private directLine: DirectLine;

  constructor(props: Props) {
    super(props);

    // Initialize DirectLine with the token from props
    this.directLine = new DirectLine({ token: props.token });
  }

  render() {
    return (
      <ReactWebChat directLine={this.directLine} userID={this.props.userID} />
    );
  }
}
