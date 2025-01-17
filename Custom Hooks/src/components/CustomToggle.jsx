import useToggle from '../hooks/useToggle';

const CustomToggle = () => {
    const [value, toggleValue] = useToggle(false);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                {value ? '🟢 ON 💡' : '🔴 OFF 💤'}
            </div>
            <button
                onClick={toggleValue}
            >
                Toggle Value
            </button>
        </div>
    );
};

export default CustomToggle;
