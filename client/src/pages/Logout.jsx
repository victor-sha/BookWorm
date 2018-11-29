import React from "react";
import { Redirect } from "react-router-dom";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
  }
  // componentDidMount() {
  //   this.props.handleAuth({ auth: false });
  // }
  render() {
    return <Redirect to="/login" />;
  }
}

export default Logout;
