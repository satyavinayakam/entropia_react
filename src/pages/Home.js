import React, { PureComponent } from 'react';
import logo from '../assets/images/logo.svg';
import _ from 'lodash';
import '../index.css';

import MovieItem from '../components/MovieItem';
import * as api from '../services/api';


class Home extends PureComponent {

	constructor() {
		super();

		this.state = {
			moviesList: [],
		};
	}

	async componentWillMount() {
	  const list = await api.fetchMoviesList();
	  console.log('**** LIST ***', list);
	  this.setState({ moviesList: list.data });
	}

	render() {
		const { moviesList } = this.state;
		return (
			<div className="content-wrapper">
				<div className="control-group">
					<div className="container ">
						<div className="row align-items-center justify-content-center">
							<div className="col-md-10 ">
								<div className="row">
									<div className="col-sm-12 text-center">
										<img src={logo} alt="Entropia Logo" className="" />
									</div>
								</div>
								<div className="col-sm-12 bg-panel">
									
									{
										_.map(moviesList, (item, index) => <MovieItem 
											key={index}
											{...item }
											/>)
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
