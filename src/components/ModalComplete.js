import React, {useState} from "react";
import {Button, Form, Input, message, Modal} from "antd";
import API from "../data";
import ErrorList from "./ErrorList";
import {translateMessage} from "../utils/translateMessage";
import {mutate} from 'swr';

const ModalComplete = ({
                            show,
                            close,
                            update,
                            onSubmit
                        }) => {

    const [form] = Form.useForm();
    const [isSavingActivity, setIsSavingActivity] = useState(false);

    const onCreate = async values => {
        console.log('Received values of form: ', values);

        form.validateFields()
            .then(async (values) => {
                console.log('values', values);
                setIsSavingActivity(true);

                // use form data to be able to send a file to the server
                const data = new FormData();
                data.append('title', values.title);
                data.append('description', values.description);
                data.append('score', values.score);
                data.append('complete_text', values.complete_text);
                data.append('hidden_text', values.hidden_text);
                console.log('datos',data);

                try {
                    await API.post('/activities/complete',data ); // post data to server
                    form.resetFields();
                    //mutate("/student/courses");
                    setIsSavingActivity(false);
                    onSubmit();
                } catch (e) {
                    setIsSavingActivity(false);
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
    const onUpdate = async values => {
        console.log('Received values of form: ', values);

        form.validateFields()
            .then(async (values) => {
                try {
                    await API.put('/activities',values); // post data to server
                    form.resetFields();
                    onSubmit();
                } catch (error) {
                    console.error(
                        'You have an error in your code or there are Network issues.',
                        error
                    );

                    message.error(translateMessage(error.message));
                }
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });

    };

    return (
        <>
            <Modal
                title='Complete'
                visible={show}
                onOk={!update
                    ? onCreate
                    : onUpdate}
                onCancel={close}
                confirmLoading={isSavingActivity}

            >
                <Form
                    form={form}
                    name='form_in_modal'
                    initialValues={{remember: true}}
                    //onFinish={onFinish}
                    //onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label='Enunciado'
                        name='title'
                        rules={[
                            {
                                required: true,
                                message: 'Ingresa un enunciado',

                            }
                        ]}
                    >
                        <Input rows={4} colums={2}/>
                    </Form.Item>
                    <Form.Item
                        label='Descripción'
                        name='description'
                        rules={[
                            {
                                required: true,
                                message: 'Ingresa una descripción',

                            }
                        ]}
                    >
                        <Input rows={4} colums={2}/>
                    </Form.Item>
                    <Form.Item
                        label='Puntaje'
                        name='score'
                        rules={[
                            {
                                required: true,
                                message: 'Ingresa un puntaje',

                            }
                        ]}
                    >
                        <Input  size={"small"}/>
                    </Form.Item>
                    <Form.Item
                        label='Texto'
                        name='complete_text'
                        rules={[
                            {
                                required: true,
                                message: 'Ingresa un texto',

                            }
                        ]}
                    >
                        <Input rows={4} colums={2}/>
                    </Form.Item>
                    <Form.Item
                        label='Palabra a completar'
                        name='hidden_text'
                        rules={[
                            {
                                required: true,
                                message: 'Ingresa una palabra',

                            }
                        ]}
                    >
                        <Input rows={2}/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
export default ModalComplete;
