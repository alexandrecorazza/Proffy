import React from 'react'
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css'

interface PageHeaderProps {
    title: string;
    description?: string;   /* adicionando o ? antes de : faz com que nossa propriedade não seja obrigatória.
    Isso pq a página teacherList não é obrigado a ter essa propriedade, apenas a teacherForm */
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {    //Tudo isso é para passarmos uma prop para o nosso componente.
    /*
        Se não quisessemos passar a props, teríamos simplesmente o seguinte:
        function PageHeader (){
            ...
        }
        Como queremos passar uma prop, é necessário declarar como const, colocar a tipagem(e para isso criamos a interface) e
        tbm add arrow function
    */
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p> }
                {/* { props.description? <p>test</p> : null } IF + ELSE */}
                {/* { props.description && <p>test</p> } IF */}

                {props.children}
            </div>
        </header>
    );
}

export default PageHeader