import React from 'react';
import styles from './Site.module.css'
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./pages/Error404";
import {dataState} from "../datastate/datastate";
import {Page} from "./pages/Page";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                   {/* <div><NavLink className={({isActive})=>isActive? styles.active :
                        styles.navLink} to={'/page1'}>Page 1</NavLink></div>*/}

                    <div><NavLink className={({isActive})=>isActive? styles.active :
                        styles.navLink} to={'/page/0'}>Page 1</NavLink></div>
                    <div><NavLink className={({isActive})=>isActive? styles.active :
                        styles.navLink} to={'/page/1'}>Page 2</NavLink></div>
                    <div><NavLink className={({isActive})=>isActive? styles.active :
                        styles.navLink} to={'/page/2'}>Page 3</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page/0'}/> } />

                        {/*<Route path={'/page1'} element={<PageOne/>} />*/}

                        <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>} />

                        <Route path={'/*'} element={<Error404/>} />
                    </Routes>

                </div>
            </div>
        </div>
    );
};

