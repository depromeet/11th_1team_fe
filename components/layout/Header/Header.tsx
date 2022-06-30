import { useState, useEffect } from 'react';

import HeaderLeftMenu from './HeaderLeftMenu';
import HeaderRightMenu from './HeaderRightMenu';

import useScroll from '@hooks/useScroll';

import { HeaderWrap, Title } from './Header.style';

type HeaderLeft = '로고' | '뒤로가기' | '없음';
type HeaderRight = '검색' | '공유하기' | '없음';

type HeaderProps = {
  headerLeft: HeaderLeft;
  headerTitle?: string | undefined;
  headerColor?: string | undefined;
  headerRight: HeaderRight;
};

function Header({
  headerLeft,
  headerTitle,
  headerColor,
  headerRight,
}: HeaderProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const isScrolled = useScroll();

  return (
    <HeaderWrap headerColor={isScrolled ? '#FFFFFF' : headerColor}>
      {!isSSR && (
        <>
          <HeaderLeftMenu headerLeft={headerLeft} headerColor={headerColor} />
          {headerTitle && <Title>{headerTitle}</Title>}
          <HeaderRightMenu
            headerRight={headerRight}
            headerColor={headerColor}
          />
        </>
      )}
    </HeaderWrap>
  );
}

export default Header;
