import React from 'react'
 import millyfy from 'millify'
import { Row, Statistic, Typography, Col } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Link } from 'react-router-dom';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';

const {Title} = Typography;
const Homepage = () => {
    const {data, isFetching} = useGetCryptosQuery(10);
    if(isFetching) return 'Loading.....'
    const globalState = data?.data?.stats
    
    return (
        <>
        <Title level={2} className="heading">Global Crypto Stats</Title>
        <Row>
            <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalState.total} /></Col>
            <Col span={12}><Statistic title="Total Exchanges" value={millyfy(globalState.totalExchanges)} /></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millyfy(globalState.totalMarketCap)} /></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value={millyfy(globalState.total24hVolume)} /></Col>
            <Col span={12}><Statistic title="Total Markets" value={millyfy(globalState.totalMarkets)} /></Col>
        </Row>
        <div className="home-heading-container">
            <Title level={2} className="home-title">Top 10 cryptos in the world</Title>
            <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
        </div>
        <Cryptocurrencies simplified/>
        <div className="home-heading-container">
            <Title level={2} className="home-title">Latest Crypto News</Title>
            <Title level={3} className="show-more"><Link to="/news">Show more</Link></Title>
        </div>
        <News simplified/>
        </>
    )
}

export default Homepage
