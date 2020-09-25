import React, {useState} from 'react';
import {Alert, Col, Row, Button, Form, Input, Typography, Card} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import complete from '../images/complete.jpg';
import multiple from '../images/multiple.jpg';
import crucigrama from '../images/crucigrama.jpg';
import sopa from '../images/sopa.png';

const NewTest=()=>{
    const { TextArea } = Input;
    const {Title} = Typography;
    const { Meta } = Card;
    return(
        <>
            <Row>
                <Col span={6}>
                    <Button type="text" icon={<ArrowLeftOutlined />}>Regresar</Button>
                </Col>
                <Col span={12} align={'center'} >
                    <Title style={{color: '#ff4d4f'}}>Creación de evaluaciones</Title>
                </Col>
            </Row>
            <Row align={'center'}>
                <Col>
                    <Input placeholder="Nombre de la Evaluación" size="default dize" style={{width:'650px'}}/>
                    <br/>
                    <br/>
                    <TextArea rows={4} placeholder="Descripción" size="default dize"/>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row align={'center'}>
                <Alert message="Elige las actividades que desea integrar a su evalacuión" type="info" showIcon/>
            </Row>
            <br/>
            <Row align={'center'}>
                <Card
                    hoverable
                    style={{ width: 240,background:'#ff4d4f',textAlign:'center'}}
                    cover={<img alt="example" src={multiple} style={{ width: 240, height:200}}/>}
                >
                    <Meta title="Opción Múltiple"/>
                </Card>
                <Card
                    hoverable
                    style={{ width: 240,background:'#ff4d4f',textAlign:'center'}}
                    cover={<img alt="example" src={complete} style={{ width: 240, height:200}}/>}
                >
                    <Meta title="Complete"/>
                </Card>
                <Card
                    hoverable
                    style={{ width: 240,background:'#ff4d4f',textAlign:'center'}}
                    cover={<img alt="example" src={crucigrama} style={{ width: 240, height:200}}/>}
                >
                    <Meta title="Crucigrama"/>
                </Card>
                <Card
                    hoverable
                    style={{ width: 240,background:'#ff4d4f',textAlign:'center'}}
                    cover={<img alt="example" src={sopa} style={{ width: 240, height:200}}/>}
                >
                    <Meta title="Sopa de Letras"/>
                </Card>
            </Row>
        </>
    );
}
export default NewTest;