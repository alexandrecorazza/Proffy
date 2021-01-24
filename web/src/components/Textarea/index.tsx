import React, { TextareaHTMLAttributes } from 'react';
/* InputHTMLAttributes são todos os atributos do html que o input pode receber
explicação 19:20 (A escolha da Stack)*/
import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest}) => { //...rest é todas as outras propriedades do html
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest}/>
        </div>
    );
}

export default Textarea;