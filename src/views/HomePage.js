import React from 'react';
import Background from "../components_/ewa_beans/Background";
import TopCard from "../components_/ewa_beans/HomePage/TopCard";
import RankingCard from "../components_/ewa_beans/HomePage/RankingCard";
import '../ewa.css'
import OrderCard from "../components_/ewa_beans/HomePage/OrderCard";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'


const globe = <FontAwesomeIcon icon={faGlobe} />
const commentDots = <FontAwesomeIcon icon={faCommentDots} />


const HomePage = () => {
    return (
        <div className="container">

            <div className="mobile_frame">
                <Background/>

                <div className="home_container">
                    <TopCard/>
                    <RankingCard/>
                    <OrderCard
                        containerName="place_beans_order_container"
                        iconClassName="world_icon" icon={globe}
                        containerGibberish="place-order-gibberish"
                        orderCardHeader="Place Beans Order"
                    />
                    <OrderCard
                        containerName="special_order_container"
                        iconClassName="special_icon" icon={commentDots}
                        containerGibberish="special-order-gibberish"
                        orderCardHeader="Special Beans Order"
                    />
                </div>

            </div>


        </div>
    );
};

export default HomePage;