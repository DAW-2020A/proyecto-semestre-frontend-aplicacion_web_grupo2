import React, {useEffect, useState} from 'react';
import {Skeleton, Card, Modal, Col, Row, Radio, Typography, Button, List, Avatar, Menu} from 'antd';
import Routes from '../constants/routes';
import {Link} from 'react-router-dom';
import {useCourseListStudent} from '../data/useCourseListStudent';
import ShowError from './ShowError';
import {useAuth} from "../providers/Auth";
import ModalAddCourse from "./ModalAddCourse";


const {Text} = Typography;

const CourseListStudent = (props) => {

    const {currentUser} = useAuth();
    const {coursesStudent, isLoading, isError, mutate} = useCourseListStudent();
    const [showModalAddCourse, setShowModalAddCourse] = useState(true);


    //Mostrar en consola el id del curso seleccionado
    const info = (index) => {
        console.log(index);
    }

    const handleClick = e => {
        console.log('click ', e);
    };

    if (isLoading) {
        return <Row>
            {
                [...new Array(9)].map((_, i) =>
                    <Col xs={24} sm={12} md={8} style={{marginBottom: 30}} key={i}>
                        <div style={{textAlign: 'center'}}>
                            <Skeleton.Image style={{width: 200}}/>
                            <Card title='' extra='' cover='' loading/>
                        </div>
                    </Col>
                )
            }
        </Row>;
    }

    if (isError) {
        return <ShowError error={isError}/>;
    }
    console.log(coursesStudent)

    const afterCreate = async () => {
        await mutate('/student/courses');
        setShowModalAddCourse(false); // close the modal
    };

    return (
        <>
            <>
                <ModalAddCourse
                show={coursesStudent.length === 0}
                close={() => {
                    setShowModalAddCourse(false);
                }}
                update={false}
                onSubmit={afterCreate}/>
            </>
            <h1>Tarjetas</h1>
            <Row justify='center' gutter={30}>
                {
                    coursesStudent.map((course, i) => (
                        //info  ?
                        <Col xs={24} sm={12} md={8} style={{marginBottom: 30}} key={i}>
                            {
                                course.name
                                    ?
                                    <Link to={Routes.TESTSSTUDENT.replace(':id', course.id)}>
                                        <Card
                                            title={course.name}
                                            //onClick={<InfobyCourse courseId={course.id}/>}
                                        >

                                            <Text type='secondary'>{course.created_at}</Text>
                                            <br/>
                                        </Card>
                                    </Link>
                                    : <div style={{textAlign: 'center'}}>
                                        <Skeleton.Image style={{width: 200}}/>
                                        <Card title='' extra='' cover='' loading/>
                                    </div>
                            }
                        </Col>
                    ))
                }
            </Row>
            }
        </>
    );
};
export default CourseListStudent;
