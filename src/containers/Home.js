import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {filterUsers} from '../actions';
import { Link } from 'react-router-dom';


import UsersList from './users-list';

class Home extends Component {

    constructor() {
        super();

        this.state = {
            keywords: ''
        }
    }

    render() {
        return (
            <div>
                <Link to="/register" className="link">
                    <button type='button' className='reg-btn'>add user</button>
                </Link>
                
                <input type='text' placeholder="search by name" onChange={(e) => {this.setState({keywords: e.target.value})}} value={this.state.keywords} />
    
                <UsersList />
            </div>
        );
    }

    componentDidUpdate() {
        this.props.filterUsers(this.state.keywords);
        console.log("UPDATED", this.props);
    }
}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({filterUsers}, dispatch);
}
export default connect(null, mapDispatchToProps)(Home);