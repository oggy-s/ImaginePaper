import React, {Component} from 'react';
import './Login.css';


//
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

// FB - 상훈 페북계정
// GG - 상훈 구글개발자계정


const fbKey="283284919072590";
const ggKey='993546596226-8hogjmlhqibf05v98ed8q8l0cqhct7ij.apps.googleusercontent.com';

class Login extends Component {




  handleFBCallback = (res) => {
    console.log("====== handleFBCallback ======")
    console.log('res : ', res);
    /*
      accessToken
      data-access-expiration_time
      email
      expiresIn
      id
      picutre.data.url
      name
      reauthorize_required_in
      signedRequest
      userId
    */
  }

  handleGGSucc = (res) => {
    console.log('====== handleGGSucc ======')
    console.log('res : ', res);
    /*
      Zi
        access_token
        expires_at
        expires_in
        first_issued_at
        id_token
        idpId
        login_hint
        scope
        session_state.extraQueryParams.authuser
        token_type
      accessToken
      googleId
      profileObj
        email
        familyName
        givenName
        googleId
        imgageUrl
        name
      tokenId
      tokenObj
    */
  }

  handleGGFail = (err) => {
    console.log('====== handleGGFail ======')
    console.log('err : ', err);
  }

  render() {

    const {
      handleFBCallback,
      handleGGSucc,
      handleGGFail
    } = this;

    return(
      <div>
        Login~
        <FacebookLogin
          appId={fbKey}
          autoLoad={false}
          fields="name,email,picture"
          scope="public_profile"
          callback={handleFBCallback}
        />

        <GoogleLogin
          clientId={ggKey}
          buttonText="Login with Google"
          onSuccess={handleGGSucc}
          onFailure={handleGGFail}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  } 
    
          
}

export default Login