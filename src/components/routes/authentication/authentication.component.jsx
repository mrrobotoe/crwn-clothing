import './authentication.styles.scss'

import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from '../../sign-in-form/sign-in-form.component';

import './authentication.styles.scss';

const Authentication = () => {

  return (
    <div className="authentication-container">
      <SignInForm   d/>
      <SignUpForm />
    </div>
  )
}

export default Authentication;