//NOte Firstof all constructor is called then render and then at last componentDidMount.




import { Component } from "react";
import ProfileUserClass from "./ProfileUserClass";
import ProfileRepoClass from "./ProfileRepoClass";
import { Github_API_User, Github_UserName, options } from "../constants";

// Profileclass is class component
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        bio: "",
      },
    };
    // console.log("Profile-Parent constructor");
  }
  
  async componentDidMount() {
    const response = await fetch(Github_API_User + Github_UserName, options); // Fetch the data from github User API
    const json = await response.json();
    this.setState({
      userInfo: json,
    });
    // console.log("Profile-Parent componentDidMount");
  }

  componentDidUpdate() {
    // console.log("Profile-Parent componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("Profile-Parent componentWillUnmount");
  }
  render() {
    const {userInfo} = this.state; // object destructuring for json data
    // console.log("Profile-Parent - render");
    return (
      <div className="profile-class-container">
        <div className="profile-container">
          <h1 className="profile-title">About Me</h1>
          <ProfileUserClass data={userInfo} />
          {/* Passing props data (full json data) from parent to child */}
        </div>
        <div className="repo-container">
          <h1 className="repo-title"><b><i>Food<sup><sub>is</sub></sup>life</i></b></h1>
          <ProfileRepoClass followers={userInfo.followers} />
          {/* Passing props followers from parent to child */}
        </div>
      </div>
    );
  }
}

export default Profile;






//process or topdown approach

////With both parent and child////
// Parent constructor
// parent render
// child Constructor
// clild render


// Dom is updated

// Parent ComponentDidMount
// json is logged in console
// Child componentDidMount



//With only child component//

// child Constructor
// child render
// child componentDidMount

// Dom is updated
// Api call is made
// setState is called



// Note componentDidMount will be called after first render.
//Note componentDidUpdate will be called after every next render.
