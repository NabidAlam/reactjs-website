import React from 'react'
import '../index.css'
function MainContent(){
    return (
      // <form action="/action_page.php">
      //  <fieldset>
      //     <div class="container">
      //       <h1>Sign Up</h1>
      //       <p>Please fill in this form to create an account.</p>
      //       <hr/>
        

      //       <label for="userName"><b>Name</b></label>
      //       <input type="text" placeholder="Enter Name" name="userName"/>
      //       <br/>


      //       <label for="email"><b>Email</b></label>
      //       <input type="text" placeholder="Enter Email" name="email" required/>
      //       <br/>
        
      //       <label for="psw"><b>Password</b></label>
      //       <input type="password" placeholder="Enter Password" name="psw" required/>
      //       <br/>
      //       <label for="psw-repeat"><b>Repeat Password</b></label>
      //       <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
      //       <br/>
      //       <label>
      //         <input type="checkbox" checked="checked" name="remember"/> Remember me
      //       </label>
      //       <br/>
      //       <p>By creating an account you agree to our Terms & Privacy.</p>
        
      //       <div class="clearfix">
      //         <button type="button" class="cancelbtn">Cancel</button>
      //         <button type="submit" class="signupbtn">Sign Up</button>
      //       </div>
      //     </div>
      //     </fieldset>
      // </form>

// <div id="form">
//     <form action="" name="registration" class="register">
//         <fieldset>
//             <div class="form-group">
//                 <label for="Student">Name:</label>
//                 <input name="Student" id="Student" />
//             </div>
          
//             <div class="form-group">
//                 <label for="Email">Email:</label>
//                 <input name="Email" id="Email" />
//             </div>
           
//             <div class="form-group">
//                 <label for="Password">Password:</label>
//                 <input name="Password" id="Password" type="password" />
//             </div>
//             {/* <input name="regbutton" type="button" class="button" value="Sign Up" /> */}

//             <div class="clearfix">
//                <button type="button" class="cancelbtn">Cancel</button>
//               <button type="submit" class="signupbtn">Sign Up</button>
//             </div>
//         </fieldset>
//     </form>
// </div>


<div className="box">
<div className="title">
  <span><b>Sign Up</b></span>
</div>

<div className="textForAcc">
  <p>Please fill in this form to create an account.</p>
</div>


<div className="form-inputs">
  <div className="inline-form">
    <div className="element"><span className="text"><b>Name</b></span></div>
    <div className="form-element"><input type="text" name="name" placeholder="Name"></input></div>
  </div>
  <div className="inline-form">
    <div className="element"><span className="text"><b>Email</b></span></div>
    <div className="form-element"><input type="text" name="email" placeholder="Email"></input></div>
  </div>
  <div className="inline-form">
    <div className="element"><span className="text"><b>Password</b></span></div>
    <div className="form-element"><input type="password" name="password" placeholder="Password"></input></div>
  </div>
  <div className="inline-form">
    <div className="element"><span className="text"><b>Retype Password</b></span></div>
    <div className="form-element"><input type="password" name="password" placeholder="Retype Password"></input></div>
  </div>
  <div className="center divider">
    <input className="btn-primary" type="button" value="Sign In"></input>
  </div>
</div>
</div>

    )
}

export default MainContent