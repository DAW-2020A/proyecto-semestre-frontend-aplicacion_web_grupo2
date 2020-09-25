import React, {useState} from 'react';
import {Alert, Col, Row, Button, Form, Input, Typography, Card,message} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {Link, useParams} from "react-router-dom";
import Routes from "../constants/routes";
import complete from '../images/complete.jpg';
import multiple from '../images/multiple.jpg';
import crucigrama from '../images/crucigrama.jpg';
import sopa from '../images/sopa.png';
import {mutate} from "swr";
import {translateMessage} from "../utils/translateMessage";
import InfobyCourse from "../components/InfobyCourse";
import ModalComplete from "../components/ModalComplete";
import ModalMultipleChoice from "../components/ModalMultipleChoice";
import ViewMChoice from "../components/ViewMChoice";

const NewTest=()=>{
    const { TextArea } = Input;
    const {Title} = Typography;
    const { Meta } = Card;
    const [showComplete, setShowComplete] = useState(false);
    const [showMultipleChoice, setShowMultipleChoice] = useState(false);
    //const auth=useAuth();
    let {id}=(useParams());

    //const courseId = useCourseInfo(id);

    const afterCreate = async () => {
        try {
            // show skeleton
            await mutate('/activities', async activities => {
                //return {data: [{}, ...activities.data]};
            }, false);

            await mutate('/activities');
            setShowComplete(false); // close the modal
        } catch (error) {
            console.error(
                'You have an error in your code or there are Network issues.',
                error
            );

            message.error(translateMessage(error.message));
        }
    };
    return(
        <>
            <Row>
                <Col span={6}>
                    <Link to={Routes.HOME_TEACHER}><Button type="text" icon={<ArrowLeftOutlined />}>Regresar</Button></Link>
                </Col>
                <Col span={12} align={'center'} >
                    <Title style={{color: '#ff4d4f'}}>Creación de evaluaciones</Title>
                </Col>
            </Row>
            <Row align={'center'}>
                <Col>
                    <Input placeholder="Nombre de la Evaluación" size="default dize" style={{width:'650px'}}/>
                    <br/>
                    <br/>
                    <TextArea rows={4} placeholder="Descripción" size="default dize"/>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row align={'center'}>
                <Alert message="Elige las actividades que desea integrar a su evalacuión" type="info" showIcon/>
            </Row>
            <br/>
            <Row align={'center'}>
                <Card onClick={() => {
                    setShowMultipleChoice(true);}}
                    hoverable
                    style={{ width: 240,background:'#ff4d4f',textAlign:'center'}}
                    cover={<img alt="example" src={multiple} style={{ width: 240, height:200}}/>}
                >
                    <Meta title="Opción Múltiple"/>
                </Card>
                <Card onClick={() => {
                    setShowComplete(true);
                }}
                    hoverable
                    style={{ width: 240,background:'#ff4d4f',textAlign:'center'}}
                    cover={<img alt="example" src={complete} style={{ width: 240, height:200}}/>}
                >
                    <Meta title="Complete"/>
                </Card>
                <Card
                    hoverable
                    style={{ width: 240,background:'#ff4d4f',textAlign:'center'}}
                    cover={<img alt="example" src={crucigrama} style={{ width: 240, height:200}}/>}
                >
                    <Meta title="Crucigrama"/>
                </Card>
                <Card
                    hoverable
                    style={{ width: 240,background:'#ff4d4f',textAlign:'center'}}
                    cover={<img alt="example" src={sopa} style={{ width: 240, height:200}}/>}
                >
                    <Meta title="Sopa de Letras"/>
                </Card>
            </Row>
            <div>
                <ModalComplete
                    show={showComplete}
                    close={ () => {
                        setShowComplete( false );
                    } }
                    update={false}
                    onSubmit={afterCreate}
                />
                <div >


                </div>
                <ModalMultipleChoice
                    show={showMultipleChoice}
                    close={ () => {
                        setShowMultipleChoice( false );
                    } }
                    update={false}
                    onSubmit={afterCreate}
                />
                <ViewMChoice />
            </div>
        </>
    );
}
export default NewTest;