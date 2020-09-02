import React from 'react';
import {Button, Col, Row, Typography, List, Avatar, Divider, Input} from "antd";
import { PlusOutlined, ArrowLeftOutlined, CopyOutlined} from '@ant-design/icons';
import '../styles/teacherhome.css';

const TeacherHomePage = () => {
    const { Text, Link, Title } = Typography;

    const data = [
        {
            title: 'Estudiante 1',
        },
        {
            title: 'Estudiante 2',
        },
        {
            title: 'Estudiante 3',
        },
        {
            title: 'Estudiante 4',
        },
    ];
    const data1 = [
        'Prueba 1',
        'Prueba 2',
        'Examen 1',
    ];


    return (
        <>
            <div className={"title"}>
            <Row>
                <Col span={4}>
                    <Button type="text" icon={<ArrowLeftOutlined />}>Regresar</Button>
                </Col>

                <Col span={20}>
                    <Title level={2} >Nombre del curso 1</Title>
                </Col>
            </Row>
            </div>
            <Row>
                <Col span={4}>
                    <Title level={5} ><center>Código de materia</center></Title>
                    <Input addonAfter={<CopyOutlined />} placeholder="124432" disabled/>
                </Col>
                <Col span={12}>
                    <div className={'teacher'}>
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={<a href="https://ant.design">{item.title}</a>}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </Col>
                <Col span={8}>
                    <Divider orientation="left">Evaluaciones</Divider>
                    <List
                        size="small"
                        dataSource={data1}
                        renderItem={item =>

                            <List.Item>
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={10}>{item}</Col>
                            <Col className="gutter-row" span={6}>
                        <Text type="primary">ver</Text>
                            </Col>
                            <Col className="gutter-row" span={8}>
                        <Link>Editar</Link>
                                <br/>
                        <Link>Ver Notas</Link>
                            </Col>
                        </Row>
                        </List.Item>

                        }
                    />
                    <div className={"botones"}>
                    <Button>Ver mas</Button>
                        <br/>
                        <br/>
                    <Button type="primary" danger icon={<PlusOutlined />}>
                        Crear Evaluación
                    </Button>
                    </div>
                </Col>
            </Row>
            </>
    );
}

export default TeacherHomePage;