import React, { useMemo } from 'react';

interface CountdownUnit {
    label: string;
    value: number;
}

const getRandomTime = (): CountdownUnit[] => {
    return [
        { label: 'Days', value: 3 },
        { label: 'Hours', value: 23 },
        { label: 'Minutes', value: 19 },
        { label: 'Seconds', value: 56 },
    ];
};

const CountdownTimer: React.FC = () => {
    const countdownTime = useMemo(() => getRandomTime(), []); 

    return (
        <div className='flex items-center space-x-2 md:space-x-4 mt-2 md:mt-0'>
            {countdownTime.map((unit, index) => (
                <div className='items-center space-x-1 ml-10' key={index}>
                    <h4 className='text-[var(--mainTextBlack)] font-semibold'>{unit.label}</h4>
                    <em className='text-[var(--mainTextBlack)] font-bold text-[1.7rem]'>{unit.value}
                    {index !== countdownTime.length - 1 && (
                        <span className='text-[var(--mainSecondaryRedish)] ml-4'>:</span>
                    )}
                    </em>
                </div>
            ))}
        </div>
    );
};

export default CountdownTimer;
