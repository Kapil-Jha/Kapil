import React from "react";
import validator from "validator";
import PhoneInput from "react-phone-number-input";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      adress: "",
      password: "",
      setEmailError: "",
    };
  }

  emailValidator = (e) => {
    this.setState({ email: e.target.email });
    let { email } = this.state;
    if (validator.isEmail(email)) {
      this.setState({ setEmailError: "Valid Email :)" });
    } else {
      this.setState({ setEmailError: "Enter valid Email!" });
    }
  };

  mySubmitHandler = (event) => {
    event.preventDefault();

    //Call the server and redirect he user to another page
    this.setState({
      firstName: event.target.firstName,
      lastName: event.target.lastName,
      email: event.target.email,
      mobileNumber: event.target.mobileNumber,
      adress: event.target.adress,
      password: event.target.password,
    });

    // this.props.history.push(`/List` / this.state);
    let { email } = this.state;
    if (validator.isEmail(email)) {
      this.props.history.push({
        pathname: "/List",
        state: { detail: this.state },
      });
    }
  };

  render() {
    console.log(this.state.setEmailError);
    return (
      <div className="container">
        <div className="row">
          <form className="form" onSubmit={this.mySubmitHandler}>
            <h2>Fill Your Form</h2>
            <hr />
            <p>First Name</p>
            <input
              required
              type="text"
              placeholder="First Name"
              value={this.state.value}
              onChange={(e) => this.setState({ firstName: e.target.value })}
            ></input>
            <p>Last Name</p>
            <input
              type="text"
              placeholder="Last Name"
              value={this.state.value}
              onChange={(e) => this.setState({ lastName: e.target.value })}
            ></input>
            <p>Email ID</p>
            <input
              type="email"
              placeholder="Email"
              value={this.state.value}
              onChange={(e) => this.setState({ email: e.target.value })}
            ></input>
            <p className=""> {this.state.setEmailError} </p>
            <br />
            <p>Mobile No.</p>
            <PhoneInput
              placeholder="Enter phone number"
              value={this.state.value}
              onChange={(e) => this.setState({ mobileNumber: e.target.value })}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={this.state.value}
              onChange={(e) => this.setState({ mobileNumber: e.target.value })}
            ></input>
            <p>Adress</p>
            <input
              type="Adress"
              placeholder=""
              value={this.state.value}
              onChange={(e) => this.setState({ adress: e.target.value })}
            ></input>
            <p>Password</p>
            <input
              type="Password"
              placeholder="Enter Your Password"
              value={this.state.value}
              onChange={(e) => this.setState({ password: e.target.value })}
            ></input>
            <br />
            <br />
            <button type="submit" onClick={this.mySubmitHandler}>
              {" "}
              Submit
              {/* <Link to="/List" data={this.state}>Submit</Link> */}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
