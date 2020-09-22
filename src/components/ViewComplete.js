import React, {useState} from 'react';
import { Card, Col, Input, Row, Skeleton, Button} from "antd";
import {useComplete} from '../data/useComplete';
import ShowError from "../components/ShowError";
const  ViewComplete=()=>{

    const {Complete, isLoading, isError} = useComplete(21);

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

    const handleCheck =() =>{
        let answer=document.querySelector('#answer').value;
        console.log(answer);
        if (answer.toLowerCase()=== Complete.hidden_text.toLowerCase()){
            alert("Respuesta Correcta");
        }else{
            alert("Respuesta Incorrecta");
        }
    }

    return(
        <>
                    <div >
                        <h1>{Complete.title}</h1>
                        <h3>{Complete.description}</h3>
                        <p>{Complete.complete_text.replace(Complete.hidden_text,"___________")}</p>
                        <Input placeholder={"Ingrese la respuesta"} maxLength={255} style={{width: 250}} id='answer'/>
                        <Button onClick={handleCheck}>Verificar</Button>
                    </div>
        </>

    )
}
export default ViewComplete;