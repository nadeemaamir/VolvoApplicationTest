import React, {
    useState,
    useEffect,
    useCallback,
    useRef,
    SyntheticEvent,
} from 'react';
import HeaderSearch from '../components/HeaderSearch';
import Slider from '../components/MainCarousel/index';
import './Cars.css';

function Cars() {
    const [data, setData] = useState([]);
    const originalData = useRef(data);

    const fetchData = useCallback(async () => {
        const response = await fetch('/api/cars.json');
        const json = await response.json();
        originalData.current = json;

        setData(json);
    }, [setData]);

    const filterData = useCallback(
        (e: SyntheticEvent) => {
            const target = e.target as HTMLInputElement;
            const value = target.value;
            const filteredData = data.filter(
                ({ bodyType }: { bodyType: string }) =>
                    bodyType.toLowerCase() === value.toLowerCase()
            );

            if (filteredData.length > 0) {
                setData(filteredData);
            } else {
                setData(originalData.current);
            }
        },
        [data, setData]
    );

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className="App">
            <HeaderSearch onChange={filterData} />
            <Slider data={data} />
        </div>
    );
}

export default Cars;
