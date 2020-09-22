import React from 'react';
import { useMChoice } from '../data/useMChoice';
import ShowError from '../components/ShowError';
import withAuth from '../hocs/withAuth';
import { useParams } from 'react-router-dom';
import {message, Skeleton} from 'antd';
import {mutate} from "swr";



const ViewMChoice = () => {
    const mChoice=useMChoice(7)

    return (
        <>
            {
                mChoice.isLoading
                    ? <div>Cargando...</div>
                    : mChoice.isError
                    ? <ShowError error={ mChoice.isError } />
                    : <>
                        Se muestra el multiple choice creado (falta poner que se abra al abrir una prueba y se muestren actividades)
                        <h1 className='correct_answer'>
                           Multiplce: { mChoice.mchoice.correct_answer }
                        </h1>
                        <p>{ mChoice.mchoice.option1 }</p>
                        <p>{ mChoice.mchoice.option2 }</p>
                        <p>{ mChoice.mchoice.option3 }</p>
                        <p>{ mChoice.mchoice.option4 }</p>
                    </>
            }

        </>
    );

};

export default withAuth( ViewMChoice );
