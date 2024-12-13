import { useState, useEffect } from "react"
import { Card, Col } from "react-bootstrap"
import { Artist, Track, Album } from '../types/IAlbum'


const NewMusic = () => {
    const [albums, setAlbums] = useState<Track[]>([])
    const getAlbums = async () => {


        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=verdena')
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setAlbums(data.data)
            }
            else { throw new Error }
        }
        catch (error) { console.log(error) }


    }
    useEffect(() => {
        getAlbums()
    }, [])




    return (
        <div className="d-flex flex-wrap">
            {
                albums.map((a) => {
                    return (
                        <Col xs={3} key={a.id} className="m-3">
                            <Card>
                                <Card.Img className="" variant="top" src={a.album.cover_small} />
                                <p>{a.title}</p>


                            </Card></Col>)

                })
            }</div>



    )
}
export default NewMusic