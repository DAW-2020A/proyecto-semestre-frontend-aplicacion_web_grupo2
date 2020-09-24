import {Button, Col, Form, Input, message, Row} from "antd";
import React, {useState} from "react";
import {useAuth} from "../providers/Auth";
import {Image} from "antd";
import FirstTeacher from "../images/FirstTeacher.png";
import API from "../data";
import {mutate} from "swr";
import ErrorList from "../components/ErrorList";
import {translateMessage} from "../utils/translateMessage";
import Cookies from "js-cookie";
import {PlusOutlined} from "@ant-design/icons";
import withoutAuth from "../hocs/withoutAuth";

const FirstPageStudent = () => {

    const auth=useAuth();
    const [form] = Form.useForm();

    const [isSavingCourse, setIsSavingCourse] = useState(false);

    const onFinish = async values => {
        console.log('Received values of form: ', values);

        form.validateFields()
            .then(async (values) => {
                console.log('values', values);
                setIsSavingCourse(true);

                // use form data to be able to send a file to the server
                const data = new FormData();
                data.append('name', values.name);
                console.log('datos',data);

                try {
                    await API.post(`/courses`,data ); // post data to server
                    form.resetFields();
                    mutate('/courses');
                    setIsSavingCourse(false);

                } catch (e) {
                    setIsSavingCourse(false);
                    console.log("e",e);
                    if(e.status === 404){
                        message.error("No existe un curso con ese código");
                    }else {
                        const errorList = e.error && <ErrorList errors={e.error}/>;
                        message.error(<>{translateMessage(e.message)}{errorList}</>);
                    }
                }
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });

    };

    return (
        <>
            <Row style={{marginBottom: 150}}>

                <Col span={6} push={15} style={{backgroundColor: '#E5ECEC'}}>
                    <h1 style={{fontFamily: 'helvética', fontSize: 45, textAlign: 'center'}}>
                        ¡Te damos la<br/>
                        bienvenida a<br/>
                        TRIAL Q!<br/>

                    </h1>
                    <h3>Crea tu primer Curso</h3>
                    <Form
                        form={form}
                        name='form'
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                        //onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            name='name'
                            rules={[
                                {
                                    required: true,
                                    max: 10,
                                    message: 'Ingresa un curso valido'

                                }
                            ]}
                        >
                            <Input rows={4}/>
                        </Form.Item>
                    </Form>
                    <Form.Item>
                        {
                            auth.isAuthenticated &&
                            <Button style={{marginLeft: 100}} type="primary"  htmlType="submit">
                                Crear
                            </Button>
                        }

                    </Form.Item>
                </Col>
                <Col span={18} pull={6}>

                    <Image style={{marginLeft: 80}} width={450} height={200} src={FirstTeacher}/>

                </Col>
            </Row>
        </>
    );
};

export default withoutAuth(FirstPageStudent);
