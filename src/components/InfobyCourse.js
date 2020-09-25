import React, {useEffect, useState} from 'react';
import {Skeleton, Card, Table, Col, Row, Radio, Typography, Menu, List, Avatar, Spin, Button} from 'antd';
import {useInfoCourse} from '../data/useInfoCourse';
import ShowError from './ShowError';
import {useAuth} from "../providers/Auth";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import {PlusOutlined} from "@ant-design/icons";


const {Text, Title} = Typography;


const InfobyCourse = ({courseId}) => {

    const info = useAuth().currentUser
    console.log("curso_id", courseId);
    const {testsCourse, isLoading, isError} = useInfoCourse(courseId);
    console.log("arreglo", testsCourse)
    if (isLoading) {
        return <Row>
            {
                [...new Array(9)].map((_, i) =>
                    <Col xs={24} sm={12} md={8} style={{marginBottom: 30}} key={i}>
                        <div style={{textAlign: 'center'}}>
                            <Skeleton.Image style={{width: 200}}/>
                            <Card title='' extra='' cover='' loading/>
                        </div>
                    </Col>
                )
            }
        </Row>;
    }

    if (isError) {
        return <ShowError error={isError}/>;
    }
    console.log(testsCourse)
    return (
        <>
            {
                testsCourse && info
                    ?
                    <>
                        <Row justify='center'>
                            <Col>
                                <div>
                                    <Title align={'center'} level={2}>{testsCourse.name}</Title>
                                </div>
                            </Col>
                        </Row>

                        <div>
                            <Row type='flex' justify={'center'}>
                                <Col align={'center'} style={{margin: 10}}>
                                    <div className="site-card-border-less-wrapper">
                                        <Card title="Código:" bordered={false} style={{width: 300}}>
                                            <span>{testsCourse.code}</span>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>

                            <Row type={'flex'} justify={'space-evenly'}>
                                {
                                    info.role === "ROLE_TEACHER" ?
                                        <>
                                            <Col style={{marginLeft: 20, marginRight: 20, width:400}}>
                                                <Title level={3}>Lista de estudiantes</Title>

                                                <List
                                                    dataSource={testsCourse.students.data}
                                                    renderItem={item => (
                                                        <List.Item key={item.id}>
                                                            <List.Item.Meta
                                                                avatar={
                                                                    <Avatar
                                                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                                                                }
                                                                title={<a
                                                                    href="https://ant.design">{item.name} {item.lastname}</a>}
                                                                description={item.email}
                                                            />
                                                            <div style={{marginLeft: 5}}>Calificación</div>
                                                        </List.Item>
                                                    )}
                                                >
                                                </List>
                                            </Col>
                                            {
                                                testsCourse.tests.data.map((test, i) => (
                                                    <Col style={{marginLeft: 200}}
                                                         key={i} align={'center'}>
                                                        <Title level={3}>Evaluaciones</Title>
                                                        {
                                                            test.name
                                                                ?
                                                                <Card
                                                                    title={test.name}
                                                                    style={{width: 300}}
                                                                >

                                                                    <Text
                                                                        type='secondary'>{test.description}</Text>
                                                                    <br/>
                                                                </Card>
                                                                : <div style={{textAlign: 'center'}}>
                                                                    <Skeleton.Image style={{width: 200}}/>
                                                                    <Card title='' extra='' cover='' loading/>
                                                                </div>
                                                        }
                                                        <Button
                                                            type="primary"
                                                            icon={<PlusOutlined/>}
                                                            >
                                                            Crear una evaluación
                                                        </Button>
                                                    </Col>
                                                ))
                                            }
                                        </>
                                        : ''
                                }
                            </Row>
                        </div>

                    </>
                    : ''
            }
        </>
    );
};

export default InfobyCourse;
