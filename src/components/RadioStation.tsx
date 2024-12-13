import { Card, Col } from "react-bootstrap"



interface RadioStationProps {
    title: string,
    src: string

}



const RadioStation = (props: RadioStationProps) => {

    return (<>
        <Col xs={6} className="mb-5">
            <h5 className="text-light">NUOVA STAZIONE RADIO</h5>
            <p className="text-light mb-0">{props.title}</p>
            <Card >
                <Card.Img variant="top" src={props.src} />

            </Card></Col>
    </>
    )
}

export default RadioStation