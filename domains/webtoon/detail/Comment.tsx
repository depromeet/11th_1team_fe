import { comments } from './Comment.data';

import {
  Title,
  CommentWrap,
  MainWrap,
  UserInfo,
  Name,
  TimeStamp,
  Content,
  FavoriteWrap,
  Favorite,
  CommentWrapper,
} from './Comment.style';

import ProfileImg from '@components/image/UserProfile';
import FavoriteBtn from '@components/button/FavoriteBtn';
import CommentTextInput from '@components/detail/commentTextInput/commentTextInput';

function Comment() {
  const data = comments;

  return (
    <>
      <CommentWrapper>
        <Title>개미들의 행진 {data.length}</Title>
        <CommentTextInput length={data.length} />
        {data.map((data) => {
          return (
            <CommentWrap key={data.id}>
              <ProfileImg
                src={data.profileimg}
                width="3.2rem"
                height="3.2rem"
              />
              <MainWrap>
                <UserInfo>
                  <Name>{data.name}</Name>
                  <TimeStamp>{data.timestamp}분전</TimeStamp>
                </UserInfo>
                <Content>{data.content}</Content>
                <FavoriteWrap>
                  <FavoriteBtn isFavoriteChecked={data.isFavoriteChecked} />
                  <Favorite>{data.favorite}</Favorite>
                </FavoriteWrap>
              </MainWrap>
            </CommentWrap>
          );
        })}
      </CommentWrapper>
    </>
  );
}

export default Comment;
