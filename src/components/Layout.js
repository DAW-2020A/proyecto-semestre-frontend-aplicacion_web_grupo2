/**
 * Created by chalosalvador on 3/1/20
 */
import React from 'react';
import Routes from '../constants/routes';
import Navigation from './Navigation';
import { Layout, Row, Col, Button, Popover } from 'antd';
import { FacebookOutlined, InstagramOutlined, GithubOutlined, MailOutlined, WhatsAppOutlined } from '@ant-design/icons';
import logo from '../images/logo-TrialQ.png';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;

/**
 * Este componente renderiza los elementos comunes para toda la aplicación
 *
 * Header (menu), Content y Footer
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const MainLayout = props => {
  console.log( 'props', props );
  return (
    <div className='app'>
      <Layout>
        <Row type='flex' justify='center' className='header-wrapper'>
          <Col span={ 20 }>
            <Header className='header'>
              <Row type='flex' justify='space-between' align='bottom'>
                <Col xs={ 24 } md={ 6 } className='logo-wrapper'>
                  <a href={ process.env.REACT_APP_DOMAIN }>
                      <Link to={Routes.HOME}><img className='logo' src={ logo } alt='Trial Q' /></Link></a>
                </Col>

                <Col md={ 14 } align='right' className='main-buttons'>
                  <Button type="primary" style={{margin: 8}}><Link to={Routes.LOGIN}>Iniciar Sesión</Link></Button>
                  <Button type="primary" style={{margin: 8}}><Link to={Routes.REGISTER}>Registrarse</Link></Button>
                  <Button type="primary" style={{margin: 8}}><Link to={Routes.HOME_TEACHER}>Página Docente</Link></Button>
                  <Button type="primary" style={{margin: 8}}><Link to={Routes.HOME_STUDENT}>Página Estudiante</Link></Button>
                </Col>

              </Row>
            </Header>
          </Col>
        </Row>


        <Content className='content'>
          <Row type='flex' justify='center' style={ { flex: 'auto' } }>
            <Col xs={ 22 } md={ 20 }>
              { props.children }
            </Col>
          </Row>
        </Content>

        <Footer className='footer'>
          <Row>
            <Col xs={ { span: 24 } } md={ 8 } className='logo-blanco'>

            </Col>

            <Col xs={ {
              span: 24,
              offset: 0
            } }
                 md={ {
                   span: 5,
                   offset: 3
                 } }
                 >
              Elaborado por: <br />
              <a href='https://grupomenta.com' rel='noopener noreferrer' target='_blank'>
                <img src={ logo } alt='Trial Q' height={ 50 } />
              </a>
            </Col>

            <Col xs={ {
              span: 24,
              offset: 0
            } }
                 md={ {
                   span: 4,
                   offset: 4
                 } }
                 className='contact-links'>
              <p><strong>Contáctanos</strong></p>
              <p><MailOutlined /> <a href='mailto:info@trialq.com'>info@trialq.com</a></p>
              <p><WhatsAppOutlined /> <a href='https://wa.me/593988185518' target='_blank' rel='noopener noreferrer'>+593 9-8818-5518</a></p>
              <p><GithubOutlined /> <a href='https://github.com/DAW-2020A/proyecto-semestre-frontend-aplicacion_web_grupo2'
                                       target='_blank'
                                       rel='noopener noreferrer'>@trialq</a>
              </p>
            </Col>
          </Row>

          <Row type='flex' justify='space-between' align='bottom'>
            <Col xs={ 24 } md={ 8 }>
              { moment().format( 'YYYY' ) } - Trial Q.
            </Col>

            <Col xs={ 24 } md={ 4 } className='footer-links'>
              <Link to={ Routes.ABOUT } style={ { marginRight: 20 } }>Preguntas frecuentes</Link>
            </Col>
            <Col xs={ 24 } md={ 4 } className='footer-links'>
              <Link to={ Routes.ABOUT }>Términos y condiciones</Link>
            </Col>

            <Col xs={ 24 } md={ 8 } className='logos-social'>
              <strong>Síguenos en:</strong>
              <a href='https://www.facebook.com'
                 target='_blank'
                 rel='noopener noreferrer'
                 style={ {
                   marginLeft: 30,
                   marginRight: 30
                 } }>
                <FacebookOutlined />
              </a>

              <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                <InstagramOutlined />
              </a>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </div>
  );
};

export default MainLayout;
