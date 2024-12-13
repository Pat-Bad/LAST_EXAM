const date = new Date().getFullYear()


const MyFooter = () => {

    return (<>
        <p className="text-light">Italia | English &#40;UK&#41;</p>
        <p className="text-light">Copyright &#169; {date} Apple Inc. Tutti i diritti riservati</p>
        <p className="text-light">Condizioni dei servizi internet | Apple music e privacy | Avviso sui cookie |</p> <p className="text-light"> Supporto | Feedback</p>

    </>
    )
}

export default MyFooter