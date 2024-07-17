
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading.js';

function WisataCreate(){
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)
    const [inputErrorList, setInputErrorList] = useState({})
    const [wisata, setWisata] = useState({
        name:'',
        location:'',
        ticket:'',
        rating:'',
        image_path:''
    })

    const handleInput=(e)=>{
        e.persist();
        setWisata({...wisata,[e.target.name]: e.target.value});
    }


    const saveWisata = (e) =>{
        e.preventDefault();

        setLoading(true);

        const data={
            name: wisata.name,
            location: wisata.location,
            ticket: wisata.ticket,
            rating: wisata.rating,
            image_path: wisata.image_path,
        }

  
        axios.post(`http://localhost:8000/api/wisatas`, data)
            .then(res =>{

                alert(res.data.message);
                navigate('/wisatas')
                setLoading(false);

        })
        .catch(function(error){
            if(error.response){
                
                if(error.response.status === 422){
                    setInputErrorList(error.response.data.errors)
                    setLoading(false);


                }
                if(error.response.status === 500){
                    alert(error.response.data)
                    setLoading(false);

                }

            }
        });
    }

    if(loading){
        return(
            <div>
                <Loading/>
            </div>
        )
    }

    return (
        <div>
            <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4> Add Wisata 
                                <Link to="/wisatas" className="btn btn-danger float-end">
                                Back     
                                </Link>
                            </h4>
                        </div>
                        <div className="card-body"></div>
                        <form onSubmit={saveWisata}>
                            <div className="mb-3">
                                <label>Nama Wisata</label>
                                <input type="text" name="name" value={wisata.name} onChange={handleInput} className="form-control" />
                                <span className="text-danger">{inputErrorList.name}</span>
                            </div>
                            <div className="mb-3">
                                <label>Lokasi Wisata</label>
                                <input type="text" name="location" value={wisata.location} onChange={handleInput} className="form-control" />
                                <span className="text-danger">{inputErrorList.location}</span>
                            </div>
                            <div className="mb-3">
                                <label>Harga Ticket</label>
                                <input type="text" name="ticket" value={wisata.ticket} onChange={handleInput} className="form-control" />
                                <span className="text-danger">{inputErrorList.ticket}</span>
                            </div>
                            <div className="mb-3">
                                <label>Rating</label>
                                <input type="text" name="rating" value={wisata.rating} onChange={handleInput} className="form-control" />
                                <span className="text-danger">{inputErrorList.rating}</span>
                            </div>
                            <div className="mb-3">
                                <label>Link Gambar</label>
                                <input type="text" name="image_path" value={wisata.image_path} onChange={handleInput} className="form-control" />
                                <span className="text-danger">{inputErrorList.image_path}</span>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary">Save Wisata</button>
                            </div>  
                        </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    )
}
export default WisataCreate;