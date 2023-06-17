import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/UseUser";

export const Login = () => {

    const navigation = useNavigate();
    const { setIsLogin } = useUser();

    const [userInfo, setUserInfo] = useState({
        email: "recetas@upb.edu.co",
        password: "1234",
    });

    const userLogin = (e) => {
        e.preventDefault();
        if (userInfo.email === "recetas@upb.edu.co" && userInfo.password === "1234") {
            setIsLogin(true);
            localStorage.setItem("login", true);
            navigation("/recetas");
            return;
        }
    };

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    };

    return (
        <div className="body-login">
            <div className="fondo-color">
                <div className="centrado animate__animated animate__fadeInLeft animate__slow">

                    <div className="text-decoration">
                        <h1><span className="text-color">¡Bienvenido!</span> Encuentra aquí todas tus <span className="text-color">recetas</span> favoritas.</h1>
                    </div>
                    <div className="boder-form">
                        <form className="size-form" onSubmit={userLogin}>
                            <h1 className="text-white mb-3 title-form">Inicia Sesión</h1>
                            {
                                userInfo.email === "recetas@upb.edu.co"
                                    ? <div className="mb-3">
                                        <input type="email" name="email" className="input-form" value={userInfo.email} autoFocus onChange={(e) => handleChange(e)} required />
                                    </div>
                                    : <div className="mb-3">
                                        <input type="email" name="email" className="input-form text-danger" value={userInfo.email} autoFocus onChange={(e) => handleChange(e)} required />
                                        <p className="text-error">El correo es invalido</p>
                                    </div>
                            }
                            {
                                userInfo.password === "1234"
                                    ? <div className="mb-3">
                                        <input type="password" name="password" className="input-form" value={userInfo.password} autoFocus onChange={(e) => handleChange(e)} placeholder="contraseña" required />
                                    </div>
                                    : <div className="mb-3">
                                        <input type="password" name="password" className="input-form text-danger" value={userInfo.password} autoFocus onChange={(e) => handleChange(e)} placeholder="contraseña" required />
                                        <p className="text-error">La contraseña es invalida</p>
                                    </div>
                            }
                            {
                                userInfo.email === "recetas@upb.edu.co" && userInfo.password === "1234"
                                    ? <><button type="submit" className="btn">Login <i className="fas fa-utensils"></i></button></>
                                    : <button type="submit" className="btn btn-danger" disabled>Login <i className="fas fa-utensils"></i></button>
                            }
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

