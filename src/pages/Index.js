import React from 'react';
import ArticleList from '../components/ArticleList';
import {useArticleList} from '../data/useArticleList';
import ShowError from '../components/ShowError';
import {Button, Col, Image, Row, Typography} from "antd";
import imgIndex from "../images/img-index.png";

const HomePage = () => {
    const articles = useArticleList();

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

                    <Button type="primary" size="large">Crear tu primera clase</Button>
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
                    <Button type="primary" size="large" style={{margin:20}}>Matemática</Button>
                    <Button type="primary" size="large" style={{marginLeft:200}}>Lenguaje</Button>
                    <Button type="primary" size="large" style={{marginLeft:200}}>Biología</Button>
                    <Button type="primary" size="large" style={{marginLeft:200}}>Y mucho más</Button>
                </Col>
            </Row>
        </>
    );
};


export default HomePage;
