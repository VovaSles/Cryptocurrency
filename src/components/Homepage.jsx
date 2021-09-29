import React from 'react'
//import millyfy from 'millify'
import { Row, Statistic, Typography, Col } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi';

const {Title} = Typography;
const Homepage = () => {
    const {data, isFetching} = useGetCryptosQuery();
    console.log(isFetching)
    console.log( data?.data?.stats)
    const globalState = data?.data?.stats
    
    return (
        <>
        <Title level={2} className="heading">Global Crypto Stats</Title>
        <Row>
            <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalState.total} /></Col>
            <Col span={12}><Statistic title="Total Exchanges" value="5" /></Col>
            <Col span={12}><Statistic title="Total Market Cap" value="5" /></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value="5" /></Col>
            <Col span={12}><Statistic title="Total Markets" value="5" /></Col>
        </Row>
        </>
    )
}

export default Homepage
