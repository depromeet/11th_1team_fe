import styled from '@emotion/styled';

// TODO: 공통 레이아웃으로 변경
const DefaultLayout = styled.div`
  max-width: 1024px;
  height: 100vh;
`;

// TODO: 공통 헤더로 변경
const DefaultHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2.4rem;
  height: 56px;
`;

const HomeContainer = styled.main``;

const HomeTopWrapper = styled.section`
  padding: ${(props) => props.theme.padding.layout};
  padding-top: 0.8rem;
`;

const HomeTopTitleWrapper = styled.div`
  display: inline-block;
  align-items: flex-start;
  padding-top: 0.8rem;
  height: 200px;
`;

const HomeTopSubTitle = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
`;

const HomeTopTitle = styled.h1`
  padding-top: 0.4rem;
  width: 200px;
  font-size: 2.4rem;
  font-weight: bold;
`;

const HomeSectionWrapper = styled.section`
  padding: ${(props) => props.theme.padding.layout_carousel};
  padding-top: 3rem;
`;

const HomeSectionSubTitle = styled.small`
  color: ${(props) => props.theme.colors.grey_400};
  font-size: 1.2rem;
`;

const HomeSectionTitleWithTimeWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding: 0.6rem 0 1.6rem;

  > header {
    padding: unset;
  }
`;

const HomeSectionTitle = styled.header`
  padding: 0.6rem 0 1.6rem;
  font-size: 2.4rem;
  font-weight: bold;
`;

const HomeSectionTitleWithTime = styled.span`
  padding-left: 0.6rem;
  color: ${(props) => props.theme.colors.grey_500};
  font-size: 1.2rem;
`;

const HomeRecommendationWrapper = styled.section`
  padding: 3rem 0;
`;

const HomeRecommendationBackground = styled.div`
  background-color: #f5f7fa;
  padding: ${(props) => props.theme.padding.layout_carousel};
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export {
  DefaultLayout,
  DefaultHeader,
  HomeContainer,
  HomeTopWrapper,
  HomeTopTitleWrapper,
  HomeTopSubTitle,
  HomeTopTitle,
  HomeSectionWrapper,
  HomeSectionSubTitle,
  HomeSectionTitleWithTimeWrapper,
  HomeSectionTitle,
  HomeSectionTitleWithTime,
  HomeRecommendationWrapper,
  HomeRecommendationBackground,
};
