import PropTypes from "prop-types"
import {Link} from "react-router-dom"

function MovieCom({key,coverImg,title,summary,genres,movie}){
    return(
        <div>
            <img src={coverImg} alt={title}/>
            <h2>
                <Link to="/movie">{title}</Link>
            </h2>
            <p>{summary}</p>
            {(movie.hasOwnProperty("genres")? <ul>
                {genres.map((g)=>(
                    <li key={g}>{g}</li>
                ))}
            </ul> : null)}
        </div>
    )
}

MovieCom.propTypes={
    key: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
}

export default MovieCom