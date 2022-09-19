import { useState } from "react";

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

import FormInput from "../components/form-input/form-input.component";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../components/button/button.component";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoggle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setFormFields({ defaultFormFields });
    } catch (error) {
      console.log("user sign in failed", error);
      // if (error.code === "auth/email-already-in-use") {
      //   alert("email already in used, cannot create user");
      // } else {
      //   switch (error.code) {
      //     case "auth/wrong-password":
      //       alert("Incorrect password for email");
      //       break;
      //     case "auth/user-not-found":
      //       alert("Email not found, pleaes create an account");
      //       break;
      //     default:
      //       alert("Oops, something happened. Please try again later");
      //       break;
      //   }
      //   console.log("user creation encountered an error", error);
      // }

      return;
    }

    setFormFields({
      email: "",
      password: "",
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
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button type="submit" aria-label="sign-in-button">
            Sign In
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoggle}
            aria-label="sign-in-with-google"
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
