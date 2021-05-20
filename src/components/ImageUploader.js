import React from 'react';
import ImageUploading from 'react-images-uploading';

function ImageUploader() {
  const [image, setImage] = React.useState([]);
  const maxNumber = 69;

  const onChange = (uploadedPhoto) => {
    console.log(uploadedPhoto);
    setImage(uploadedPhoto);
  };

  return (
    <ImageUploading
      multiple
      value={image}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({ onImageUpload }) => (
        <button
          className="personal-area__add-photo-button"
          type="button"
          aria-label="add photo"
          onClick={onImageUpload}
        />
      )}
    </ImageUploading>
  );
}

export default ImageUploader;
