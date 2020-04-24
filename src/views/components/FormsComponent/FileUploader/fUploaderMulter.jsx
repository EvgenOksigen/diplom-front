import React from 'react'

const FUploaderMulter = ({ 
    input,
    placeholder,
    meta: { touched, error },
    label,
    value,
    disabled,
    required,
    notification,
    onChange,
    uploadReq,
    multiple
}
) =>{
    const uploadHandler = (e) => {
        console.log(e.target.files);
        let fileList = e.target.files;
        
        let formData = new FormData();
        
        for (let i = 0; i < fileList.length; i++) {
            formData.append(`file${i + 1}`, fileList[i]);
        }
        
        uploadReq().then(()=>{console.log("sucssessful")}) //exapmle
        
    };
      
    return (
        <>
          {label === "empty" ? (
            <label>&nbsp;</label>
          ) : (
            <label className={required && "required"}>
              {label}:{" "}
              {notification && (
                <span className="notification">( {notification} )</span>
              )}
            </label>
          )}
    
          <input
            className="form-input"
            {...input}
            name={input.name}
            value={value}
            placeholder={placeholder}
            onChange={uploadHandler}
            type='file'
            multiple={multiple}
          />
        </>
      );
    };

export default FUploaderMulter