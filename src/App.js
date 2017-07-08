import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';

class App extends Component {

   constructor(props) {
      super(props);
      this.state = {
         currentItem: '',
         userName: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   render() {
      return (
         <div className='app'>
            <header>
               <div className='wrapper'>
                  <h1>Fun Food Friends</h1>
               </div>
            </header>

            <div className='container'>
               <section className='add-item'>
                  <form onSubmit={ this.handleSubmit }>
                     <input
                        type="text"
                        name="userName"
                        placeholder="What's your name?"
                        onChange={ this.handleChange }
                        value={ this.state.userName }/>
                     <input
                        type="text"
                        name="currentItem"
                        placeholder="What are you bringing?"
                        onChange={ this.handleChange }
                        value={ this.state.currentItem }/>
                     <button>Add Item</button>
                  </form>
               </section>
               <section className='display-item'>
                  <div className='wrapper'>
                     <ul></ul>
                  </div>
               </section>
            </div>
         </div>
      );
   }

   handleChange(e) {
      console.log(e);
      console.log(`target name: ${ e.target.name } value: ${ e.target.value }`);
      this.setState({
         [e.target.name]: e.target.value
      });
   }

   handleSubmit(e) {
      e.preventDefault();
      const itemsRef = firebase.database().ref('items');
      const item = {
         title: this.state.currentItem,
         user: this.state.userName
      };
      itemsRef.push(item);
      this.resetState();
   }

   resetState() {
      this.setState({
         currentItem: '',
         userName: ''
      });
   }
}

export default App;
