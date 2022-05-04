import React, { useRef } from 'react';
import Carousel from '@components/carousel/Carousel';
import useCarousel from '@hooks/useCarousel';
import {
  HomeContainer,
  HomeTopWrapper,
  HomeTopTitleWrapper,
  HomeTopSubTitle,
  HomeTopTitle,
  HomeRealtimeChartWrapper,
  HomeRealtimeChartTitleWrapper,
  HomeSectionWrapper,
  HomeSectionSubTitle,
  HomeSectionTitleWithTimeWrapper,
  HomeSectionTitle,
  HomeSectionTitleWithTime,
  HomeRecommendationWrapper,
  HomeRecommendationBackground,
  HomeWeeklyWrapper,
} from './Home.style';
import RealTimeChart from './RealTimeChart';
import Genres from './Genres';
import Popular from './Popular';
import Recommendation from './Recommendation';
import Weekly from './Weekly';

function Home() {
  const RealTimeChartRef = useRef<HTMLDivElement>(null);
  const GenresRef = useRef<HTMLDivElement>(null);
  const PopularRef = useRef<HTMLDivElement>(null);
  const RecommendationRef = useRef<HTMLDivElement>(null);

  useCarousel(RealTimeChartRef);
  useCarousel(GenresRef);
  useCarousel(PopularRef);
  useCarousel(RecommendationRef);

  return (
    <>
      <HomeContainer>
        <HomeTopWrapper>
          <HomeTopTitleWrapper>
            <HomeTopSubTitle>열심히일하는일개미님</HomeTopSubTitle>
            <HomeTopTitle>오늘은 어떤 웹툰에 탑승할까요?</HomeTopTitle>
          </HomeTopTitleWrapper>
        </HomeTopWrapper>
        <HomeRealtimeChartWrapper>
          <HomeRealtimeChartTitleWrapper>
            <HomeSectionSubTitle>다같이 영차영차!</HomeSectionSubTitle>
            <HomeSectionTitleWithTimeWrapper>
              <HomeSectionTitle>실시간 차트</HomeSectionTitle>
              <HomeSectionTitleWithTime>14:00 기준</HomeSectionTitleWithTime>
            </HomeSectionTitleWithTimeWrapper>
          </HomeRealtimeChartTitleWrapper>
          <Carousel ref={RealTimeChartRef}>
            <RealTimeChart />
          </Carousel>
        </HomeRealtimeChartWrapper>
        <HomeSectionWrapper>
          <HomeSectionSubTitle>어떤 장르가 좋을까?</HomeSectionSubTitle>
          <HomeSectionTitle>장르별 툰툰</HomeSectionTitle>
          <Carousel ref={GenresRef}>
            <Genres />
          </Carousel>
        </HomeSectionWrapper>
        <HomeSectionWrapper>
          <HomeSectionSubTitle>상한가 열차 탑승!</HomeSectionSubTitle>
          <HomeSectionTitle>상승 중인 툰툰</HomeSectionTitle>
          <Carousel ref={PopularRef}>
            <Popular />
          </Carousel>
        </HomeSectionWrapper>
        <HomeRecommendationWrapper>
          <HomeRecommendationBackground>
            <HomeSectionSubTitle>이건 탑승해야 돼</HomeSectionSubTitle>
            <HomeSectionTitle>20대 개미들이 즐겨봐요</HomeSectionTitle>
            <Carousel ref={RecommendationRef}>
              <Recommendation />
            </Carousel>
          </HomeRecommendationBackground>
        </HomeRecommendationWrapper>
        <HomeWeeklyWrapper>
          <HomeSectionSubTitle>개미는 오늘도 줍줍</HomeSectionSubTitle>
          <HomeSectionTitle>요일별 툰툰</HomeSectionTitle>
          <Weekly />
        </HomeWeeklyWrapper>
      </HomeContainer>
    </>
  );
}

export default Home;
