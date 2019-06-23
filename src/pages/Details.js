import React, { PureComponent } from 'react';
import logo from '../assets/images/logo.svg';
import _ from 'lodash';

import * as api from '../services/api';

class Details extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            moiveInfo: {},
            producerInfo: {},
            castList:[]
        };
    }

    async componentDidMount() {
        const { match: { params: { id }}} = this.props;
        const info = await api.fecthMovieById(id);
        const crewinfo = await api.fetchMovieCast(id);
        console.log('***** INFO *****', crewinfo);
        this.setState({ moiveInfo: info.data, producerInfo: info.data.Members.data, castList: crewinfo.data });
    }

    render() {
        const { moiveInfo, producerInfo, castList } = this.state;
        
        const { id, name, releaseDate, thumbs, trailerUrl, description } = moiveInfo;
        const { name: producerName, dob, biodata } = producerInfo;
        
    

        return(
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
                          

                        <div className="row">
                            <div className="col-xs-12 col-md-12">
                              <div className="row">
                                 <div className="media">
                                  <a href="#" className="pull-left">
                                      <img src={thumbs} className="media-object" alt="Sample Image" />
                                  </a>
                                </div>
                                  <div className="media-body">
                                      <div className="details-movie">
                                    <iframe width="600" height="268" src={trailerUrl}></iframe>
</div>
                                </div>  
                                
                                  
                              </div>

                              </div>
                             <div className="col-xs-12 col-md-12">
                                    <div className="display-view">
                                            {description}
                                    </div>
                                    <div className="producer">
                                      <strong>Producer :</strong> {producerName}
                                    </div>
                                    <div className="article" id="titleCast">
                                            
                                                <h2>Cast</h2>
                                                
                                                <table className="cast_list" width="100%">    
                                          <tbody>
                                              <tr><td colspan="4" className="castlist_label">Cast overview, first billed only:</td></tr>
                                              {
                                                  _.map(castList, (item, index) => <tr className="odd" key={index}>
                                                    <td className="primary_photo">
                                          <a href="#"><img height="44" width="32" alt="Robert Downey Jr." title="Robert Downey Jr." src="https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX32_CR0,0,32,44_AL_.jpg" className="loadlate" /></a>          </td>
                                                    <td>
                                        {_.get(item, 'Members.data.0.name', null)}
                                                   </td>
                                                    <td className="ellipsis">
                                                    {_.get(item, 'Members.data.0.dob', null)}
                                                    </td>
                                                    <td className="character">
                                                    {_.get(item, 'Members.data.0.type', null)} 
                                                      
                                                            
                                                    </td>
                                                </tr>
                                                )
                                              }
                                             
                                              
                                             
                                                </tbody>
                                                </table>
                                               
                                               
                                            </div>
                             </div>
                            
                            </div>
                              
                          </div>
                          
                          
                         
                        
                    </div> 
                    </div> 
                </div>
            </div>
        </div>

        );
    }
}

export default Details;