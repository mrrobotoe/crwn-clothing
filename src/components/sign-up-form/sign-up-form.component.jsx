import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName })
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('email already in used, cannot create user');
      }

      else {
        console.log("user creation encountered an error", error);
      }

      return;
    }

    setFormFields({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form  onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          aria-label="display name"
          type="text"
          required
          value={displayName}
          onChange={handleFormChange}
        />

        <FormInput
          label="Email"
          name="email"
          aria-label="email"
          type="email"
          required
          value={email}
          onChange={handleFormChange}
        />

        <FormInput
          label="Password"
          name="password"
          aria-label="password"
          type="password"
          required
          value={password}
          onChange={handleFormChange}
        />

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          aria-label="confirm-password"
          type="password"
          required
          value={confirmPassword}
          onChange={handleFormChange}
        />
        <Button type="submit" aria-label="sign-up-button">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
