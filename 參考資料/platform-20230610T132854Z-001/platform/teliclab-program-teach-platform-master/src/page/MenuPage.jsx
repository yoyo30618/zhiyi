import { useState } from "react";
import { Card, Container, Navbar, Row, Button, Dropdown, DropdownButton, Form  } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import {WEB_TITLE} from "../utils/const";

function MenuPage(props){
    const {menuData} = props;
    const [selectedCharpter, setSelectedCharpter] = useState(menuData[0].charterTitle);
    const navigate = useNavigate();


    function changeSelectedCharpter(e) {
        setSelectedCharpter(e.target.value);
    }

    const routeChange = () => navigate(selectedCharpter);

    const menuTitleStyle = {
        textAlign: 'center',
        color: 'CornflowerBlue',
    };

    return (
        
        <div>
            <Navbar className="navbar-expand-lg navbar-dark bg-dark">
                <Container fluid>
                    <Navbar.Brand href="#home">{WEB_TITLE}</Navbar.Brand>
                </Container>
            </Navbar>

            <div className="row justify-content-center align-items-center mx-0" style={{height:'80vh'}}>
                <Card className="bg-pattern w-50 text-center">
                    <Card.Body>
                        <Row>
                            <h1 style={menuTitleStyle}>學習單元</h1>
                        </Row>

                        <Row className="my-5">
                            <Form.Select className="rounded-3" size="lg" onChange={changeSelectedCharpter}>
                                {menuData.map((charpter, i) => {
                                    return (<option value={charpter.charterTitle} key={i}>{charpter.charterLabel}</option>);
                                })}
                            </Form.Select>
                        </Row>

                        <Row className="my-5">
                            <Button className="px-1" variant="primary" type="submit" onClick={routeChange}>
                                Submit
                            </Button>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default MenuPage;