import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class MovieItem extends PureComponent {
    render() { console.log(this.props);
        const { id, name, releaseDate, description, thumbs } = this.props;
        return (
			<div className="row">
				<div className="col-xs-12 col-md-12">
					<div className="media">
						<a className="pull-left">
							<img src={thumbs} className="media-object" alt="Sample Image" />
						</a>
						<div className="media-body">
							<h2 className="media-heading">{name}</h2>
							<div className="details-movie">
								<strong>Release :</strong> {releaseDate} <br />
								<strong>Description :</strong> <br />
								{description}
                                <Link to={`/info/${id}`}> Readmore</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
    }
}

export default MovieItem;