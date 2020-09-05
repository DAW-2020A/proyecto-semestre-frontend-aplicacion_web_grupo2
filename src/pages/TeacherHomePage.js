import React from 'react';
import {Button, Col, Row, Typography, List, Avatar,Alert} from "antd";
import {PlusOutlined} from '@ant-design/icons';
import '../styles/teacherhome.css';
import signatures from '../images/signatures.svg';

const TeacherHomePage = () => {
    const {  Title } = Typography;

    const data = [
        {
            title: 'Desarrollo de Aplicaciones Web',
        },
        {
            title: 'Desarrollo de Software',
        },
        {
            title: 'Diseño de Interfaces',
        },
    ];

    return (
        <>
            <div className={"title"}>
            <Row>
                <Col span={4}> </Col>
                <Col span={12}>
                    <Title level={2} style={{color:'#ff4d4f'}} >Lista de Cursos/Materia</Title>
                </Col>
                <Col span={4}>
                    <Button type="danger" icon={<PlusOutlined />}>
                        Crear nuevo Curso
                    </Button>
                </Col>
            </Row>
            </div>
            <Row>
                <Col span={4}> </Col>
                <Col span={12}>
                    <div className={'teacher'}>
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={signatures} />}
                                        title={<a href="https://ant.design">{item.title}</a>}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </Col>
            </Row>
            <Row align={'center'}>
                <Alert message="Haz click en un curso para ver la información" type="info" showIcon />
            </Row>
            </>
    );
}

export default TeacherHomePage;