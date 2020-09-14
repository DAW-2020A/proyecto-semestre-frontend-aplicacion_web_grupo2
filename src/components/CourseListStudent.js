import React, {useEffect, useState} from 'react';
import {Skeleton, Card, Table, Col, Row, Radio, Typography, Button, List, Avatar, Menu} from 'antd';
import Routes from '../constants/routes';
import {Link} from 'react-router-dom';
import {useCourseListStudent} from '../data/useCourseListStudent';
import ShowError from './ShowError';
import signatures from "../images/signatures.svg";
import {useAuth} from "../providers/Auth";
import InfobyCourse from "./InfobyCourse";

const {Text} = Typography;

const CourseListStudent = (props) => {

    const {currentUser}=useAuth();
    const {coursesStudent, isLoading, isError, mutate} = useCourseListStudent();

    //Mostrar en consola el id del curso seleccionado
    const info=(data)=>{
        console.log(data);
    }

    const handleClick = e => {
        console.log('click ', e);
    };



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
    console.log(coursesStudent)

    return (
        <>
            <h1>Tarjetas</h1>
            <Row justify='center' gutter={30}>
                {
                    coursesStudent.map( ( course, i ) => (
                        //info  ?
                            <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                                {
                                    course.name
                                        ?
                                        //<Link to={Routes.TESTSSTUDENT}>
                                            <Card
                                            title={ course.name } onClick={()=>info(course.id)}
                                        >
                                            <Text type='secondary'>{ course.created_at }</Text>
                                            <br/>
                                        </Card>
                                        //</Link>
                                        : <div style={ { textAlign: 'center' } }>
                                            <Skeleton.Image style={ { width: 200 } } />
                                            <Card title='' extra='' cover='' loading />
                                        </div>
                                }
                            </Col>
                        //: ''

                    ) )
                }
            </Row>
        </>
    );
};

export default CourseListStudent;
