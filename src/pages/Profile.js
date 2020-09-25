import React, {useState, useEffect} from 'react';
import API from '../data';
import {useAuth} from "../providers/Auth";
import {Descriptions, Button, Card, Avatar, Skeleton} from "antd";
import {ArrowLeftOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import Routes from '../constants/routes';

const { Meta } = Card;

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

                        <Card
                            title="Perfil"
                            extra={<Button type="primary">Edit</Button>}
                        >
                            <Card.Grid >{info.name}</Card.Grid>
                            <Card.Grid >{info.lastname}</Card.Grid>
                            <Card.Grid >{info.email}</Card.Grid>
                            {
                                info.role=='ROLE_TEACHER' ?
                                    <Card.Grid >Profesor</Card.Grid>
                                    : info.role=='ROLE_STUDENT' ?
                                    <Card.Grid >Estudiante</Card.Grid>
                                    : <Card.Grid >Administrador</Card.Grid>
                            }
                        </Card>
                    </div>
                    :
                    <Skeleton avatar active >
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title="Card title"
                            description="This is the description"
                        />
                    </Skeleton>
            }
        </>
    );
}
export default ProfilePage;