import { Button, Card, Container, Form, Row } from "react-bootstrap";
import {LOGIN_HINT, WEB_TITLE} from "../utils/const";

function LoginPage(){

    return (
        <Container className="mt5 mb-5">
            <Row className="justify-content-center">
                <Card className="bg-pattern w-50">
                    <Card.Body>
                        <Row>
                            <Card.Title className="text-center mb-4 mt-1">{WEB_TITLE}</Card.Title>
                        </Row>

                        <Row>
                            <p className="text-success text-center">{LOGIN_HINT}</p>
                        </Row>

                        <Row>
                            <Form>
                                <Form.Group className="mb-4">
                                    <Form.Label>電子郵件信箱</Form.Label>
                                    <Form.Control type="email" placeholder="請輸入電子郵件"/>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>密碼</Form.Label>
                                    <Form.Control type="email" placeholder="請輸入密碼"/>
                                </Form.Group>
                            </Form>
                        </Row>

                        <Row>
                            <Button className="px-1" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}

export default LoginPage;