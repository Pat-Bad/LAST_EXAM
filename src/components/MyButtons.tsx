import { Col } from "react-bootstrap"

interface LinkProps {
    description: string
}

const MyButtons = (props: LinkProps) => {


    return (
        <Col className="d-flex flex-wrap" xs={12} md={4}>

            <span className="bg-secondary d-flex button align-items-center justify-content-between py-1 px-1 my-2 rounded"><p className="text-danger text-bold m-0 p-0 small">{props.description}</p><i className="bi bi-chevron-right text-danger "></i></span>

        </Col>
    )
}

export default MyButtons