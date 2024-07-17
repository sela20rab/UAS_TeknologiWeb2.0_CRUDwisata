import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

function Wisata() {
    const [loading, setLoading] = useState(true);
    const [wisatas, setWisatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/wisatas').then(res => {
            console.log(res);
            setWisatas(res.data.wisatas);
            setLoading(false);
        });
    }, []);

    const deleteWisata =(e, id) => {
        e.preventDefault();

        const thisClicked= e.currentTarget;
        thisClicked.innerText ="Deleting...";

        axios.delete(`http://localhost:8000/api/wisatas/${id}/delete`)
            .then(res => {
                alert(res.data.message);
                thisClicked.closest("tr").remove();

            })
            .catch( function(error)  {
                if (error.response) {
                   
                    if (error.response.status === 404) {
                        alert(error.response.data.message)
                        thisClicked.innerText ="Delete";

                    }
                    if (error.response.status === 500) {
                        alert(error.response.data)
                    }
                }
            });

    }

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredWisatas = wisatas.filter(wisata =>
        wisata.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        wisata.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    var wisataDetails = filteredWisatas.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{item.ticket}</td>
                <td>{item.rating}</td>
                <td>
                    <img src={item.image_path} alt={item.name} style={{ width: '100px', height: 'auto' }} />
                </td>
                <td>
                    <Link to={`/wisatas/${item.id}/edit`} className="btn btn-success">Edit</Link>
                </td>
                <td>
                    <button type="button"  onClick={(e) => deleteWisata(e, item.id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    });

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Wisata List
                                <Link to="/wisatas/create" className="btn btn-primary float-end">Add Wisata</Link>
                            </h4>
                            <div className="input-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Wisata..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nama Wisata</th>
                                        <th>Lokasi Wisata</th>
                                        <th>Harga Tiket</th>
                                        <th>Rating</th>
                                        <th>Gambar</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {wisataDetails}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wisata;
