import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Card, Row, Col} from 'react-bootstrap'

const Order = ({orderData, setChangeWaiter,
deleteSingleOrder, setChangeOrder}) => {
    return(
        <Card className='customCard'>
            <Row>
                <Col className='customColumn'>Dish: { orderData !== undefined && orderData.dish}</Col>
                <Col className='customColumn'>Server: { orderData !== undefined && orderData.server}</Col>
                <Col className='customColumn'>Table: { orderData !== undefined && orderData.table }</Col>
                <Col className='customColumn'>Price: ${ orderData !== undefined && orderData.price}</Col>
                <Col className='customColumn'><Button className='customDeleteButton' onClick={() => deleteSingleOrder(orderData._id)}>Delete Order</Button></Col>
                <Col className='customColumn'><Button className= 'customChangeWaiterButton' onClick={() => changeWaiter()}>Change Waiter</Button></Col>
                <Col className='customColumn'><Button className='customChangeOrderButton' onClick={() => changeOrder()}>Change Order</Button></Col>
            </Row>
        </Card>
    )

    function changeWaiter(){
        setChangeWaiter({
            "change":true,
            "id": orderData._id
        })
    }

    function changeOrder(){
        setChangeOrder({
            "change": true,
            "id": orderData._id
        })
    }

}

export default Order