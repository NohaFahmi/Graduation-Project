import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { addUser } from '../actions';

class Register extends Component {
    constructor() {
        super();

        this.state ={
            name: '',
            age: '',
            email: '',
            avatar: '',
            id: '',
        }
    }
    redirectToTarget = () => {
        this.props.history.push('/users');
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("SUBMIT", this.state);
        this.props.addUser(this.state);
        this.redirectToTarget();
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            avatar: 'img-10',
            id: Math.floor(Math.random() * (20 - 6 + 1)) + 6
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <input type="text" placeholder="Full Name" name="name" required onChange={this.handleChange}/>
                    <input type="number" placeholder="Age" name="age" required  onChange={this.handleChange} max="60" min="18" />
                    <input type="email" placeholder="Email" name="email" required  onChange={this.handleChange}/>
                    
                    <input type="submit" value="Register" />
                    

                </form>
            </div>
        );
    }

    componentDidMount() {
        console.log(this.props);

    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addUser}, dispatch);
}
export default connect(null, mapDispatchToProps)(Register);