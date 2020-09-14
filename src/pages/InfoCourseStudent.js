import React, {useState} from 'react';
import {Button, Col, Image, Popover, Row, Typography} from "antd";
import {SettingOutlined, ArrowLeftOutlined, PlusOutlined} from "@ant-design/icons";
import task from "../images/task.svg";
import CourseListStudent from "../components/CourseListStudent";
import {useAuth} from "../providers/Auth";
import ModalAddCourse from "../components/ModalAddCourse";
import {mutate} from "swr";
import InfobyCourse from "../components/InfobyCourse";


const  InfoCourseStudent=()=>{

    const auth=useAuth();


    const {Title}=Typography;

    return(
        <>
            <div className={"title"}>
                <Row>
                    <Col span={6}>
                        <Button type="text" icon={<ArrowLeftOutlined />}>Regresar</Button>
                    </Col>
                </Row>
                <Row>
                    <InfobyCourse/>
                </Row>
            </div>
        </>

    )
}