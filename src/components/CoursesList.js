import React, {useEffect, useState} from 'react';
import {Skeleton, Card, Table, Col, Row, Radio, Typography, Button, List, Avatar} from 'antd';
import Routes from '../constants/routes';
import {Link} from 'react-router-dom';
import {useCourseList} from '../data/useCourseList';
import ShowError from './ShowError';
import signatures from "../images/signatures.svg";

const {Text} = Typography;

const CourseList = (props) => {

    const {courses, isLoading, isError, mutate} = useCourseList();


    if (isLoading) {
        return <Row justify='center' gutter={30}>
            {
                [...new Array(9)].map((_, i) =>
                    <Col xs={24} sm={12} md={8} style={{marginBottom: 30}} key={i}>
                        <div style={{textAlign: 'center'}}>
                            <Skeleton.Image style={{width: 200}}/>
                            <Card title='' extra='' cover='' loading />                        </div>
                    </Col>
                )
            }
        </Row>;
    }

    if (isError) {
        return <ShowError error={isError}/>;
    }

    return (
        <>

            <Row justify='center' gutter={30}>
                {
                    courses.map( ( course, i ) => (
                        <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                            { course.name
                                ? <Card
                                    title={ course.name }
                                   >
                                    <Text type='secondary'>{ course.created_at }</Text>

                                </Card>
                                : <div style={ { textAlign: 'center' } }>
                                    <Skeleton.Image style={ { width: 200 } } />
                                    <Card title='' extra='' cover='' loading />
                                </div>
                            }
                        </Col>
                    ) )
                }

            </Row>
        </>
    );
};

export default CourseList;
