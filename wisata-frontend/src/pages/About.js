import React from 'react';
import wisataImage from '../image/wisata.jpeg';

function About() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={wisataImage} className="img-fluid rounded shadow" alt="About Wisata Indonesia" />
                </div>
                <div className="col-md-6">
                    <h2 className="mb-4">Tentang Wisata Indonesia</h2>
                    <p className="lead">
                        Wisata Indonesia adalah platform untuk mengenalkan keindahan alam dan budaya Indonesia kepada dunia. Kami berkomitmen untuk mempromosikan destinasi wisata yang menakjubkan, mulai dari pantai-pantai eksotis hingga kekayaan sejarah yang memukau.
                    </p>
                    <p>
                        Kami percaya bahwa Indonesia memiliki potensi besar dalam pariwisata, dan melalui platform ini, kami ingin mempermudah para traveler dalam menjelajahi keindahan Indonesia.
                    </p>
                    <p>
                        Bergabunglah dengan kami untuk menemukan pengalaman tak terlupakan di setiap sudut negeri ini!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
