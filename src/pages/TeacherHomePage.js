import React, {useState} from 'react';
import {Button, Col, Row, Typography, List, Avatar, Alert, Image, message} from "antd";
import {PlusOutlined, SettingOutlined} from '@ant-design/icons';
import '../styles/teacherhome.css';
import signatures from '../images/signatures.svg';
import {translateMessage} from "../utils/translateMessage";
import {useAuth} from '../providers/Auth';
import ModalNewCourse from "../components/ModalNewCourse";
import {mutate} from "swr";
import API from "../data";
import CoursesList from "../components/CoursesListTeacher";
import {Link, useParams} from "react-router-dom";
import task from "../images/task.svg";
import Routes from "../constants/routes";


const TeacherHomePage = () => {

    const {Title} = Typography;
    const auth=useAuth();
    const [showModalNewCourse, setShowModalNewCourse] = useState(false);


    const afterCreate = async () => {
        try {
            // show skeleton
            await mutate('/teacher/courses', async courses => {
                return {data: [{}, ...courses.data]};
            }, false);

            await mutate('/teacher/courses');
            setShowModalNewCourse(false); // close the modal
        } catch (error) {
            console.error(
                'You have an error in your code or there are Network issues.',
                error
            );

            message.error(translateMessage(error.message));
        }
    };
    return (
        <>
            <div className={"title"}>
                <Row>
                    <Col span={6}>
                        <Link to={Routes.PROFILE}><Button type="text" icon={<SettingOutlined />}>Configuración Perfil</Button></Link>
                    </Col>
                    <Col span={12}>
                        <Title level={2} style={{color: '#ff4d4f'}}>Lista de Cursos</Title>

                    </Col>

                    <Col span={4}>
                        {
                            auth.isAuthenticated &&
                            <Button
                                type="danger"
                                icon={<PlusOutlined/>}
                                onClick={() => {
                                    setShowModalNewCourse(true);
                                }}>
                                Crear nuevo Curso
                            </Button>
                        }

                    </Col>

                </Row>
            </div>
            <br/>
            <br/>
            <Row>
                <Col span={6}>
                        <Image
                            src={task}
                        />
                    </Col>
                <Col  span={18}>
                    <div className={'teacher'}>
                        <CoursesList />
                    </div>
                </Col>
            </Row>
            <Row align={'center'}>
                <Alert message="Haz click en un curso para ver la información" type="info" showIcon/>
            </Row>
            <ModalNewCourse
                show={showModalNewCourse}
                close={ () => {
                    setShowModalNewCourse( false );
                } }
                update={false}
                onSubmit={afterCreate}
            />
        </>

    );
}

export default TeacherHomePage;
