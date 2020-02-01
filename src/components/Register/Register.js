import React , {Component}from 'react';
import firebase from '../../Firebase';

class Register extends Component{

    constructor(props){
        super(props);
        this.formSub = this.formSub.bind(this);
        this.db = firebase.firestore();
        console.log(this.db);
        }

    

    formSub = () =>{
        console.log("submitted");
        //this is the error ! 
        //#lols     
        let docRef = this.db.collection('users').doc('alovelace');
        console.log(docRef);
        docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
        });
   
    }

    componentDidMount(){

    }
    render(){
        return(
            <form onSubmit={this.formSub}>
                <h5>Register</h5>

                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Name" />
                    <label htmlFor="phone">Phone No</label>
                    <input type="number" id="phone" placeholder="Phone" />
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Username" />
                    <label htmlFor="passwd">Password</label>
                    <input type="password" id="passwd" placeholder="Password" />
                    <input type="submit" title="submit"></input>
                </form>
        );
    }
}
export default Register;



