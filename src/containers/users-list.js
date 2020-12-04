import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
 
class UsersList extends Component {
    
    render() {
        return (
            <div className="cards">
                {this.renderUsersList(this.props)}
            </div>
        )
    }

    renderUsersList({users}) {
        if(users) {
            return users.map( (user) => {
                return(
                    <div className="user-card" key={user.id}>
                        <div className="img-container"><img src={`./images/${user.avatar}.png`} alt={user.name}/></div>
                        <h3 className="name">{user.name}</h3>
                        <p className="age"> {user.age} </p>
                        <h4 className="email">{user.email}</h4>
                    </div>
                );
            })
        }

        return <p>NO USERS AVAILABLE</p>
    }
    componentDidMount() {
        this.props.getAllUsers();
        // console.log("UPDATED", this.props);
    }
}

const mapStateToProps = (state) => {

    console.log('NEW STATE', state);
    return {
        users: state.users.list
    }
}
export default connect(mapStateToProps, actions)(UsersList);