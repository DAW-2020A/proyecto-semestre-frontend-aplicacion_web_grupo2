import React, {useState} from 'react';
import {Button, Col, Row} from "antd";
import {ArrowLeftOutlined, PlusOutlined} from "@ant-design/icons";
import {mutate} from "swr";
import InfobyCourse from "../components/InfobyCourse";
import {Link, useParams} from 'react-router-dom';
import {useInfoCourse} from "../data/useInfoCourse";
import Routes from "../constants/routes";



const  InfoCourseTeacher=()=>{

    //const auth=useAuth();
    let {id}=(useParams());
    console.log(id);
    const courseId = useInfoCourse(id);

    return(
        <>
            <div>
                <Row>
                    <Col span={6}>
                        <Button type="text" icon={<ArrowLeftOutlined />}><Link to={Routes.HOME_TEACHER}>Regresar</Link></Button>
                    </Col>
                    <Col span={18} align={'right'}>
                        <Button type="danger" icon={<PlusOutlined/>}><Link to={Routes.CREATETEST}>Crear una evaluación</Link></Button>
                    </Col>
                </Row>
                <br/>
                <div>
                    <InfobyCourse courseId={id}/>

                </div>
            </div>
        </>

    )
}
export default InfoCourseTeacher;