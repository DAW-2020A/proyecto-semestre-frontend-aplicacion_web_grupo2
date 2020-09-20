import React, {useState} from 'react';
import {Button, Col, Row} from "antd";
import Routes from '../constants/routes';
import {ArrowLeftOutlined} from "@ant-design/icons";
import InfoCourseStudents from "../components/InfoCourseStudents";
import {Link, useParams} from 'react-router-dom';
import {useCourseInfo} from "../data/useCourseInfo";


const InfoCourseStudent = () => {

    //const auth=useAuth();
    let {id} = (useParams());
    console.log(id);
    const courseId = useCourseInfo(id);

    return (
        <>
            <div>
                <Row>
                    <Col span={6}>
                        <Link to={Routes.HOME_STUDENT}><Button type="text" icon={<ArrowLeftOutlined/>}>Regresar</Button></Link>
                    </Col>
                    <Col span={10} style={{left: 45 }}>
                        <h1 style={{color: 'red', justify:'center'}}>Pruebas del Curso</h1>
                    </Col>
                </Row>
                <br/>
                <div>
                    <InfoCourseStudents courseId={id}/>
                </div>
            </div>
        </>

    )
}
export default InfoCourseStudent;