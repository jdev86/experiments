import { NavLink } from 'solid-app-router';

import styles from '../App.module.css';

const HomePage = () => {
    return (
        <>
        <header class={styles.header}>
            <h1>Welcome to My Daily Feed App</h1>
            <NavLink class="nav" href='/forecast'>Forecast</NavLink>
        </header>
        </>
    )
}

export default HomePage