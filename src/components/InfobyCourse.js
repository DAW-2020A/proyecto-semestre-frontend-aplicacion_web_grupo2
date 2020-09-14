import React, {useEffect, useState} from 'react';
import {Skeleton, Card, Table, Col, Row, Radio, Typography, Menu, Title} from 'antd';
import {useInfoCourse} from '../data/useInfoCourse';
import ShowError from './ShowError';
import {useAuth} from "../providers/Auth";

const {Text} = Typography;


const InfobyCourse = (props) => {

    const {currentUser}=useAuth();
    const {testsCourse, isLoading, isError} = useInfoCourse(props.id);

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
            testsCourse(
                //info ?
                    <Col Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } }>
                        <Row>
                            <Col>
                                <h1>testsCourse.name</h1>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Col span={6}>Docente de la materia</Col>
                        </Row>
                        <Row>
                            <Col span={6}>testsCourse.user_id</Col>
                        </Row>
                        <Row>
                            <Col span={6}>Codigo del curso</Col>
                        </Row>
                        <Row>
                            <Col span={6}>testsCourse.code</Col>
                        </Row>
                    </Col>

                //:''
            )

        }

    </>
    );
};

export default InfobyCourse;
