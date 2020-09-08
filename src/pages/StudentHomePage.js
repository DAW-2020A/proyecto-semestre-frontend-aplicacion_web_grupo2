import React, {useState} from 'react';
import {Button, Col, Image, Menu, Popover, Row, Typography} from "antd";
import {SettingOutlined, AlertTwoTone, AndroidOutlined, PlusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import task from "../images/task.svg";
import CoursesList from "../components/CoursesList";
import {useAuth} from "../providers/Auth";
import ModalAddCourse from "../components/ModalAddCourse";

const StudentHomePage=()=>{

    const auth=useAuth();
    const [showModalNewCourse, setShowModalNewCourse] = useState(false)
    //const { SubMenu } = Menu;
    const {Title}=Typography;
    //const handleClick =(e)=>{
        //console.log('click ', e);
    //}
    return(
        <>
            <div className={"title"}>
                <Row>
                    <Col span={6}>
                        <Button type="text" icon={<SettingOutlined />}>Configuración Perfil</Button>
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
                            <Row>
                                <Col >
                                    <div className={'teacher'}>
                                        <CoursesList />
                                    </div>
                                </Col>
                            </Row>
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
                show={showModalNewCourse}
                close={ () => {
                    setShowModalNewCourse( false );
                } }
                update={false}
                //onSubmit={afterCreate}
            />
        </>
    );
}

export default StudentHomePage;