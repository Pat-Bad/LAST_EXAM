const date = new Date().getFullYear()

const MyFooter = () => {
    return (<>
        <p className="text-light small">Italia <span className="text-secondary">| English &#40;UK&#41;</span></p>
        <p className="text-secondary small">Copyright &#169; {date} <span className="text-light">Apple Inc.</span> Tutti i diritti riservati</p>
        <p className="text-light small mb-0">Condizioni dei servizi internet <span className="text-secondary">|</span> Apple music e privacy <span className="text-secondary">|</span> Avviso sui cookie <span className="text-secondary">|</span> Supporto <span className="text-secondary">|</span> Feedback</p>
    </>
    )
}

export default MyFooter