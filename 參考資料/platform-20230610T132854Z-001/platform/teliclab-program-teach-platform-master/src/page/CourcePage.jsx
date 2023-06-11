import { Card, Col, Container, ListGroup, Navbar, Row, Stack } from "react-bootstrap";
import {WEB_TITLE} from "../utils/const";
import { FaCircle } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

function CourcePage(props){
    const {seciontDataList} = props;
    return (
        <div>
            <Navbar className="navbar-expand-lg navbar-dark bg-dark">
                <Container fluid>
                    <Navbar.Brand href="#home">{WEB_TITLE}</Navbar.Brand>
                </Container>
            </Navbar>

            <Container fluid>
                <Row className="mt-4">
                    <Col xs lg="2">
                        <SideMenu seciontDataList={seciontDataList}/>
                    </Col>
                    <Col xs lg="10">
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

function SideMenu(props) {
    const {seciontDataList} = props;
    const menuTitleStyle = {
        textAlign: 'center',
        color: 'CornflowerBlue',
    };

    return (
        <Card>
            <Card.Title className="mt-3">
                <h3 style={menuTitleStyle}>
                    {seciontDataList.charterLabel}
                </h3>
            </Card.Title>
            <Card.Body className="py-0">
                <ListGroup variant="flush">
                    {seciontDataList.sectionList.map(function(item, i){
                        return (
                            <ListGroup.Item key={i} className='position-relative' style={{height: '70px'}}>
                                <Link to={item.url} style={{color: 'black'}}>
                                    <Stack direction="horizontal" gap={2} className='position-absolute top-50 start-0 translate-middle-y'>
                                        
                                        <div className='me-1'><FaCircle size={10}/></div>
                                        <div>{item.sectionTitle}</div>
                                    </Stack>
                                </Link>
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
                <Link to='/' style={{color: 'black', ...menuTitleStyle}}>
                    <h5>回首頁</h5>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default CourcePage;