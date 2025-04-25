import React from 'react';
import { Link } from 'react-router-dom';

const ProductNotFound = ({title}) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <p className="mt-4 text-2xl text-gray-600">{title}</p>
        </div>
    );
};

export default ProductNotFound;
