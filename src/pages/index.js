import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import Layout from "../components/Layout"

const Home = () => (
  <Layout>
    <Helmet
      title="Ana Sayfa"
      titleTemplate="%s | Ömer Gülçiçek"
    />

    <GetInTouch>
      <h3>Site mi yaptırmak istiyorsunuz?</h3>
      <p>Tüm detayları içeren bir mail atabilirsin.</p>

      <Button>
        <span>iletisim@omergulcicek.com</span>

        <svg width="14" height="10"><g stroke="currentColor" fill="none" fillRule="evenodd"><path d="M8.5.964L13.036 5.5 8.5 10.036"></path><path d="M12.5 5.5H.5" strokeLinecap="square"></path></g></svg>
      </Button>
    </GetInTouch>

  </Layout>
)

export default Home

const GetInTouch = styled.div`
  color: var(--c-text);
  font-size: 40px;
  line-height: 48px;
  padding-bottom: 192px;
  padding-top: 192px;
  text-align: center;

  h3 {
    font-weight: 100;
    margin: 0 0 12px;
  }

  p {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 40px;
  }
`

const Button = styled.a`
  color: var(--c-theme);
  cursor: pointer;
  display: block;
  font-size: var(--f-size);
  line-height: 1;
  transition: var(--g-transition);

  span {
    letter-spacing: 1px;
  }

  svg {
    margin-left: 8px;
    transition: var(--g-transition);
  }

  &:hover {
    svg {
      transform: translateX(0.25em);
    }
  }
`