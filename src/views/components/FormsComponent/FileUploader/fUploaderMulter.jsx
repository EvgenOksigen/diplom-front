import React from 'react'

const FUploaderMulter = ({ 
    input,
    placeholder,
    meta: { touched, error },
    label,
    name=input.name,
    value,
    required,
    notification,
    uploadReq,
    multiple
}
) =>{
  console.log(name);
  
    const uploadHandler = (e) => {
        console.log(e.target.files);
        let fileList = e.target.files;
        
        let formData = new FormData();
        
        for (let i = 0; i < fileList.length; i++) {
            formData.append(`${name}`, fileList[i]); // name = 'labs'
        }
        // console.log(formData.toString());
        
        uploadReq(formData).then(()=>{console.log("sucssessful")}) //exapmle
        
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
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={(e)=>{
                uploadHandler(e)
                input.onChange([input.value.toString()])
            }}
            type='file'
            multiple={multiple}
          />
        </>
      );
    };

export default FUploaderMulter