import styled from "styled-components"

export const AlignCenter = styled.div`
  align-items: center;
  display: flex;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  margin: auto;
  max-width: 80%;

  @media (min-width: 1024px) {
    max-width: 800px;
  }
`;

/*-----------*/

export const Section = styled.section`
  margin-bottom: 80px;
`;

export const Title = styled.h1`
  color: var(--text-color);
  font-weight: 700;
  font-size: 22px;
  margin: 0 0 24px;
  position: relative;

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const JumpTitle = styled(Title)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.div`
  margin-bottom: 40px;

  p {
    font-size: 18px;
  }
`;

export const ViewAll = styled.span`
  background-color: rgba(0, 0, 0, .1);
  border-radius: 4px;
  color: var(--text-grey-dark);
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  font-weight: 400;
  line-height: 2;
  margin-left: 1rem;
  padding-left: .5rem;
  padding-right: .5rem;
  transition: 0.1s all ease-out;
  white-space: nowrap;

  &:hover {
    background-color: rgba(0, 0, 0, .15);
  }

  a {
    color: inherit;
    display: block;
  }
`;

export const FooterWrap = styled.footer`
  background-color: var(--background-footer);
  border-top: 2px solid rgba(0,0,0,.1);;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding-top: 24px;
`;

export const FooterSubWrap = styled(AlignCenter)`
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Copyright = styled.span`
  color: #a6a6a6;
`;

export const Gap = styled.div`
  padding-bottom: 24px;
`;

export const Social = styled.a`
  display: inline-block;
  margin-right: 16px;
  transition: 0.1s all ease-out;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const HeaderWrap = styled.header`
  background-color: var(--background-color);
  padding-bottom: 24px;
  padding-top: 24px;
  position: sticky;
  top: 0;
  transition: 0.2s padding ease-out;
  z-index: 1;
  
  &.active {
    border-bottom: 2px solid rgba(0,0,0,.1);
    padding-bottom: 8px;
    padding-top: 8px;
  }
`;

export const HeaderFlex = styled(AlignCenter)`
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  max-width: 80%;

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 800px;
  }
`;

export const HeaderBrand = styled.span`
  animation: dotBricks 5s infinite ease;
  border-radius: 4px;
  display: none;
  font-size: 24px;
  height: 8px;
  margin-bottom: 32px;
  margin-left: 8px;
  left: -9999px;
  padding: 1px;
  position: relative;
  top: 8px;
  width: 8px;

  @media (min-width: 1024px) {
    display: block;
    margin-bottom: 0;
  }
`;

export const HeaderNav = styled.nav`
  a {
    color: var(--text-color);
    display: inline-block;
    font-weight: 600;
    opacity: 0.5;
    margin-right: 20px;
    padding: 12px 0;
  
    @media (min-width: 1024px) {
      padding-left: 8px;
      padding-right: 8px;
    }

    &[aria-current="page"] {
      opacity: 1;
      text-decoration: underline;
    }
  }
`;

export const HeaderNavWrap = styled(AlignCenter)`
  justify-content: space-between;
  width: 100%;

  @media (min-width: 1024px) {
    width: auto;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  outline: none;

  &:active {
    transform: scale(0.9)
  }
`;

export const DarkMode = styled.img`
  cursor:pointer;
  height: 22px;
`;

export const Main = styled.main`
  flex: 1;
  margin: 40px auto;
  width: 80%;

  @media (min-width: 1024px) {
    margin: 124px auto 80px;
    max-width: 800px;
  }
`;

export const TypeItWrap = styled.section`
  font-size: 24px;
  line-height: 1.4;
  min-height: 200px;

  @media (min-width: 1024px) {
    font-size: 54px;
    line-height: 1.75;
    margin-bottom: 120px;
    margin-top: 80px;
    min-height: 264px;
  }

  p {
    color: var(--text-grey);
    margin-top: 8px
  }
`;

export const PostArticle = styled.article`
  align-items: center;
  border-radius: 8px;
  display: flex;
  padding: 16px;

  &:hover {
    background-color: rgba(0,0,0,.025);
  }
`;

export const Figure = styled.figure`
  margin: 0 32px 0 0;
`;

export const PostTitle = styled.span`
  color: var(--text-color);
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Time = styled.time`
  color: #999;
  display: block;
  font-size: 13px;
  font-weight: 400;
  text-transform: capitalize;
`;

export const A = styled.a`
  background-color: transparent;
  border-radius: 2px;
  color: #191919;
  cursor: pointer;
  margin-right: 2px;
  overflow: hidden;
  padding: 0 2px;
  text-decoration: none;
  transition: box-shadow .2s;

  &:hover {
    text-decoration: none;
  }
`;

export const Turkuaz = styled(A)`
  box-shadow: 0 10px 0 0 rgba(38,166,154,0),inset 0 -.125em rgba(38,166,154,.2);

  &:hover {
    box-shadow: 0 1px 0 4px rgba(38,166,154,.1),inset 0 -1.375em 0 rgba(38,166,154,.1);
    color: #26a69a
  }
`;

export const TurkceDokuman = styled(A)`
  box-shadow: 0 10px 0 0 rgba(244,67,54,0),inset 0 -.125em rgba(244,67,54,.2);

  &:hover {
    box-shadow: 0 1px 0 4px rgba(244,67,54,.1),inset 0 -1.375em 0 rgba(244,67,54,.1);
    color: #f44336;
  }
`;

export const GitHub = styled(A)`
  box-shadow: 0 10px 0 0 rgba(51,51,51,0),inset 0 -.125em rgba(51,51,51,.2);

  &:hover {
    box-shadow: 0 1px 0 4px rgba(51,51,51,.1),inset 0 -1.375em 0 rgba(51,51,51,.1);
    color: #333;
  }
`;

export const Mail = styled(A)`
  box-shadow: 0 10px 0 0 rgba(255,202,40,0),inset 0 -.125em rgba(255,202,40,.2);

  &:hover {
    box-shadow: 0 1px 0 4px rgba(255,202,40,.1),inset 0 -1.375em 0 rgba(255,202,40,.1);
    color: #ffca28;
  }
`;

export const AboutTitle = styled(Title)`
  margin-bottom: 24px;

  @media (min-width: 1024px) {
    margin-bottom: 40px;
  }

  span {
    animation-delay: 2s;
    animation-duration: 5s;
    animation-name: wave;
    animation-iteration-count: infinite;
    display: inline-block;
    position: absolute;
    right: calc(100% + 8px);
    transform-origin: 70% 70%

    @media (min-width: 1024px) {
      display: none;
      right: calc(100% + 16px);
    }
  }
`;

export const Tag = styled.span`
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 4px;
  color: var(--text-color);
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  font-size: 13px;
  margin-bottom: 8px;
  margin-right: 8px;
  overflow: hidden;
  padding: 4px 8px;
  vertical-align: middle;
`;

export const TagDetail = styled.span`
  background-color: rgba(0, 0, 0, .05);
  color: inherit;
  padding-bottom: 4px;
  padding-top: 4px;

  &:first-child:not(:last-child) {
    margin: -8px 4px -8px -12px;
    padding-left: 12px;
    padding-right: 4px;
  }

  &:last-child:not(:first-child) {
    margin: -8px -12px -8px 4px;
    padding-left: 4px;
    padding-right: 12px;
  }
`;

export const Article = styled.article`
  header {
    text-align: center
  }

  h2 {
    color: var(--text-color);
    font-weight: 700;
    font-size: 18px;
    margin: 32px 0 16px;
    position: relative;

    @media (min-width: 1024px) {
      font-size: 32px;
      margin-top: 64px;
    }
  }

  ol,
  ul,
  dl {
    margin-bottom: 16px;
    margin-top: 0;
    padding-left: 0;

    ol,
    ul {
      list-style-type: circle;
      margin-bottom: 0;
      margin-left: 40px;
    }

    &.list--inline li {
      display: inline-block;
      list-style: none;

      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }

  ul,
  dl {
    list-style: none;
  }

  a {
    background-color: transparent;
    color: #2196f3;
    cursor: pointer;
    text-decoration: none;
  
    &:hover {
      text-decoration: underline;
    }
  
    &:focus {
      outline: none;
    }
  
    &:not([href]):not([tabindex]):not(.button) {
      color: inherit;
      cursor: inherit;
      text-decoration: none;
  
      &:hover,
      &:focus {
        color: inherit;
        text-decoration: none;
      }
    }
  
    &:not([class]) {
      text-decoration-skip-ink: auto
    }
  
    b,
    strong,
    code {
      color: inherit;
    }
  }

  img {
    border-style: none;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }

  blockquote  {
    font-size: 20px;
    margin: 0 0 16px;
    padding: 16px 32px;
  
    p {
      margin-bottom: 0;
      margin-top: 0;
    }
    
    &:not(:last-of-type) {
      margin-bottom: 0;
    }
  
    footer {
      color: var(--color-text);
      font-size: 80%;
  
      &::before {
        content: "—";
      }
    }
  }

  table {
    background-color: var(--color-background);
    border-collapse: collapse;
    border-spacing: 0;
    color: var(--color-text);
    margin-bottom: 16px;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
  
    thead th {
      border-bottom: 2px solid #f5f5f5;
      text-align: left;
    }
  
    th,
    td {
      padding: 12px 16px;
    }
    
    th {
      border: 1px solid #f5f5f5;
      border-bottom: 2px solid #f5f5f5;
    }
    
    td {
      border: 1px solid #f5f5f5;
    }
  }

  hr {
    border: 0;
    background: #f5f5f5;
    display: inline-block;
    height: 2px;
    margin: 0;
    margin-bottom: 16px;
    margin-top: 16px;
    width: 100%;

    @media (min-width: 1024px) {
      margin-bottom: 40px;
      margin-top: 40px;
    }
  }

  code {
    background-color: #f5f5f5;
    border-radius: 4px; 
    color: #191919;
    font-size: 14px;
    font-weight: 400;
    padding: 4px 6px;
    vertical-align: middle;
  }

  pre code {
    background-color: unset;
    border-radius: unset; 
    color: unset;
    font-size: unset;
    font-weight: unset;
    padding: unset;
    vertical-align: unset;
  }

  u {
    font-size: 18px
  }
`;

export const ArticleTitle = styled(Title)`
  margin-bottom: 8px;
  text-align: center;

  @media (min-width: 1024px) {
    margin-bottom: 24px;
  }
`;

export const ArticleDate = styled.span`
  color: #a6a6a6;
  display: inline-block;
  font-size: 14px;
  margin-right: 4px;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const ArticleReadingTime = styled.span`
  color: #a6a6a6;
  display: inline-block;
  font-size: 14px;
  margin-left: 8px;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const ArticleMain = styled.main`
  margin-top: 32px;

  @media (min-width: 1024px) {
    margin-top: 104px;
  }
`;

export const ArticleFooter = styled.div`
  margin-top: 32px;
  
  @media (min-width: 1024px) {
    margin-top: 104px;
  }

  li {
    margin-bottom: 8px;

    a {
      border-bottom: 1px dotted #a2a2a2;
      color: var(--color-text);
      font-size: 14px;

      @media (min-width: 1024px) {
        font-size: 19px;
      }

      &:hover {
        border-bottom-style: solid;
        text-decoration: none
      }
    }
  }
`;

export const PrevNext = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 40px;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin-top: 80px;
  }

  a {
    text-decoration: underline
  }
`