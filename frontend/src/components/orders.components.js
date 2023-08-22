import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Button, Form, Container, Modal, Card, ModalFooter} from 'react-bootstrap'
import Order from './single-order.component';
import '../App.css'

const Orders = () => {

    const [orders, setOrders] = useState([])
    const [refreshData, setRefreshData] = useState(false)

    const [changeOrder, setChangeOrder] = useState({"change": false, "id":0})
    const [changeWaiter, setChangeWaiter] = useState({"change": false, "id":0})
    const [newWaiterName, setNewWaiterName] = useState("")

    const [addNewOrder, setAddNewOrder] = useState(false)
    const [newOrder, setNewOrder] = useState({"dish": "", "server":"", "table": 0, "price": 0})

    // gets run at initial loadup (useEffect is called initially to get all the data
    // and will only get called once because it has [] at the end)
    useEffect(() => {
        getAllOrders();
    }, [])

    // refreshes the page ( cek at each refresh to see if the orders need to be updated through 'refreshData')
    if(refreshData){
        setRefreshData(false);
        getAllOrders();
    }

    return(
        <div>
            {/* add new order button */}
            <Container>
                <Button className='buttonAdd' onClick={() =>
                setAddNewOrder(true)}>Add New Order</Button>
            </Container>

            {/* list all current orders */}
            <Container>
                {orders != null && orders.map((order, i) => (
                    <Order orderData={order}
                    deleteSingleOrder={deleteSingleOrder}
                    setChangeWaiter={setChangeWaiter}
                    setChangeOrder={setChangeOrder}/>
                ))}
            </Container>

            {/* popup for adding a new order */}
            <Modal className='customModal' show={addNewOrder} onHide={() => setAddNewOrder(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title className='modalTitle'>Add Order</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label className='customFormLabel'>Dish</Form.Label>
                            <Form.Control onChange={(event) => {newOrder.dish = event.target.value}}/>
                            <Form.Label className='customFormLabel'>Waiter</Form.Label>
                            <Form.Control onChange={(event) => {newOrder.server = event.target.value}}/>
                            <Form.Label className='customFormLabel'>Table</Form.Label>
                            <Form.Control onChange={(event) => {newOrder.table = event.target.value}}/>
                            <Form.Label className='customFormLabel'>Price</Form.Label>
                            <Form.Control type = "number" onChange={(event) => {newOrder.price = event.target.value}}/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='primary-button' onClick={() => addSingleOrder()}>Add</Button>
                        <Button className='secondary-button' onClick={() => setAddNewOrder(false)}>Cancel</Button>
                    </Modal.Footer>
            </Modal>

            {/* popup for changing a waiter */}
            <Modal className='customModal' show = {changeWaiter.change} onHide={() => setChangeWaiter({"change": false, "id":0})} centered>
                <Modal.Header closeButton>
                    <Modal.Title className='modalTitle'>Change Waiter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label className='customFormLabel'>New Waiter</Form.Label>
                        <Form.Control onChange={(event) => {setNewWaiterName(event.target.value)}}/>
                    </Form.Group>
                </Modal.Body>
                <ModalFooter>
                    <Button className='primary-button' onClick={() => changeWaiterForOrder()}>Change</Button>
                    <Button className='secondary-button' onClick = {() => setChangeWaiter({"change": false, "id": 0})}>Cancel</Button>
                </ModalFooter>
            </Modal>

            {/* popup for changing an order */}
            < Modal className='customModal' show={changeOrder.change} onHide={() =>  setChangeOrder({"change": false, "id": 0})} centered>
                <Modal.Header closeButton>
                    <Modal.Title className='modalTitle'>Change Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label className='customFormLabel'>Dish</Form.Label>
                        <Form.Control onChange={(event) => {newOrder.dish = event.target.value}}/>
                        <Form.Label className='customFormLabel'>Waiter</Form.Label>
                        <Form.Control onChange={(event) => {newOrder.server = event.target.value}} />
                        <Form.Label className='customFormLabel'>Table</Form.Label>
                        <Form.Control onChange={(event) => {newOrder.table = event.target.value}} />
                        <Form.Label className='customFormLabel'>Price</Form.Label>
                        <Form.Control onChange={(event) => {newOrder.price = parseFloat(event.target.value)}} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='primary-button' onClick={() => changeSingleOrder()}>Change</Button>
                    <Button className='secondary-button' onClick={() => setChangeOrder({"change":false, "id": 0})}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

    // the following functions use axios to submit requests to the server for various functionalities
    
    // changes the waiter
    function changeWaiterForOrder(){
        changeWaiter.change = false
        var url = "http://localhost:5000/waiter/update/" + changeWaiter.id
        axios.put(url, {
            "server": newWaiterName
        }).then(response => {
            console.log(response.status)
            if(response.status == 200){
                setRefreshData(true)
            }
        })
    }

    // changes the order
    function changeSingleOrder(){
        changeOrder.change = false;
        var url = "http://localhost:5000/order/update/" + changeOrder.id
        axios.put(url, newOrder)
            .then(response => {
                if(response.status == 200){
                    setRefreshData(true)
                }
            })
    }

    // creates a new order
    function addSingleOrder(){
        setAddNewOrder(false)
        var url = "http://localhost:5000/order/create"
        axios.post(url, {
            "server": newOrder.server,
            "dish": newOrder.dish,
            "table": newOrder.table,
            "price": parseFloat(newOrder.price)
        }).then(response => {
            if(response.status == 200){
                setRefreshData(true)
            }
        })
    }

    // gets all the orders
    function getAllOrders(){
        var url = "http://localhost:5000/orders"
        axios.get(url, {
            responseType: 'json'
        }).then(response => {
            if(response.status == 200){
                setOrders(response.data)
            }
        })
    }

    // deletes a single order
    function deleteSingleOrder(id){
        var url = "http://localhost:5000/order/delete/" + id
        axios.delete(url, {
        }).then(response => {
            if(response.status == 200){
                setRefreshData(true)
            }
        })
    }

}

export default Orders