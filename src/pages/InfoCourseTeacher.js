import React, {useState} from 'react';
import {Button, Col, Row} from "antd";
import Routes from '../constants/routes';
import { ArrowLeftOutlined} from "@ant-design/icons";
import {mutate} from "swr";
import InfobyCourse from "../components/InfobyCourse";
import {Link,useParams} from 'react-router-dom';
import {useCourseInfo} from "../data/useCourseInfo";



const  InfoCourseTeacher=()=>{

    //const auth=useAuth();
    let {id}=(useParams());
    console.log(id);
    const courseId = useCourseInfo(id);

    return(
        <>
            <div>
                <Row>
                    <Col span={6}>
                        <Link to={Routes.HOME_TEACHER}><Button type="text" icon={<ArrowLeftOutlined />}>Regresar</Button></Link>
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