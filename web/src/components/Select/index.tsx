import React, { SelectHTMLAttributes } from 'react';
/* InputHTMLAttributes são todos os atributos do html que o input pode receber
explicação 19:20 (A escolha da Stack)*/
import './styles.css';

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<InputProps> = ({ label, name, options, ...rest}) => { //...rest é todas as outras propriedades do html
    return (
        <div className={label==='' ? 'nada' : 'select-block'}>
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} required {...rest}>
                <option value="" disabled hidden>Selecione uma opção</option>
                { options.map(option => {
                    return <option key={option.value}  value={option.value}>{option.label}</option>
                }) }
                {/* Quando criamos uma estrutura de repetição no React e percorremos um array retornando para 
                cada posição do array um html, o primeiro elemento dentro do map precisa ter uma propriedade
                chamada key */}
            </select>
        </div>
    );
}

export default Select;