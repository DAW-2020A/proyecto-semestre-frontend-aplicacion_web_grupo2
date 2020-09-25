import React, {useEffect, useState} from 'react';
import {Skeleton, Card, Table, Col, Row, Radio, Typography, Button, List, Avatar, Menu} from 'antd';
import Routes from '../constants/routes';
import {Link} from 'react-router-dom';
import {useCourseListTeacher} from '../data/useCourseListTeacher';
import ShowError from './ShowError';
import signatures from "../images/signatures.svg";
import {useAuth} from "../providers/Auth";

const {Text} = Typography;
const {SubMenu} = Menu;

const CourseList = (props) => {

    const info=useAuth().currentUser
    const {courses, isLoading, isError, mutate} = useCourseListTeacher();


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
    console.log(courses)

    return (
        <>
            <Row justify='center' gutter={30}>
                {
                    courses.map( ( course, i ) => (
                        info ?
                        <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                            {
                                course.name
                                ?
                                    <Link to={Routes.TESTSTEACHER.replace( ':id', course.id )}>
                                    <Card
                                    title={ course.name }
                                   >
                                    <Text type='secondary'>{ course.created_at }</Text>
                                    <br/>
                                </Card>
                                </Link>
                                : <div style={ { textAlign: 'center' } }>
                                    <Skeleton.Image style={ { width: 200 } } />
                                    <Card title='' extra='' cover='' loading />
                                </div>
                            }
                        </Col>: ''

                    ) )
                }
            </Row>
        </>
    );
};

export default CourseList;
