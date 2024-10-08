import React from 'react';
import styles from "./Cadastro.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from '../../components/Header/Header';
import Axios from "axios";


function Cadastro() {
    const handleClickRegister = (values) => {
        Axios.post("http://localhost:3001/register", {
            email: values.email,
            password: values.password,
        }).then((response) => {

            console.log(response);

        })
    };

    const validationRegister = yup.object().shape({
        email: yup.string().email("Insira um email válido").required("Este campo é obrigatório"),
        password: yup.string().min(8, "A senha deve ter 8 caracteres").required("Este campo é obrigatório"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais")
    });

    return (
        <>
            <Header background={"#202020"} />
            <div className={styles.containerCadastro}>
                <section className={styles.loginBox}>
                    <h1>Cadastro</h1>
                    <Formik
                        initialValues={{ email: '', password: '', confirmPassword: '' }}
                        onSubmit={handleClickRegister}
                        validationSchema={validationRegister}
                    >
                        <Form className={styles.loginForm}>
                            <div className={styles.loginFormGroup}>
                                <Field name="email" className={styles.formField} placeholder="Email" />
                                <ErrorMessage
                                    component="span"
                                    name="email"
                                    className={styles.formError}
                                />
                            </div>

                            <div className={styles.loginFormGroup}>
                                <Field name="password" className={styles.formField} placeholder="Password" />
                                <ErrorMessage
                                    component="span"
                                    name="password"
                                    className={styles.formError}
                                />
                            </div>

                            <div className={styles.loginFormGroup}>
                                <Field name="confirmPassword" className={styles.formField} placeholder="Confirme sua senha" />
                                <ErrorMessage
                                    component="span"
                                    name="confirmPassword"
                                    className={styles.formError}
                                />
                            </div>
                            <button className={styles.button} type="submit">Cadastrar</button>
                        </Form>
                    </Formik>
                    <p className={styles.registerPrompt}>
                        Já tem uma conta? <Link to="/login" className={styles.registerLink}>Faça login</Link>
                    </p>
                </section>
            </div>
            <Footer className={styles.footer} />
        </>
    );
}

export default Cadastro;
