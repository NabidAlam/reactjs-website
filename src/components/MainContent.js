import React from "react";
//import '../index.css'
import styled from "styled-components";

const Box = styled.div`
  background-color: #7f7586;
  width: 30%;
  height: auto;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3em;
  color: #fff;
`;
const TextForAccount = styled.h1`
  text-align: center;
  color: #fff;
`;

const FormInput = styled.div`
  padding: 35px;
  text-align: center;
`;
const InlineForm = styled.div`
  display: flex;
  padding: 4px;
`;

const Label = styled.div`
  float: left;
  width: 40%;
  text-align: right;
`;

const TextBox = styled.div`
  float: left;
  width: 60%;
`;

const InputText = styled.input`
  width: 98%;
  border-radius: 5px;
  border: none;
  padding: 5px;
  background-color: #f1f1f1;
`;

const Button = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const ButtonPrimary = styled.input`
  color: white;
  background-color: #1cb4ea;
  padding: 10px 30px;
  border: 0;
  border-color: 1px solid;
  border: 1px solid;
`;

const LabelText = styled.span`
  margin-right: 40px;
  color: white;
`;

function MainContent() {
  return (
    <Box>
      <Title>Sign Up</Title>
      <TextForAccount>
        Please fill in this form to create an account.
      </TextForAccount>

      <FormInput>
        <InlineForm>
          <LabelText>
            <b>Name</b>
          </LabelText>
          <TextBox>
            <InputText type="text" name="name" placeholder="Name" />
          </TextBox>
        </InlineForm>

        <InlineForm>
          <LabelText>
            <b>Email</b>
          </LabelText>
          <TextBox>
            <InputText type="text" name="email" placeholder="Email" />
          </TextBox>
        </InlineForm>

        <InlineForm>
          <LabelText>
            <b>Password</b>
          </LabelText>
          <TextBox>
            <InputText type="password" name="password" placeholder="Password" />
          </TextBox>
        </InlineForm>

        <Button>
          <ButtonPrimary type="button" value="Sign In" />
        </Button>
      </FormInput>
    </Box>

    //   <div className="box">
    //     <div className="title">
    //       <span><b>Sign Up</b></span>
    //     </div>

    //   <div className="textForAcc">
    //     <p>Please fill in this form to create an account.</p>
    //   </div>

    //   <div className="form-inputs">
    //       <div className="inline-form">
    //         <div className="element"><span className="text"><b>Name</b></span></div>
    //         <div className="form-element"><input type="text" name="name" placeholder="Name"></input></div>
    //       </div>
    //       <div className="inline-form">
    //         <div className="element"><span className="text"><b>Email</b></span></div>
    //         <div className="form-element"><input type="text" name="email" placeholder="Email"></input></div>
    //       </div>
    //       <div className="inline-form">
    //         <div className="element"><span className="text"><b>Password</b></span></div>
    //         <div className="form-element"><input type="password" name="password" placeholder="Password"></input></div>
    //       </div>
    //       <div className="inline-form">
    //         <div className="element"><span className="text"><b>Retype Password</b></span></div>
    //         <div className="form-element"><input type="password" name="password" placeholder="Retype Password"></input></div>
    //       </div>
    //       <div className="center divider">
    //         <input className="btn-primary" type="button" value="Sign In"></input>
    //       </div>
    //   </div>
    // </div>
  );
}

export default MainContent;
