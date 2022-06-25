import { useRouter } from 'next/router';

import UserProfile from '@components/image/UserProfile';

import ChebronRightIcon from '@assets/icons/ChebronRightIcon';
import ProfileDefaultImg from '@assets/images/ProfileDefaultImg';

import {
  UserDataWrap,
  UserProfileDataWrap,
  UserName,
  UserDefaultName,
} from './UserData.style';

import { IProfile } from '@_types/user-type';

function UserData({ profile }: IProfile) {
  const router = useRouter();

  return (
    <UserDataWrap>
      <UserProfileDataWrap>
        {profile ? (
          <UserProfile src={profile.imageUrl} width="56" height="56" />
        ) : (
          <ProfileDefaultImg width="56" height="56" />
        )}
        {profile ? (
          <UserName>{profile.name}</UserName>
        ) : (
          <UserDefaultName>
            로그인을 하시면
            <br />더 많은 기능을 이용할 수 있어요!
          </UserDefaultName>
        )}
      </UserProfileDataWrap>
      <button
        onClick={() => {
          router.push('/user/mypage/edit');
        }}
      >
        <ChebronRightIcon />
      </button>
    </UserDataWrap>
  );
}

export default UserData;
