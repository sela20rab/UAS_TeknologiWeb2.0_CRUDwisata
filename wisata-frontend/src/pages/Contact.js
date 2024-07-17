import React from 'react';

function Contact() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Hubungi Kami</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nama</label>
                                    <input type="text" className="form-control" id="name" placeholder="Masukkan nama Anda" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Masukkan email Anda" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Pesan</label>
                                    <textarea className="form-control" id="message" rows="5" placeholder="Tulis pesan Anda" required></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Kirim Pesan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
