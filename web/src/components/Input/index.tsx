import React, { InputHTMLAttributes } from 'react';
/* InputHTMLAttributes são todos os atributos do html que o input pode receber
explicação 19:20 (A escolha da Stack)*/
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest}) => { //...rest é todas as outras propriedades do html
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} required {...rest}/>
        </div>
    );
}

export default Input;