import { Col } from "react-bootstrap"

interface LinkProps {
    description: string
}

const MyButtons = (props: LinkProps) => {


    return (
        <Col className="d-flex flex-wrap" xs={12} md={4}>

            <p className="text-danger">{props.description}</p><i className="bi bi-chevron-right"></i>

        </Col>
    )
}

export default MyButtons