import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      authorize: false,
      count: 1,
      
    }
    
    this.usercheck = this.usercheck.bind(this);
    // this.handleInput = this.handleInput.bind(this);
  }
 
//   handleInput(e){
//     return e.target.value ;  
//  }
  usercheck(){
    if(this.props.user.password ===document.querySelector(".form-control").value){
      this.setState({
        authorize:true
      })
    }else{
      this.setState({
        count:this.state.count+1
      })
      alert('Username or password does not match');
      if(this.state.count === 3){
        document.querySelector(".form-control").disabled = true;
        document.querySelector(".btn-primary").disabled = true;
        setTimeout(()=>{
          document.querySelector(".form-control").disabled = false;
          document.querySelector(".btn-primary").disabled = false;
        }, 3000)
      }
    }
    // document.querySelector(".form-control").value = ""
   }
   
  render() {
    
let login = (
  <div className="card">
        <form class="form-inline" action='#'>
          <div class="form-group">
            <input type="password" class="form-control mx-sm-3" placeholder="Password" /* onInput={this.handleInput} *//>
            <button type="submit" class="btn btn-primary" onClick={this.usercheck}>Submit</button>
          </div>
        </form>
      </div>
);
  let contact =(
    <div className="card">
      <div className="top">
        <h2 className='name'>{this.props.user.name}</h2>
        <img className='circle-img 'src={this.props.user.imgURL}/>
      </div>
      <div className="bottom">
        <h3 className="info">{this.props.user.phone}</h3> 
        <h3 className="info">{this.props.user.email}</h3>
      </div>
    </div>
  )
  
return (
  <div id="authorization"> 
    <div>{this.state.authorize ===false ? <div><h1>Enter the Password</h1>{login}</div>: <div><h1>Contact Profile</h1>{contact}</div>  }</div> 
    
  </div>
)
  }
}


export default Login;