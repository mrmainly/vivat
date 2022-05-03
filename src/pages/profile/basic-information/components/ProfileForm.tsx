import React, { useEffect, useState, useContext } from 'react'
import { FormControlLabel, Checkbox, TextField, Box, CircularProgress } from '@mui/material'
import { styled } from '@mui/system'
import { useForm } from 'react-hook-form'

import { Form, Input, MyButton, MyText, ProfileUpdateModal } from '../../../../components'
import ThemeMain from '../../../../theme'
import { DispatchContext } from '../../../../store'
import API from '../../../../api'

const InputProfile = styled(TextField)(({ theme }) => ({
    background: 'white'
}))

const ProfileForm = () => {
    const [phone, setPhone] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [date, setDate] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [mail, setMail] = useState('')
    const [loading, setLoading] = useState(true)

    const dispatch = useContext(DispatchContext)

    const { register, handleSubmit } = useForm({
        mode: "onBlur",
    })
    const getAccountUser = () => {
        API.getAccountUser().then(res => {
            console.log('res', res)
            const data = res.data
            setPhone(data.phone)
            setFirstName(data.first_name)
            setLastName(data.last_name)
            setMail(data.email)
            setPatronymic(data.patronymic)
        })
        setLoading(false)
    }

    useEffect(() => {
        getAccountUser()
    }, [])
    const putAccountUser = () => {
        API.putAccountUser({
            email: mail,
            first_name: firstName,
            last_name: lastName,
            patronymic: patronymic,
            phone: phone
        }, dispatch)
    }

    return (
        <Box sx={{ width: 350 }}>
            <ProfileUpdateModal />
            {loading &&
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress sx={{ mb: 2 }} />
                </Box>
            }
            <InputProfile label="Фамилия" fullWidth value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <InputProfile label="Имя" margin="normal" fullWidth value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <InputProfile label="Отчество" margin="normal" fullWidth value={patronymic} onChange={(e) => setPatronymic(e.target.value)} />
            <InputProfile label="Номер телефона" margin="normal" fullWidth value={phone} onChange={(e) => setPhone(e.target.value)} />
            <InputProfile label="Электронная почта" margin="normal" fullWidth value={mail} onChange={(e) => setMail(e.target.value)} />
            <InputProfile label="Дата рождения" margin="normal" fullWidth />
            <FormControlLabel sx={{ mt: 1.5 }} control={<Checkbox defaultChecked />} label={<MyText>Я соглашаюсь с <span style={{ color: ThemeMain.palette.primary.main }}>политикой обработчки персональных данных.</span></MyText>} />
            <MyButton style={{ marginTop: 15 }} fullWidth onClick={() => putAccountUser()}>Сохранить</MyButton>
        </Box>
    )
}

export default ProfileForm