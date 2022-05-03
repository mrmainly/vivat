import React, { useEffect } from 'react'
import { FormControlLabel, Checkbox } from '@mui/material'

import { Form, Input, MyButton, MyText } from '../../../../components'
import ThemeMain from '../../../../theme'
import API from '../../../../api'

const ProfileForm = () => {
    useEffect(() => {
        API.getAccountUser().then(res => {
            console.log('res', res)
        })
    }, [])
    return (
        <div>
            <Form sx={{ width: 350 }}>
                <Input label="Фамилия" size="medium" margin="none" />
                <Input label="Имя" size="medium" />
                <Input label="Отчество" size="medium" />
                <Input label="Номер телефона" size="medium" />
                <Input label="Электронная почта" size="medium" />
                <Input label="Дата рождения" size="medium" />
                <FormControlLabel sx={{ mt: 1.5 }} control={<Checkbox defaultChecked />} label={<MyText>Я соглашаюсь с <span style={{ color: ThemeMain.palette.primary.main }}>политикой обработчки персональных данных.</span></MyText>} />
                <MyButton style={{ marginTop: 15 }} fullWidth>Сохранить</MyButton>
            </Form>
        </div>
    )
}

export default ProfileForm