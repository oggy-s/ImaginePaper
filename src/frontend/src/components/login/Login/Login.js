import React, {Component} from 'react';
import './Login.css';


//
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import KakaoLogin from 'react-kakao-login';
const {naver} = window;

// FB - 상훈 페북계정
// GG - 상훈 구글개발자계정
// KK - 상훈 카카오계정
// NV - 상훈 네이버계정


const fbKey="283284919072590";
const ggKey='993546596226-8hogjmlhqibf05v98ed8q8l0cqhct7ij.apps.googleusercontent.com';
const kkKey='de7fa985689f9279f5532221283975e4';
const nvKey='uMgaC9Kn12UGEbDj5Ng8';

//
//feature test 1 
//feature test 2
//feature test 2-1


class Login extends Component {


  componentDidMount = () => {
    console.log("====== Login Did Mount ======")
    this.handleNVInit();
  }


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



  //
  handleKKSucc = (res) => {
    console.log('====== handleKKSucc ======')
    console.log('res : ', res);
    /*
      profile
        id
        kakao_account
      response
        access_token
        expires_in
        refresh_token
        refresh_token_expires_in
        scope
        token_type        
    */
  }

  handleKKFail = (err) => {
    console.log('====== handleKKFail ======')
    console.log('err : ', err);
  }


  //naver
  handleNVInit = () => {
    let naverLogin = new naver.LoginWithNaverId({
      clientId: nvKey,
      // callbackUrl:'http://localhost:3000',
      callbackHandle: true,
      isPopup: true,
      loginButton: {color: 'green', type: 3, height: 50}
    })

    naverLogin.init();

    window.addEventListener('load', function() {
      
      naverLogin.getLoginStatus(function (status) {
        console.log('status : ', status)
        if (status) {
					/* (5) 필수적으로 받아야하는 프로필 정보가 있다면 callback처리 시점에 체크 */
					var email = naverLogin.user.getEmail();
					if( email == undefined || email == null) {
						alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
						/* (5-1) 사용자 정보 재동의를 위하여 다시 네아로 동의페이지로 이동함 */
						naverLogin.reprompt();
						return;
					}

					window.location.replace('http://localhost:3000');
				} else {
					console.log("callback 처리에 실패하였습니다.");
				}
      })
    })
  }

  handleNVCallback = (res) => {
    console.log("====== handleNVCallback ======")
    console.log('res : ', res)
  }

  


  render() {

    const {
      handleFBCallback,
      handleGGSucc,
      handleGGFail,
      handleKKSucc,
      handleKKFail,
    } = this;

    return(
      <div>
        Login~
        <FacebookLogin
          appId={fbKey}
          autoLoad={false}
          fields="name,email,picture,age_range"
          scope="public_profile"
          callback={handleFBCallback}
          icon="fa-facebook"
        />

        <GoogleLogin
          clientId={ggKey}
          buttonText="Login with Google"
          onSuccess={handleGGSucc}
          onFailure={handleGGFail}
          cookiePolicy={'single_host_origin'}
        />

        <KakaoLogin
          jsKey={kkKey}
          onSuccess={handleKKSucc}
          onFailure={handleKKFail}
          getProfile={true}
          useDefaultStyle={true}
          buttonText="Login with Kakao"
        />

        <div id='naverIdLogin'></div>
      </div>
    )
  } 
    
          
}

export default Login