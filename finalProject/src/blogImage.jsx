import React, { useState, useEffect } from 'react';

const BlogImages = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch("/api/v1/fetchBlogImages");
                const data = await response.json();
                
                if (data.success) {
                    setImages(data.data);
                    console.log(data);
                } else {
                    console.error('Error fetching images:', data.message);
                }
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div>
            <h1>Blog Images</h1>
            <div className="image-grid">
                {images.map(image => (
                    <img key={image.id} src={image.image} alt={`Blog ${image.id}`} className="blog-image" />
                ))}
            </div>
        </div>
    );
};

export default BlogImages;
