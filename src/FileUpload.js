import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [files, setFiles] = useState([]);

    const onFileChange = (e) => {
        setFiles([...e.target.files]);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        files.forEach((file) => {
            formData.append('files', file);
        });

        try {
            const res = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="file" multiple onChange={onFileChange} />
                </div>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default FileUpload;
