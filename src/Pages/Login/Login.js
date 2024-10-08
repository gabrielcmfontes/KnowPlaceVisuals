import React, { useState } from 'react';
import styles from "./Login.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from '../../components/Header/Header';
import Axios from "axios";

function Login() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const handleClickLogin = (values) => {
        Axios.post("http://localhost:3001/login", {
            email: values.email,
            password: values.password,
        }).then((response) => {
            if (response.data === "Usuário logado") {
                navigate('/videos');
            } else {
                setErrorMessage(response.data);  
            }
        }).catch((error) => {
            setErrorMessage("Erro de conexão, tente novamente mais tarde.");  
            console.log(error);
        });
    };

    const validationLogin = yup.object().shape({
        email: yup.string().email("Insira um email válido").required("Este campo é obrigatório"),
        password: yup.string().min(8, "A senha deve ter 8 caracteres").required("Este campo é obrigatório"),
    });

    return (
        <>
            <Header background={"#202020"} />
            <div className={styles.containerLogin}>
                <section className={styles.loginBox}>
                    <h1>Login</h1>
                    <Formik
                        initialValues={{}}
                        onSubmit={handleClickLogin}
                        validationSchema={validationLogin}
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
                            <button className={styles.button} type="submit">Login</button>
                        </Form>
                    </Formik>
                    {errorMessage && (
                        <div className={styles.errorMessage}>
                            {errorMessage}
                        </div>
                    )}
                    <p className={styles.registerPrompt}>
                        Não tem uma conta? <Link to="/register" className={styles.registerLink}>Cadastre-se</Link>
                    </p>
                </section>
            </div>
            <Footer className={styles.footer} />
        </>
    );
}

export default Login;
