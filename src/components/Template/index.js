import React from 'react';

import { Layout, Menu } from 'antd';

import { Body, HeaderContainer, FooterContainer } from './styles';

import 'antd/dist/antd.css';

export default function Template({ children }) {
  return (
    <>
      <Layout style={{ background: '#f0f2f5' }}>
        <HeaderContainer className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ background: '#666666' }}
          >
            <Menu.Item key="1">Solicitar estágio</Menu.Item>
            <Menu.Item key="2">Visualizar estágio</Menu.Item>
            <Menu.Item key="3">Solicitar segunda chamada</Menu.Item>
          </Menu>
        </HeaderContainer>
        <Body>{children}</Body>
        <FooterContainer>Created by Katioros</FooterContainer>
      </Layout>
    </>
  );
}
