import "./NotFound.scss";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="nf">
            <h1 className="nf__status">404</h1>
            <p className="nf__info">Кажется, вы потерялись :)</p>
            <a className="nf__back" href="#" onClick={() => navigate(-1)}>
                Вернуться назад
            </a>
        </div>
    );
}

export default NotFound;
