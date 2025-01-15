import useCustomCounter from '../hooks/useCustomCounter';

const CustomCounter = () => {

    const {count,increment,decrement,reset} = useCustomCounter(0,2);
    return <>
        <h1>
            Custom Counter Hook
        </h1>
        <p>Count ➡ {count}</p>
        <button onClick={increment}>Increment Counter</button>
        <button onClick={decrement} >Decrement Counter</button>
        <button onClick={reset}>Reset Counter</button>
    </>
}

export default CustomCounter;