import React, { useState, useEffect } from 'react';
import API from '../data';
import {useAuth} from "../providers/Auth";
import {Descriptions} from "antd";
const ProfilePage = () =>{

    const info=useAuth().currentUser
    console.log(useAuth().currentUser);

    return (
        <>
            {
                info ?
                    <div>
            <Descriptions title="Información de mi Perfil">
                <Descriptions.Item label="Nombre">{info.name}</Descriptions.Item>
                <Descriptions.Item label="Correo">{info.email}</Descriptions.Item>
                <Descriptions.Item label="Rol">{info.role}</Descriptions.Item>
            </Descriptions>
                {
                    info.userable_type === 'App\\Admin' ?
                        <Descriptions title="Administrador">
                        <Descriptions.Item label="Credencial">
                            {info.credential_number}
                        </Descriptions.Item>
                    </Descriptions>

                        : <Descriptions title="Escritor">
                            <Descriptions.Item label="Editorial">
                                {info.editorial}
                            </Descriptions.Item>
                            <Descriptions.Item label="Biografía">
                                {info.short_bio}
                            </Descriptions.Item>
                    </Descriptions>
                }
                    </div>
                :
        <h1 className='title'>
            Profile Page
        </h1>
            }
            </>
    );
}
export default ProfilePage;