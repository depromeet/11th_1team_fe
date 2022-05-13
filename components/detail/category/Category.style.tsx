import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderWrapper = styled.div`
  & .slick-slide {
    margin: 0 3px;
  }

  & .slick-list {
    & .slick-track {
      width: 500% !important;
    }
  }
`;
const CategoryCardWrapper = styled.div``;

const CategorySliderCard = styled.div`
  position: relative;
  margin: 20px 0;
  border-radius: 10px;
  background: #f1f1f1;
  width: 20%;
  height: 30%;
`;

const CategoryTitle = styled.p`
  opacity: 0.8;
  margin-top: 12px;
  margin-left: 14px;
  color: ${(props) => props.theme.colors.grayscale.gray_800};
  font-family: Pretendard;
  font-size: 12px;
`;

const CategoryContents = styled.p`
  opacity: 0.8;
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 14px;
  font-size: 16px;
  font-weight: 700;
`;
const ImageContainer = styled.div`
  position: absolute;
  right: 18px;
  bottom: 12px;
  float: left;
`;

const CategoryImg = styled.span<{ type: number; status: number | string }>`
  display: block;
  border-radius: 20%;
  background-image: url(${(props) =>
    props.type == 2
      ? `/assets/platform_${props.status}.png`
      : `/assets/jenre_${props.status}.png`});
  background-size: cover;
  width: 24px;
  height: 24px;
`;

export {
  SliderWrapper,
  CategoryCardWrapper,
  CategorySliderCard,
  CategoryTitle,
  CategoryContents,
  ImageContainer,
  CategoryImg,
};
