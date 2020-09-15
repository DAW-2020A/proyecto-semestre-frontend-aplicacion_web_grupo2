import React, {useEffect, useState} from 'react';
import {Skeleton, Card, Table, Col, Row, Radio, Typography, Menu, Title} from 'antd';
import {useInfoCourse} from '../data/useInfoCourse';
import ShowError from './ShowError';
import {useAuth} from "../providers/Auth";
import {Link} from "react-router-dom";
import Routes from "../constants/routes";


const {Text} = Typography;


const InfobyCourse = ({courseId}) => {

    console.log(courseId);
    const {testsCourse,isLoading,isError} = useInfoCourse(courseId);
    console.log(testsCourse)
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
            testsCourse
                 ?
                    <>
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
                        <Col>
                            {
                                testsCourse.tests_students.map((test,i)=>(
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
                     </>
                :''
        }
    </>
    );
};

export default InfobyCourse;
