import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { ToggleButtonProps } from '../../../interface';

const MyToggleButton: React.FC<ToggleButtonProps> = ({ ...props }) => {
    const [alignment, setAlignment] = React.useState('phone');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            {...props}
        >
            <ToggleButton value="phone">Телефон</ToggleButton>
            <ToggleButton value="Email">Email</ToggleButton>
        </ToggleButtonGroup>
    );
}

export default MyToggleButton