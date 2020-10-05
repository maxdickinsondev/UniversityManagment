import styled from 'styled-components';
import { Layout } from 'antd';

const { Header, Footer } = Layout;

export const HeaderContainer = styled(Header)`
  background: #666666;
`

export const Body = styled.div`
  height: 80vh
`;

export const FooterContainer = styled(Footer)`
  background: #ffffff;
  text-align: center;
  font-style: italic;
`
