import StepIndicator from '@assets/icons/StepIndicator';
import { Mixpanel } from 'mixpanel';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Background,
  ModalContainer,
  ImageWrapper,
  DescriptionWrapper,
  DescriptionMain,
  DescriptionDetail,
  ButtonContainer,
  IndicatorContainer,
  IndicatorWrapper,
  SkipButton,
  NextButton,
  PrevButton,
  StartButton,
} from './Modal.style';

createPortal;

type Step = 'first' | 'second' | 'third' | 'fourth' | 'fifth';

function Modal() {
  const [modalOpen, setModalOpen] = useState(true);
  const [step, setStep] = useState<Step>('first');
  const [portal, setPortal] = useState<HTMLElement | null>(null);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    document.body.style.cssText = `
        position: fixed;
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;
    `;

    setMount(true);
    setPortal(document.getElementById('onboard-modal'));

    if (localStorage.getItem('antoon-onboard-introduce') === 'true') {
      closeModal();
    }
  }, []);

  const closeModal = () => {
    document.body.style.cssText = '';
    setModalOpen(false);
    localStorage.setItem('antoon-onboard-introduce', 'true');
  };

  const onStep = (step: Step) => {
    setStep(step);
  };

  const onSkip = () => {
    Mixpanel.track('온보딩', {
      type: 'modal',
      event: 'skip',
    });

    closeModal();
  };

  const onFinish = () => {
    Mixpanel.track('온보딩', {
      type: 'modal',
      event: 'finish',
    });

    closeModal();
  };

  const First = (
    <>
      <ImageWrapper>
        <Image
          src="/images/onboarding_introduce_01.png"
          alt="개미의 탑승/하차는 웹툰 차트에 반영돼요!"
          width={312}
          height={200}
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <DescriptionMain>
          개미의 탑승/하차는
          <br />
          웹툰 차트에 반영돼요!
        </DescriptionMain>
        <DescriptionDetail>
          한 웹툰의 탑승/하차는 하루에 한번 가능!
          <br />낮 12시에 투표가 열려요.
        </DescriptionDetail>
      </DescriptionWrapper>
      <ButtonContainer>
        <SkipButton onClick={onSkip}>건너뛰기</SkipButton>
        <IndicatorContainer>
          <IndicatorWrapper onClick={() => onStep('first')} currentStep={true}>
            <StepIndicator active={true} />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('second')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('third')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('fourth')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('fifth')}>
            <StepIndicator />
          </IndicatorWrapper>
        </IndicatorContainer>
        <NextButton onClick={() => onStep('second')}>다음</NextButton>
      </ButtonContainer>
    </>
  );

  const Second = (
    <>
      <ImageWrapper>
        <Image
          src="/images/onboarding_introduce_02.png"
          alt="투표는 하루에 한번 가능해요."
          width={312}
          height={200}
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <DescriptionMain>
          좋아하는 인물과 커플 주식에
          <br />
          탑승할 수 있어요!
        </DescriptionMain>
        <DescriptionDetail>
          댓글에만 존재했던 등장인물 주식,
          <br />
          안트코인으로 직접 탑승해보세요!
        </DescriptionDetail>
      </DescriptionWrapper>
      <ButtonContainer>
        <PrevButton onClick={() => onStep('first')}>이전</PrevButton>
        <IndicatorContainer>
          <IndicatorWrapper onClick={() => onStep('first')} currentStep={true}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('second')}>
            <StepIndicator active={true} />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('third')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('fourth')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('fifth')}>
            <StepIndicator />
          </IndicatorWrapper>
        </IndicatorContainer>
        <NextButton onClick={() => onStep('third')}>다음</NextButton>
      </ButtonContainer>
    </>
  );

  const Third = (
    <>
      <ImageWrapper>
        <Image
          src="/images/onboarding_introduce_03.png"
          alt="개미들의 행진에 동참해보세요!"
          width={312}
          height={200}
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <DescriptionMain>
          안트코인을 사용해
          <br />
          관심있는 주제에 투표하세요!
        </DescriptionMain>
        <DescriptionDetail>
          댓글로만 소통했던 웹툰 떡밥,
          <br />
          이제는 A/B, 초이스로 해봐요!
        </DescriptionDetail>
      </DescriptionWrapper>
      <ButtonContainer>
        <PrevButton onClick={() => onStep('second')}>이전</PrevButton>
        <IndicatorContainer>
          <IndicatorWrapper onClick={() => onStep('first')} currentStep={true}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('second')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('third')}>
            <StepIndicator active={true} />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('fourth')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('fifth')}>
            <StepIndicator />
          </IndicatorWrapper>
        </IndicatorContainer>
        <NextButton onClick={() => onStep('fourth')}>다음</NextButton>
      </ButtonContainer>
    </>
  );

  const Fourth = (
    <>
      <ImageWrapper>
        <Image
          src="/images/onboarding_introduce_04.png"
          alt="개미들의 행진에 동참해보세요!"
          width={312}
          height={200}
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <DescriptionMain>
          안트코인은
          <br />
          쉽게 모을 수 있어요!
        </DescriptionMain>
        <DescriptionDetail>
          웹툰 탑승/하차와 참여한 투표에
          <br />
          이기면 안트코인을 지급해줘요!
        </DescriptionDetail>
      </DescriptionWrapper>
      <ButtonContainer>
        <PrevButton onClick={() => onStep('third')}>이전</PrevButton>
        <IndicatorContainer>
          <IndicatorWrapper onClick={() => onStep('first')} currentStep={true}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('second')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('third')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('fourth')}>
            <StepIndicator active={true} />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('fifth')}>
            <StepIndicator />
          </IndicatorWrapper>
        </IndicatorContainer>
        <NextButton onClick={() => onStep('fifth')}>다음</NextButton>
      </ButtonContainer>
    </>
  );

  const Fifth = (
    <>
      <ImageWrapper>
        <Image
          src="/images/onboarding_introduce_05.png"
          alt="개미들의 행진에 동참해보세요!"
          width={312}
          height={200}
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <DescriptionMain>
          모든 웹툰의 떡밥을
          <br />
          개미는 툰툰에서!
        </DescriptionMain>
        <DescriptionDetail>
          댓글을 통해 개미들과
          <br />
          열띤 토론을 나눠보세요!
        </DescriptionDetail>
      </DescriptionWrapper>
      <ButtonContainer>
        <PrevButton onClick={() => onStep('fourth')}>이전</PrevButton>
        <IndicatorContainer>
          <IndicatorWrapper onClick={() => onStep('first')} currentStep={true}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('second')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('third')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('fourth')}>
            <StepIndicator />
          </IndicatorWrapper>
          <IndicatorWrapper onClick={() => onStep('fifth')}>
            <StepIndicator active={true} />
          </IndicatorWrapper>
        </IndicatorContainer>
        <StartButton onClick={onFinish}>시작하기</StartButton>
      </ButtonContainer>
    </>
  );

  const renderContent = useCallback(() => {
    switch (step) {
      case 'first':
        return First;
      case 'second':
        return Second;
      case 'third':
        return Third;
      case 'fourth':
        return Fourth;
      case 'fifth':
        return Fifth;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  return mount
    ? createPortal(
        <>
          {modalOpen && (
            <Background>
              <ModalContainer>{renderContent()}</ModalContainer>
            </Background>
          )}
        </>,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        portal!,
      )
    : null;
}

export default Modal;
