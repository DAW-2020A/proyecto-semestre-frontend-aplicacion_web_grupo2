import React, {useState, useEffect} from 'react';
import API from '../data';
import {useAuth} from "../providers/Auth";
import {Descriptions, Button} from "antd";
import {ArrowLeftOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import Routes from '../constants/routes';

const ProfilePage = () => {

    const info = useAuth().currentUser
    console.log(useAuth().currentUser);

    return (
        <>
            {
                info ?
                    <div>
                        {
                            info.role === 'ROLE_TEACHER'
                                ?
                                <Link to={Routes.HOME_TEACHER}><Button type="text" icon={<ArrowLeftOutlined/>}>Página
                                    Principal</Button></Link>
                                :
                                <Link to={Routes.HOME_STUDENT}><Button type="text" icon={<ArrowLeftOutlined/>}>Página
                                    Principal</Button></Link>
                        }
                        <br/>
                        <br/>
                        <h1>Perfil de Usuario</h1>
                        <Descriptions>
                            <Descriptions.Item label="Nombre">{info.name}</Descriptions.Item>
                            <Descriptions.Item label="Apellido">{info.lastname}</Descriptions.Item>
                            <Descriptions.Item label="Correo">{info.email}</Descriptions.Item>
                            <Descriptions.Item label="Rol">{info.role}</Descriptions.Item>
                        </Descriptions>
                    </div>
                    :
                    <h1 className='title' style={{aling:"center"}}>
                        La Sesion Ha Caducado... Inicie Nuevamente la Sesión
                    </h1>
            }
        </>
    );
}
export default ProfilePage;