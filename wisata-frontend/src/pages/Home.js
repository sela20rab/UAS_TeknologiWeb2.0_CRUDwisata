import React from 'react';
import { Link } from 'react-router-dom';
import baliImage from '../image/bali.png'; // Impor gambar Bali
import bunakenImage from '../image/bunaken.png'; // Impor gambar Bunaken
import jogjaImage from '../image/jogja.png'; // Impor gambar Jogja

function Home() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center mb-5">
                        <h1 className="display-4">Selamat Datang di Wisata Indonesia</h1>
                        <p className="lead">Temukan keindahan alam dan budaya Indonesia yang menakjubkan!</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card h-100 shadow">
                        <img src={baliImage} className="card-img-top" alt="Wisata Indonesia 1" />
                        <div className="card-body">
                            <h5 className="card-title">Pulau Bali</h5>
                            <p className="card-text">Nikmati keindahan pantai, seni dan budaya Bali yang khas.</p>
                            <Link to="/wisatas/1" className="btn btn-primary">Lihat Detail</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card h-100 shadow">
                        <img src={jogjaImage} className="card-img-top" alt="Wisata Indonesia 2" />
                        <div className="card-body">
                            <h5 className="card-title">Yogyakarta</h5>
                            <p className="card-text">Eksplorasi kekayaan sejarah dan kebudayaan Yogyakarta.</p>
                            <Link to="/wisatas/2" className="btn btn-primary">Lihat Detail</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card h-100 shadow">
                        <img src={bunakenImage} className="card-img-top" alt="Wisata Indonesia 3" />
                        <div className="card-body">
                            <h5 className="card-title">Bunaken, Sulawesi Utara</h5>
                            <p className="card-text">Jelajahi keindahan bawah laut Bunaken yang menakjubkan.</p>
                            <Link to="/wisatas/3" className="btn btn-primary">Lihat Detail</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
