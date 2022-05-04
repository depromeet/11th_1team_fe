import Link from 'next/link';

import Intro from './Intro';
import SocialSignIn from './SocialSignIn';

import { SignInWrap, GoToMain } from './SignInMain.style';

function SignInMain() {
  return (
    <SignInWrap>
      <Intro />
      <SocialSignIn />
      <Link href="/" passHref>
        <a>
          <GoToMain>개미는툰툰 둘러보기 &gt;</GoToMain>
        </a>
      </Link>
    </SignInWrap>
  );
}

export default SignInMain;
