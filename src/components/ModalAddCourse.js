import React, {useState} from "react";
import {Button, Form, Input, message, Modal} from "antd";
import API from "../data";
import ErrorList from "./ErrorList";
import {translateMessage} from "../utils/translateMessage";
import {mutate} from 'swr';

const ModalAddCourse = ({
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
                data.append('code', values.code);
                console.log('datos',data);

                try {
                    await API.post(`/student/course/${values.code}`,data ); // post data to server
                    form.resetFields();
                    mutate("/student/courses");
                    setIsSavingCourse(false);
                    onSubmit();
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
    const onUpdate = async values => {
        console.log('Received values of form: ', values);

        form.validateFields()
            .then(async (values) => {
                try {
                    await API.put(`/student/course/${values.code}`,values); // post data to server
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
                title='Ingrese código del Curso'
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
                        label='Ingrese codigo'
                        name='code'
                        rules={[
                            {
                                required: true,
                                max: 4,
                                message: 'Ingresa un código de 4 letras'

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
export default ModalAddCourse;
