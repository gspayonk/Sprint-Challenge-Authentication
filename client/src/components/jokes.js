import React, { useEffect, useState } from 'react';
import fetchJokes from './fetchJokes';

const Jokes = () => {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        fetchJokes().then(res => setJokes(res.data));
    }, []);

    return <pre>{JSON.stringify(jokes, null, 4)}</pre>;
};

export default Jokes;