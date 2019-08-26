import React from 'react';
import './Home.css';
import '../Common/PageContainer.css'

const Home = ({id}) => {
    return (
        <div className="pageContainer" id="homeContainer">
            <h1 id={id}>Home</h1>
        </div>
    )
};

export default Home;
