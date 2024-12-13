import { Button, Container, Row } from "react-bootstrap"


const MyHeader = () => {
    return (<>
        <Container className="d-flex flex-column ">
            <Row className="text-light d-flex mt-2 align-items-center"><span className="d-flex"><i className="bi bi-apple text-light pe-2 fs-4"></i><h4 className="text-light d-flex mb-4 pt-1 ">Music</h4></span></Row>
            <Row> <Button variant="dark" className="border border-1 border-light text-start text-danger "><i className="bi bi-search pe-2"></i>Cerca</Button>
                <span className="mt-4"><i className="bi bi-house-door text-danger fs-4"></i><span className="text-light fw-bold ps-2">Home</span></span>
                <span className="mt-2"><i className="bi bi-grid text-danger fs-4"></i><span className="text-light fw-bold ps-2">Novità</span></span>
                <span className="mt-2"><i className="bi bi-broadcast text-danger fs-4"></i><span className="text-light fw-bold ps-2">Radio</span></span>
            </Row></Container></>
    )
}

export default MyHeader