import React, {useState} from 'react';
import {Button, Col, message, Row} from "antd";
import Routes from '../constants/routes';
import {ArrowLeftOutlined, PlusOutlined} from "@ant-design/icons";
import {mutate} from "swr";
import InfobyCourse from "../components/InfobyCourse";
import {Link,useParams} from 'react-router-dom';
import {translateMessage} from "../utils/translateMessage";
import ModalComplete from "../components/ModalComplete";
import ViewComplete from "../components/ViewComplete";
import ModalMultipleChoice from "../components/ModalMultipleChoice";
import ViewMChoice from "../components/ViewMChoice";



const  InfoCourseTeacher=()=>{

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
            <div>
                <Row>
                    <Col span={6}>
                        <Link to={Routes.HOME_TEACHER}><Button type="text" icon={<ArrowLeftOutlined />}>Regresar</Button></Link>
                    </Col>
                    <Col span={12} align={'right'}>
                        <Link to={Routes.CREATETEST}><Button type={'primary'}>Crear nueva prueba</Button></Link>
                    </Col>
                </Row>

                <br/>
                <div>

                    <InfobyCourse courseId={id}/>

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
            </div>
        </>

    )
}
export default InfoCourseTeacher;