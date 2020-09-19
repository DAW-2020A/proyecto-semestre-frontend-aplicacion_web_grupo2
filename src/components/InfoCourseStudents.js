import React, {useEffect, useState} from 'react';
import {Skeleton, Card, Table, Col, Row, Radio, Typography, Menu, List} from 'antd';
import {useCourseInfo} from '../data/useCourseInfo';
import ShowError from './ShowError';
import {useAuth} from "../providers/Auth";

const {Text} = Typography;

const InfoCourseStudents = ({courseId}) => {

    const info = useAuth().currentUser
    console.log(courseId);
    const {InfoCourse, isLoading, isError} = useCourseInfo(courseId);
    console.log("arreglo", InfoCourse);

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
    console.log(InfoCourse)
    return (
        <>
            {
                InfoCourse && info
                    ?
                    <>
                        <Row>
                            <Col span={6}>
                                <div>
                                    <h1 align={'center'}>{InfoCourse.name}</h1>
                                </div>
                                <div>
                                    <Col span={6} align={'center'}>
                                        <br/>
                                        <br/>
                                        <div className="site-card-border-less-wrapper">
                                            <Card title="Info. Materia" bordered={false} style={{width: 300}}>
                                                <p>Docente de la materia</p>
                                                <p>{info.name + ' ' + info.name}</p>
                                                <p>Codigo del curso</p>
                                                <p>{InfoCourse.code}</p>
                                            </Card>
                                        </div>
                                    </Col>
                                </div>
                            </Col>
                            <Col span={14} justify='center'>
                                <Row justify='center' gutter={30}>
                                    {
                                        InfoCourse.tests_students.data.map((test, i) => (
                                            <Col xs={20} sm={12} md={8} style={{marginBottom: 20}} key={i}>
                                                {
                                                    test.name
                                                        ?
                                                        <Card
                                                            title={test.name}
                                                            style={{width: 500 }}
                                                        >

                                                            <Text type='secondary'>{test.description}</Text>
                                                            <br/>
                                                        </Card>
                                                        : <div style={{textAlign: 'center'}}>
                                                            <Skeleton.Image style={{width: 200}}/>
                                                            <Card title='' extra='' cover='' loading/>
                                                        </div>
                                                }
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </>
                    : ''
            }
        </>
    );
};

export default InfoCourseStudents;