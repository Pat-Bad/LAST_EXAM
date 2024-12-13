const MusicPlayer = () => {
    return (
        <div className="fixed-bottom d-flex justify-content-between align-items-center py-2 mx-auto bg-secondary w-75 rounded-top" style={{
            height: '56px',
        }}>
            <div className="d-flex align-items-center ms-3">
                <img src="../assets/assets/logos/music.svg" alt="music icon" className="me-2" />
                <i className="bi bi-music-note-beamed text-light"></i>
            </div>
            <div className="d-flex align-items-center">
                <i className="bi bi-play-fill fs-3 me-3 text-light"></i>
                <i className="bi bi-fast-forward-fill fs-3 text-light me-3"></i>
            </div>
        </div>
    )
}

export default MusicPlayer