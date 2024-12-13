import { Card, Col } from "react-bootstrap"

interface ImagesProps {
    src: string
    description: string
}

const RadioEpisodes = (props: ImagesProps) => {
    return (
        <Col xs={4}><Card className=" m-3">
            <Card.Img variant="top" src={props.src} />
            <p>{props.description}</p>

        </Card>
        </Col>

    )
}

export default RadioEpisodes