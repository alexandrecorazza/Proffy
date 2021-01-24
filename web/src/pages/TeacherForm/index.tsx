import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg'
import cancelIcon from '../../assets/images/icons/cancel.svg'
import './styles.css'
import api from '../../services/api';

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setsubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' },
    ]);

function addNewScheduleItem() {
    setScheduleItems([
        ...scheduleItems,
        { week_day: 0, from: '', to: '' }
    ]);
}

// setScheduleItemValue (0, 'week_day', '2')
// explicação da função setScheduleItemValue, assim como a sua chamada 1:24:35 (A escolha da stack)
function setScheduleItemValue(position: number, field: string, value: string) {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {   //o map retorn além do item, a posição do array original (explicação 1:25:02)
        if(index === position) {
            return { ...scheduleItem, [field]: value}; 
            /* 
                ...scheduleItem é o { week_day: 0, from: '', to: '' }
                o [field] vai sobrescrever o field em questão. Se o field for week_day, ele vai colocar no week_day
                o dia(value) que veio como parâmetro
            */
        }

        return scheduleItem
    });

    console.log(updateScheduleItems);
    setScheduleItems(updateScheduleItems);
}

function deleteScheduleItem(position: number) {
    console.log(position)
    const newArray = scheduleItems.filter((scheduleItem, index) => {
        return position !== index
    })
    console.log('antigo array: ', scheduleItems)
    console.log('novo array: ', newArray)
    setScheduleItems(newArray)
}

function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {  //podemos usar async await, mas como é apenas uma chamada a api, não tem necessidade
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems
    }).then(() => {
        alert('Cadastro realizado com sucesso!');
        history.push('/');  //redirecionar o usuário para a landing page assim que ele fizer o cadastro.
    }).catch(() => {
        alert('Erro no cadastro!');
    })

    console.log({
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        scheduleItems
    });
}
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input 
                            name="name"
                            label="Nome completo"
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
                        />
                        <Input 
                            name="avatar" 
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => {setAvatar(e.target.value)}}/>
                        <Input 
                            name="whatsapp" 
                            label="WhatsApp"
                            value={whatsapp}
                            onChange={(e) => {setWhatsapp(e.target.value)}}/>
                        <Textarea 
                            name="bio" 
                            label="Biografia"
                            value={bio}
                            onChange={(e) => {setBio(e.target.value)}}/>
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select 
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(e) => {setsubject(e.target.value)} }
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Educação física', label: 'Educação física' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Química', label: 'Química' }
                            ]}
                        />
                        {/* Pesquisar sobre react-select que é um pacote do react para fazer selects personalizados */}
                        <Input
                            name="cost"
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={(e) => {setCost(e.target.value)} }
                        />
                    </fieldset>
                    
                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>
                    
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={index} className="schedule-item">
                                    <Select 
                                        name="week_day"
                                        label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    />
                                    <Input 
                                        name="from" 
                                        label="Das" 
                                        type="time" 
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />
                                    <Input 
                                        name="to" 
                                        label="Até" 
                                        type="time" 
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
                                    <div className="delete-item">
                                        <img src={cancelIcon} alt="Deletar" onClick={() => deleteScheduleItem(index)}/>
                                    </div>
                                </div>
                            );
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;