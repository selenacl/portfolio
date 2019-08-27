import React from 'react';
import './Home.css';
import '../Common/PageContainer.css';
import homeBackground from '../../assets/desert.png';

const Home = ({id}) => {
    return (
        <div className="pageContainer" id="homeContainer">
            <h1 id={id}>Home</h1>
        </div>
    )
};

export default Home;
