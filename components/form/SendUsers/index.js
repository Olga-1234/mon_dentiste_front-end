/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Button from '../../button';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '../../../layout/layoutSideBar';
import config from '../../../config/index';

const SendUsers = () => {
    const validationSchema = yup.object().shape({
        userfirstName: yup.string().required('Le champs prenom est obligatoire'),
        userName: yup.string().required('Le champs nom est obligatoire'),
        address: yup.string().required('Le champs adresse est obligatoire'),
        sexe: yup.string().required('Le champs sexe est obligatoire'),
        birthdate: yup.string().required('Le champs date de naissance est obligatoire'),
        cabinets: yup.string().required('Le champs cabinet est obligatoire'),
        roles: yup.string().required('Le champs role est obligatoire'),
        tel: yup.string().required('Le champs téléphone est obligatoire'),
        email: yup.string().required('Le champs email est obligatoire').email('Le champs email n\'est pas valide '),
        password: yup
            .string()
            .min(6, 'Le champs mot de passe doit avoir 6 caractère')
            .required('Le champs mot de passe est obligatoire')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // const {
    //   register,
    //   formState: { errors },
    //   handleSubmit,
    // } = useForm({ mode: "onSubmit" });

    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    const onSubmit = async (data) => {
        console.log('les informat', data);
        try {
            console.log(localStorage.getItem('token'), 'hfuehv -fehvhrg ');
            const response = await axios
                .post(`${config.api}/article`, data, {
                    headers: {
                        'x-access-token': `${localStorage.getItem('token')}`
                    }
                })
                .data.then((res) => {
                    console.log('res', res.data);
                })
                .catch((err) => {
                    console.log('error in request', err);
                });
        } catch (error) {
            console.log('llele', error);
        }
    };

    return (
        <div className={` col-12 ${style.respensivepadding}`}>
            <h1 className={`h4 d-flex px-5 justify-content-center `}>
                {' '}
                Formulaire D'enregistrements des utilisateurs
            </h1>
            <div className=" d-flex  justify-content-center py-5">
                <form
                    className={`col-lg-8 row g-4 `}
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className=" form-group col-md-12">
                        <input
                            type="text"
                            className={`col-12 py-2 bg-light form-control ${
                                errors.userName ? 'is-invalid' : ''
                            } ${style.bordergreen}`}
                            id="inputuserName"
                            placeholder="Nom"
                            name="userName"
                            {...register('userName', { required: true })}
                        />
                        <div className="invalid-feedback ">{errors.userName?.message}</div>
                    </div>
                    <div className="col-md-12">
                        <input
                            type="text"
                            className={`col-12 py-2 bg-light form-control ${
                                errors.userfirstName ? 'is-invalid' : ''
                            } ${style.bordergreen}`}
                            id="inputuserfirstName"
                            placeholder="Prenom"
                            name="userfirstName"
                            // ref={register({ required: "This is required." })}
                            {...register('userfirstName', { required: true })}
                        />
                        <div className="invalid-feedback">{errors.userfirstName?.message}</div>
                    </div>
                    <div className="col-md-12">
                        <input
                            type="email"
                            className={`col-12 py-2 bg-light form-control ${
                                errors.email ? 'is-invalid' : ''
                            } ${style.bordergreen}`}
                            id="email"
                            placeholder="email"
                            name="email"
                            {...register('email', { required: true })}
                        />
                        <div className="invalid-feedback">{errors.email?.message}</div>
                    </div>

                    <div className="col-md-12">
                        <input
                            type="text"
                            className={`col-12 py-2 bg-light form-control ${
                              errors.address ? 'is-invalid' : ''
                          } ${style.bordergreen}`}                            id="inputaddress"
                            placeholder="Adresse"
                            name="address"
                            {...register('address', { required: false })}
                        />
                        <div className="invalid-feedback">{errors.address?.message}</div>

                    </div>

                    <div className="col-md-12">
                        <input
                            type="text"
                            className={`col-12 py-2 bg-light form-control ${
                              errors.sexe ? 'is-invalid' : ''
                          } ${style.bordergreen}`}                             id="sexe"
                            placeholder="sexe"
                            name="sexe"
                            {...register('sexe', { required: true })}
                        />
                        <div className="invalid-feedback">{errors.sexe?.message}</div>

                    </div>
                    <div className="col-md-12">
                        <input
                            type="date"
                            className={`col-12 py-2 bg-light form-control ${
                              errors.birthdate ? 'is-invalid' : ''
                          } ${style.bordergreen}`}                             id="birthdate"
                            placeholder="Date de Naissance"
                            name="birthdate"
                            {...register('birthdate', { required: true })}
                        />
                        <div className="invalid-feedback">{errors.birthdate?.message}</div>

                    </div>
                    <div className="col-md-12">
                        <input
                            type="number"
                            className={`col-12 py-2 bg-light form-control ${
                              errors.tel ? 'is-invalid' : ''
                          } ${style.bordergreen}`}                            id="tel"
                            placeholder="Téléphone"
                            name="tel"
                            {...register('tel', { required: true })}
                        />
                        <div className="invalid-feedback">{errors.tel?.message}</div>

                    </div>
                    <div className="col-md-12">
                        <input
                            type="text"
                            className={`col-12 py-2 bg-light form-control ${
                              errors.cabinets ? 'is-invalid' : ''
                          } ${style.bordergreen}`}                              id="cabinets"
                            placeholder="cabinets"
                            name="cabinets"
                            {...register('cabinets', { required: true })}
                        />
                        <div className="invalid-feedback">{errors.cabinets?.message}</div>

                    </div>
                    <div className="col-md-12">
                        <input
                            type="text"
                            className={`col-12 py-2 bg-light form-control ${
                              errors.roles ? 'is-invalid' : ''
                          } ${style.bordergreen}`} 
                            id="role"
                            placeholder="role"
                            name="roles"
                            {...register('roles', { required: true })}
                        />
                        <div className="invalid-feedback">{errors.roles?.message}</div>

                    </div>

                    <div className="col-md-12">
                        <input
                            type="password"
                            className={`col-12 py-2 bg-light form-control ${
                              errors.password ? 'is-invalid' : ''
                          } ${style.bordergreen}`} 
                                                      id="password"
                            placeholder="mot de passe"
                            name="password"
                            {...register('password', { required: true })}
                        />
                        <div className="invalid-feedback">{errors.password?.message}</div>

                    </div>

                    <div className="col-12 d-flex justify-content-center">
                        <Button text="Envoyer" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SendUsers;
