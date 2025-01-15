import useCustomWindowSize from '../hooks/useCustomWindowSize';

const CustomWindowSize = () => {

    const {width,height} = useCustomWindowSize();
    return <>
        <h1>
            Custom Window Size Hook
        </h1>
        <h3>Width ➡ {width}</h3>
        <h3> Height ➡ {height} </h3>
    </>
}

export default CustomWindowSize;