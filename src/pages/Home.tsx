import React from 'react';

import useNavigation from '../hooks/useNavigation';

export function Home() {
    const {
        goLinks
    } = useNavigation()
    return <div>Home
        <button onClick={goLinks}>New</button>
    </div>
}