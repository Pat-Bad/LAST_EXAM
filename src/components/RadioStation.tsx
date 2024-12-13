import { Card } from "react-bootstrap"



interface RadioStationProps {
    title: string,
    src: string

}



const RadioStation = (props: RadioStationProps) => {

    return (<>

        <h5 className="text-light">NUOVA STAZIONE RADIO</h5>
        <p className="text-light mb-0 pb-1 bg-dark ">{props.title}</p>
        <Card className=" border border-0 rounded-bottom">
            <Card.Img variant="top" src={props.src} />

        </Card>
    </>
    )
}

export default RadioStation