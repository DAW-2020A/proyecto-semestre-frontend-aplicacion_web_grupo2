import React, {useState} from 'react';
import {Button, Col, Image, Popover, Row, Typography} from "antd";
import {SettingOutlined, AlertTwoTone, PlusOutlined} from "@ant-design/icons";
import task from "../images/task.svg";
import CourseListStudent from "../components/CourseListStudent";
import {useAuth} from "../providers/Auth";
import ModalAddCourse from "../components/ModalAddCourse";
import {mutate} from "swr";
import {Link} from 'react-router-dom';
import Routes from '../constants/routes';

const StudentHomePage=()=>{

    const auth=useAuth();
    const [showModalAddCourse, setShowModalAddCourse] = useState(false);

    const {Title}=Typography;

    const afterCreate = async () => {
            await mutate('/student/courses');
            setShowModalAddCourse(false); // close the modal
    };
    return(
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
                                    setShowModalAddCourse(true);
                                }}>
                                Registrar un nuevo Curso
                            </Button>
                        }

                    </Col>

                </Row>
            </div>
            <br/>
            <br/>
            <div>
                <Row>
                    <Col span={6}>
                        <Image
                            src={task}
                        />
                    </Col>
                    <Col span={18}>
                        <div className={'student'}>
                                    <div className={'teacher'}>
                                        <CourseListStudent />
                                    </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <br/>
            <br/>
            <div>
                <Row>
                    <Col span={6} align={'center'}>
                        <Popover  title="Consejo para mejorar tu rendimiento en las pruebas"
                                  content="Preparate, usa herramientas tecnológicas para reducir la cantidad de materia">
                            <Button icon={<AlertTwoTone />}>Consejo</Button>
                        </Popover>
                    </Col>
                </Row>
            </div>
            <ModalAddCourse
                show={showModalAddCourse}
                close={ () => {
                    setShowModalAddCourse( false );
                } }
                update={false}
                onSubmit={afterCreate}
            />
        </>
    );
}

export default StudentHomePage;
