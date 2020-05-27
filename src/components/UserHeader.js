import React from "react";
import { connect } from "react-redux";
//import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  //   componentDidMount() {
  //     this.props.fetchUser(this.props.userId);
  //   }

  render() {
    //const user = this.props.users.find((user) => user.id === this.props.userId); better to find in mapStateToProps

    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) }; //return { users: state.users }; naming props as 'users', assigning data from reducer named 'users' (see combineReducer in reducers/index.js)
};

export default connect(mapStateToProps)(UserHeader); //so that app component can access data from redux store and call fetchUser as props
