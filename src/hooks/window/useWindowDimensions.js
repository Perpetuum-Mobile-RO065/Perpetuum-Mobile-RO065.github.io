import {useEffect, useState} from "react";

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(() => [window.innerWidth, window.innerHeight]);
    useEffect(() => {
        function handleResize() {
            setWindowDimensions([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
}