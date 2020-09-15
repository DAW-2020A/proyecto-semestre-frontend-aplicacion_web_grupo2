import React, {useEffect, useState} from 'react';
import {Skeleton, Card, Table, Col, Row, Radio, Typography, Menu, List} from 'antd';
import {useInfoCourse} from '../data/useInfoCourse';
import ShowError from './ShowError';
import {useAuth} from "../providers/Auth";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";


const {Text} = Typography;


const InfobyCourse = ({courseId}) => {

    const info=useAuth().currentUser
    console.log(courseId);
    const {testsCourse,isLoading,isError} = useInfoCourse(courseId);
    console.log("arreglo",testsCourse)
    if (isLoading) {
        return <Row >
            {
                [...new Array(9)].map((_, i) =>
                    <Col xs={24} sm={12} md={8} style={{marginBottom: 30}} key={i}>
                        <div style={{textAlign: 'center'}}>
                            <Skeleton.Image style={{width: 200}}/>
                            <Card title='' extra='' cover='' loading />
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
                        <Row>
                            <Col span={8}>
                                <div>
                                    <h1 align={'center'}>{testsCourse.name}</h1>
                                </div>
                                <div>
                                    <Col span={6} align={'center'}>
                                        <br/>
                                        <br/>
                                        <Row>
                                            <span>Docente de la materia</span>
                                        </Row>
                                        <Row>
                                            <span>{testsCourse.user_id}</span>
                                        </Row>
                                        <Row>
                                            <span>Codigo del curso</span>
                                        </Row>
                                        <Row>
                                            <span>{testsCourse.code}</span>
                                        </Row>
                                    </Col>
                                </div>
                            </Col>
                        <Col span={16}>
                        {
                            info.role === "ROLE_TEACHER" ?
                                <>
                                <Col>
                                    <Col>
                                        <h4>Lista de estudiantes</h4>
                                        {
                                            testsCourse.students.data.map((student,i)=>(
                                          <List key={i}>
                                            <List.Item >{student.name} {student.lastname}</List.Item>
                                            <List.Item >{student.email}</List.Item>
                                          </List>
                                        ))
                                        }
                                    </Col>
                                <Col >
                                    {
                                        testsCourse.tests.data.map((test,i)=>(
                                            <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                                                {
                                                    test.name
                                                        ?
                                                        <Card
                                                            title={ test.name }
                                                        >

                                                            <Text type='secondary'>{ test.description }</Text>
                                                            <br/>
                                                        </Card>
                                                        : <div style={ { textAlign: 'center' } }>
                                                            <Skeleton.Image style={ { width: 200 } } />
                                                            <Card title='' extra='' cover='' loading />
                                                        </div>
                                                }
                                            </Col>
                                        ))
                                    }
                                </Col>
                                </Col>
                                    </>
                                :
                                <Col>
                                    {
                                        testsCourse.tests_students.data.map((test,i)=>(
                                            <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                                                {
                                                    test.name
                                                        ?
                                                        <Card
                                                            title={ test.name }
                                                        >

                                                            <Text type='secondary'>{ test.description }</Text>
                                                            <br/>
                                                        </Card>
                                                        : <div style={ { textAlign: 'center' } }>
                                                            <Skeleton.Image style={ { width: 200 } } />
                                                            <Card title='' extra='' cover='' loading />
                                                        </div>
                                                }
                                            </Col>
                                        ))
                                    }
                                </Col>
                        }
                        </Col>
                    </Row>
                     </>
                :''
        }
    </>
    );
};

export default InfobyCourse;
