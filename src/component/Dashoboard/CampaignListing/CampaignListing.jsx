import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import './CampaignListing.css'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import ListSkeleton from '../../Shared/TableOrder/ListSkeleton';
import { useAppContext } from '../../../context';

const CampaignListing = () => {
    const { state:{user} } =useAppContext();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        setBookings([
            {
                _id: '0001',
                serviceName: 'Test Campaign 001',
                status: 'RUNNING',
                description: 'Test Campaign 001 Description',
                img: '',
            },
            {
                _id: '0002',
                serviceName: 'Test Campaign 002',
                status: 'DONE',
                description: 'Test Campaign 002 Description',
                img: '',
            }
        ]);
    },[])

    return (
        <div>
            {bookings.length === 0 && <ListSkeleton/>}
            <div className="row px-3">
                {
                    bookings.map(({_id, serviceName,status,description,img}) => {
                        return(<div className="col-md-4" key={_id}>
                            <div className="bookingList">
                                <div className="d-flex justify-content-between">
                                    <img src={img} alt=""/>
                                    <div>
                                        <p className="serviceState" style={{color: '#fff', background: status === 'Pending' ? 'rgb(255 78 96)' : status === 'On going' ? 'rgb(73 146 255)' :'rgb(31 204 123)'}}>{status}</p>
                                    </div>
                                </div>
                                <h6>{serviceName}</h6>
                                <p>{description}</p>
                                <Button variant="outline-danger" onClick={() => {}}>
                                    <FontAwesomeIcon icon={faTimesCircle}/>
                                     { status === 'DONE' ? 'Remove':'Cancel'}
                                </Button>
                            </div>
                        </div>)
                    })
                }
            </div>
        </div>
    );
};

export default CampaignListing;
