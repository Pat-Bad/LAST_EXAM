import { Card, Col } from "react-bootstrap"

interface ImagesProps {
    src: string
    description: string
}

const RadioEpisodes = (props: ImagesProps) => {
    return (
        <Col xs={4}><Card className="m-3 border border-0 ps-0 ms-0">
            <Card.Img variant="top" src={props.src} />
            <p className="mb-0 bg-dark text-secondary small">{props.description}</p>

        </Card>
        </Col>

    )
}

export default RadioEpisodes