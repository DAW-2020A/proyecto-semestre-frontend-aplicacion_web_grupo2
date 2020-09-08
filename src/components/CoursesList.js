import React, {useEffect, useState} from 'react';
import {Skeleton, Card, Table, Col, Row, Radio, Typography, Button, List, Avatar, Menu} from 'antd';
import Routes from '../constants/routes';
import {Link} from 'react-router-dom';
import {useCourseList} from '../data/useCourseList';
import ShowError from './ShowError';
import signatures from "../images/signatures.svg";
import {useAuth} from "../providers/Auth";

const {Text} = Typography;
const {SubMenu} = Menu;

const CourseList = (props) => {

    const info=useAuth().currentUser
    const {courses, isLoading, isError, mutate} = useCourseList();


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
            <h1>Tarjetas</h1>
            <Row justify='center' gutter={30}>
                {
                    courses.map( ( course, i ) => (
                        info  && course.user_id === info.id ?
                        <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                            {
                                course.name
                                ? <Card
                                    title={ course.name }
                                   >
                                    <Text type='secondary'>{ course.created_at }</Text>
                                    <br/>
                                        <Text><strong>Pruebas</strong></Text>
                                        <br/>{

                                        course.tests.data.map((tests, i)=>(
                                                <Text key={i}>{tests.name}</Text>
                                            ))
                                    }

                                </Card>
                                : <div style={ { textAlign: 'center' } }>
                                    <Skeleton.Image style={ { width: 200 } } />
                                    <Card title='' extra='' cover='' loading />
                                </div>
                            }
                        </Col>: ''

                    ) )
                }
            </Row>
            <h1>Listas</h1>
                <List size={"large"} bordered>
                    {
                        courses.map ((course,i)=>(
                            info  && course.user_id === info.id ?
                            <List.Item key={i}>
                                <strong>Curso: </strong>
                                {course.name}
                                <br/>
                                <strong>Creado el: </strong>
                                {course.created_at}
                                <br/>
                                <strong>Pruebas:</strong>
                                {
                                    course.tests.data.map((tests, i)=>(
                                    <List.Item key={i}>{tests.name}</List.Item>
                                ))
                                }
                            </List.Item>
                            :''
                        ))
                    }
                </List>
            <h1>Menu</h1>
            {
                courses.map( ( course, i ) => (
                    info  && course.user_id === info.id ?
            <div>
            <Menu
                key={i}
                onClick={handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
              <span>{course.name}</span>
            </span>
                    }
                >{course.tests.data.map((tests, i)=>(
                        <Menu.Item key={i}>{tests.name}</Menu.Item>
                ))}
                </SubMenu>
            </Menu>
             <br/>
             </div>
             :''
                ))
            }
        </>
    );
};

export default CourseList;
