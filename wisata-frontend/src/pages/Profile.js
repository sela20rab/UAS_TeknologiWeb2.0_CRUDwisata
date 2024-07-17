import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../Profile.css'; // Import file CSS untuk pengaturan tambahan
import selaImage from '../image/sela.jpg'; // Impor gambar

const Profile = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white text-center">
                            <h3>Profil Sela Pebriana</h3>
                        </div>
                        <div className="card-body">
                            <div className="text-center mb-4">
                                <img src={selaImage} alt="Profile" className="profile-img img-fluid rounded-circle" />
                            </div>
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th scope="row" className="table-primary">Nama</th>
                                        <td>Sela Pebriana</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-primary">NIM</th>
                                        <td>D112111012</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-primary">Jurusan</th>
                                        <td>Teknik Informatika 6A</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-primary">Tugas UAS</th>
                                        <td>Teknologi Web 2.0</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-primary">Dosen Pembimbing</th>
                                        <td>Ibu Henny Alfianti, M.T.</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="text-center mt-4">
                                <a href="https://www.instagram.com/selapebriana20" target="_blank" rel="noopener noreferrer" className="social-link me-4">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                                <a href="mailto:selapebriana20@gmail.com" className="social-link me-4">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                                </a>
                                <a href="https://www.youtube.com/c/SelSela" target="_blank" rel="noopener noreferrer" className="social-link me-4">
                                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                                </a>
                                <a href="https://www.tiktok.com/@selapebriana20" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <FontAwesomeIcon icon={faTiktok} size="2x" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
