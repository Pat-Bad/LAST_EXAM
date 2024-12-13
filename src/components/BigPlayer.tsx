import { Button, Col } from "react-bootstrap"

const BigPlayer = () => {
    return (
        <>
            <Col className=" col-4 d-flex justify-content-around" ><i className="bi bi-shuffle text-secondary"></i><i className="bi bi-skip-backward-fill text-secondary"></i><i className="bi bi-play-fill text-secondary"></i><i className="bi bi-skip-forward-fill text-secondary"></i><i className="bi bi-repeat text-secondary"></i></Col>
            <Col className="col-4 px-0"><div className="h-75 bg-secondary text-center ps-0"><i className="bi bi-apple text-white"></i></div></Col>


            <Col className="col-2 pe-0"><span className="d-flex align-items-center"><i className="bi bi-volume-up-fill text-light"></i> <span className="bg-secondary slider d-flex ms-1"> <i className="bi bi-circle-fill text-light circle"></i></span> </span></Col>




            <Col className="col-2"> <Button variant="danger" className="text-light fw-bold d-flex h-25 py-0 mt-1 ps-0"><i className="bi bi-person pe-2"></i> <small>Accedi</small></Button></Col>

        </>
    )
}

export default BigPlayer