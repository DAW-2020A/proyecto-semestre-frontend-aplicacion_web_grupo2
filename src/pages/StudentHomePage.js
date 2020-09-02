import React from 'react';
import {Button, Col, Image, Menu, Popover, Row, Typography} from "antd";
import {SettingOutlined,AlertTwoTone,AndroidOutlined,PlusCircleOutlined} from "@ant-design/icons";
import task from "../images/task.png";

const StudentHomePage=()=>{
    const { SubMenu } = Menu;
    const {Title}=Typography;
    const handleClick =(e)=>{
        console.log('click ', e);
    }
    return(
        <>
            <div className={"title"}>
                <Row>
                    <Col span={4}>
                        <Button type="text" icon={<SettingOutlined />}>Configuración Perfil</Button>
                    </Col>

                    <Col span={14}>
                        <Title level={2} >Cursos Registrados</Title>
                    </Col>

                    <Col span={4}>
                        <Button type="primary" icon={<PlusCircleOutlined />}>Registrar un nuevo curso</Button>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col span={6}>
                    <Image
                        width={150}
                        src={task}
                    />
                </Col>
                <Col span={14}>
                    <div className={'student'}>
                        <Menu
                            onClick={handleClick}
                            style={{ width: 400}}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                            <AndroidOutlined />
                            <span>Desarrollo de Aplicaciones Web</span>
                            </span>
                                }
                            >
                                    <Menu.Item key="Curso1">Prueba 5: Laravel API |JWT</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </Col>
            </Row>
            <Row>

                <Col span={6}>
                    <Popover  title="Consejo para mejorar tu rendimiento en las pruebas"
                              content="Preparate, usa herramientas tecnológicas para reducir la cantidad de materia">
                        <Button icon={<AlertTwoTone />}>Consejo</Button>
                    </Popover>
                </Col>
            </Row>
        </>
    );
}

export default StudentHomePage;