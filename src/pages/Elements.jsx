import React from 'react';
import "../App.css";

const brushProducts = [
    { id: 1, photo: 'path/to/photo1.jpg', description: 'Brush 1', title:"Brush1", link:"https://byakshayram.gumroad.com/l/shadowpackvol1?layout=profile" },
    { id: 2, photo: 'path/to/photo2.jpg', description: 'Brush 2', title: "Brush2", link:"https://byakshayram.gumroad.com/l/shadowpackvol1?layout=profile"  },
    // Add more products as needed
];

function Elements() {
    return (
        <div>
            <h1 className="pageHeader">Elements</h1>

        </div>
    );
};

export default Elements;