import React from 'react';
/*import ArticleList from '../components/ArticleList';
import {useArticleList} from '../data/useArticleList';
import ShowError from '../components/ShowError';*/
import {Button, Col, Image, Row} from "antd";
import imgIndex from "../images/img-index.png";
import imgStudying from "../images/studying.svg";
import imgTeaching from "../images/teaching.svg";
import "../styles/home.css";
import imgExams from "../images/exam.svg";
import {PlusOutlined} from '@ant-design/icons';
import Routes from "../constants/routes";
import {Link} from "react-router-dom";

const HomePage = () => {
    /*const articles = useArticleList();*/

    return (
        <>
            <Row>
                <Col align='center' style={{marginTop: 80}}>
                    <h1 style={{fontFamily: 'helvética', fontSize: 45}}>
                        TrialQ te permite diseñar <br/>
                        pruebas con actividades <br/>
                        entretenidas para<br/>
                        tus estudiantes
                    </h1>

                    <Button type="primary" size="large"><Link to={Routes.REGISTER}>Crear tu primera clase</Link></Button>
                </Col>

                <Col xs={24} md={6} className='logo-wrapper'>
                    <a href={process.env.REACT_APP_DOMAIN}>
                        <Image width={650} height={100} style={{marginLeft: 60}} src={imgIndex} alt='Trial Q'/></a>
                </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Row>
                <Col>
                    <h3 style={{fontFamily: 'helvética', fontSize: 25}}>
                        Son útiles para temas como:
                    </h3>
                    <br/>
                    <Button className={'mathematics'} type="primary" size="large" style={{margin:20,color:'#000000'}}>Matemática</Button>
                    <Button className={'language'} type="primary" size="large" style={{marginLeft:200,color:'#000000'}}>Lenguaje</Button>
                    <Button className={'biology'} type="primary" size="large" style={{marginLeft:200,color:'#000000'}}>Biología</Button>
                    <Button className={'moreThing'} type="primary" size="large" style={{marginLeft:200,color:'#000000'}}>Y mucho más</Button>
                </Col>
            </Row>
            <br/>
            <br/>
            <div className={'options'}>
                <br/>
                <br/>
                <Row>
                    <Col span={8} align={'center'}>
                        <Image
                            width={250}
                            src={imgExams}/>
                    <br/>
                    <br/>
                        <p style={{fontFamily: 'helvética', fontSize: 14}}>
                            Los docentes pueden utilizar la<br/>
                            plataforma para realizar sus evaluaciones<br/>
                            de una manera dinámica y entretenida.<br/>
                        </p>
                    </Col>
                    <Col span={8} align={'center'}>
                        <Image
                            width={250}
                            src={imgStudying}/>
                        <br/>
                        <br/>
                        <p style={{fontFamily: 'helvética', fontSize: 14}}>
                            Es útil para que los estudiantes desarrollen<br/>
                            sus evaluaciones de una manera más sencilla<br/>
                            y aprendan de una manera simple.<br/>
                        </p>
                    </Col>
                    <Col span={8} align={'center'}>
                        <Image
                            width={250}
                            src={imgTeaching}/>
                        <br/>
                        <br/>
                        <p style={{fontFamily: 'helvética', fontSize: 16}}>
                            Las instituciones educativas pueden<br/>
                            utilizar la plataforma para trabajar<br/>
                            en conjunto con sus docentes y estudiantes.<br/>
                        </p>
                    </Col>
                </Row>
                <br/>
                <br/>
            </div>
            <div>
                <Row>
                    <Col span={12}>
                    </Col>
                    <Col span={12} align={'justify'} className={'about'}>
                        <br/>
                        <br/>
                        <h1  className={'title'} style={{fontFamily: 'helvética', fontSize: 25}}>¿Quiénes somos? </h1>
                        <br/>
                        <p className={'about'} style={{fontFamily: 'helvética', fontSize: 18}}>
                            TrialQ surgió como una idea de un grupo de estudiantes
                            que buscaban una alternativa diferente para el desarrollo
                            de evaluaciones. Su idea principal es motivar a los estudiantes
                            a seguir aprendiendo y facilitar la interacción con los docentes.
                            Su característica principal es que cuenta con diferentes actividades que son:<br/>
                            •	Crucigramas<br/>
                            •	Sopa de letras<br/>
                            •	Opción multiple<br/>
                            •	Complete<br/>
                        </p>
                    </Col>
                </Row>
            </div>
            <div className={'why'}>
                <Row align={'center'}>
                    <h1 className={'title'} style={{fontFamily: 'helvética', fontSize: 25}}>¿Por qué utilizar TrialQ?</h1>
                </Row>
                <Row>
                    <Col span={10}>
                        <br/>
                        <p className={'trial'} style={{fontFamily: 'helvética', fontSize: 18}}>
                            TrialQ es una plataforma que permite crear y diseñar<br/>
                            evaluaciones de manera sencilla para los docentes, <br/>
                            cuenta con actividades dinámicas para los estudiantes <br/>
                            y genera un buen ambiente de trabajo tanto para docentes <br/>
                            como estudiantes. Es una alternativa diferente para las <br/>
                            instituciones educativas que quieren innovar en su forma de enseñar.
                        </p>
                    </Col>
                    <Col span={6}>
                        <Image src={imgExams}/>
                    </Col>
                    <Col span={6}>
                        <Link to={Routes.REGISTER}><Button type="danger" icon={<PlusOutlined/>}>Crear tu primera evaluación</Button></Link>
                    </Col>
                </Row>
            </div>
        </>
    );
};


export default HomePage;
