import React, {useState} from "react";
import {Button, Form, Input, message, Modal} from "antd";
import API from "../data";
import ErrorList from "./ErrorList";
import {translateMessage} from "../utils/translateMessage";
import {mutate} from 'swr';

const ModalNewCourse = ({
                            show,
                            close,
                            update,
                            onSubmit
                        }) => {

    const [form] = Form.useForm();
    const [isSavingCourse, setIsSavingCourse] = useState(false);

    const onCreate = async values => {
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
                    await API.post('/courses', data); // post data to server
                    form.resetFields();
                    setIsSavingCourse(false);
                    onSubmit();
                } catch (e) {
                    setIsSavingCourse(false);

                    const errorList = e.error && <ErrorList errors={e.error}/>;
                    message.error(<>{translateMessage(e.message)}{errorList}</>);
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
                console.log('son values',values);
                try {
                    await API.put('/courses', values); // post data to server
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
                title='Ingrese nombre del Curso'
                visible={show}
                onOk={!update
                    ? onCreate
                    : onUpdate}
                onCancel={close}
                confirmLoading={isSavingCourse}

            >
                <Form
                    form={form}
                    name='form_in_modal'
                    initialValues={{remember: true}}


                    //onFinish={onFinish}
                    //onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label='Ingrese nombre'
                        name='name'
                        rules={[
                            {
                                required: false,
                                message: 'Ingresa un nombre válido',

                            }
                        ]}
                    >
                        <Input rows={4}/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
export default ModalNewCourse;
