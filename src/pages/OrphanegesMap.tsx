import React from 'react';
import {Link} from 'react-router-dom';
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { FiPlus } from 'react-icons/fi';

import '../styles/pages/orphanages-map.css'

import mapMarkerImg from '../images/map-marker.svg';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas criaças estão esperando sua visita :)</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>
                </footer>

            </aside>

            <Map 
                center={[-23.6110644,-46.4767199]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus 
                    size={32}
                    color="#fff"
                />
            </Link>
        </div>
    );
}

export default OrphanagesMap;