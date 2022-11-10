import { useState, useContext, useEffect } from "react";
import { appendErrors, set, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Navigate, Link } from "react-router-dom";
import { Context } from "./../extra/context";

export default function Auth() {
    const { access, setAccess } = useContext(Context);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: "onSubmit" });

    const onSubmit = data => {
        toast.success("Регистрация прошла успешно");
        setAccess(true);
    };

    return (
        <div className="auth">
            <Toaster
                position="bottom-right"
                toastOptions={{
                    duration: 2000,
                }}
            />
            <div className="auth__forms">
                <form className="enter">
                    <h2 className="enter__title">Вход</h2>
                    <label>Электронная почта</label>
                    <div className="enter__input" id="email__input">
                        <input type="email" />
                    </div>
                    <label>Пароль</label>
                    <label className="enter__remember">Забыли пароль?</label>
                    <div className="enter__input" id="password__input">
                        <input type="password" />
                    </div>
                    <input className="enter__btn" type="button" value="Войти" />
                </form>
                <form className="reg" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="reg__title">Регистрация</h2>
                    <label>ФИО</label>
                    <div className="reg__input" id="fio__input">
                        <input
                            {...register("fio", {
                                required: "Заполните поле с ФИО",
                                minLength: {
                                    value: 6,
                                    message: "Некорректное ФИО",
                                },
                            })}
                            type="text"
                        />
                    </div>
                    <label>Электронная почта</label>
                    <div className="reg__input" id="email__input">
                        <input
                            {...register("email", {
                                required: "Заполните поле с почтой",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                                    message: "Неверный формат почты",
                                },
                            })}
                            type="text"
                        />
                    </div>
                    <label>Пароль</label>
                    <div className="reg__input" id="password__input">
                        <input
                            {...register("password", {
                                required: "Заполните поле с паролем",
                                minLength: {
                                    value: 6,
                                    message: "Слишком короткий пароль",
                                },
                            })}
                            type="password"
                        />
                    </div>
                    {access ? (
                        <Link to="/404">
                            <input className="reg__btn" type="submit" value="Зарегистрироваться" />
                        </Link>
                    ) : (
                        <input
                            onClick={() => {
                                if (errors) {
                                    errors?.fio?.message && toast.error(errors?.fio?.message);
                                    errors?.email?.message && toast.error(errors?.email?.message);
                                    errors?.password?.message && toast.error(errors?.password?.message);
                                }
                            }}
                            className="reg__btn"
                            type="submit"
                            value="Зарегистрироваться"
                        />
                    )}
                </form>
            </div>
            <div className="auth__alternative">
                <p className="auth__alternative-text">или войдите с помощью</p>
                <div className="auth__alternative-method">
                    <img src="./img/modeus.png" alt="" />
                </div>
                <div className="auth__alternative-method">
                    <img src="./img/vk.png" alt="" />
                </div>
                <div className="auth__alternative-method">
                    <img src="./img/gmail.png" alt="" />
                </div>
            </div>
        </div>
    );
}
