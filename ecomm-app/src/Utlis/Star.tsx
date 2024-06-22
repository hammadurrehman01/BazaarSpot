import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
const Star = () => {
    const [value, setValue] = useState<number | null>(2);

    return (
        <div>
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(_, newValue) => {
                        setValue(newValue);
                    }}
                />

            </Box>
        </div>
    )
}

export default Star;