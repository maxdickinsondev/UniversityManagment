import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';

import { Body, HeaderContainer, FooterContainer } from './styles';

import 'antd/dist/antd.css';

export default function Template({ children }) {
  return (
    <>
      <BrowserRouter>
        <Layout style={{ background: '#f0f2f5' }}>
          <HeaderContainer className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ background: '#666666' }}
            >
              <Menu.Item key="1">
                <Link to="/">Solicitar estágio</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/viewestagio">Visualizar estágio</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/segundaChamada">Solicitar segunda chamada</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="horacomplementar">
                  Solicitar horas complementares
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="matriculation">Solicitar matrícula</Link>
              </Menu.Item>
            </Menu>
          </HeaderContainer>
          <Body>{children}</Body>
          <FooterContainer>Created by Katioros</FooterContainer>
        </Layout>
      </BrowserRouter>
    </>
  );
}
