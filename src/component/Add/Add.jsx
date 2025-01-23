import React from 'react'

export default function Add() {
  return (
<form className='mt-5'>
  <div className="mb-3">
    <label htmlFor="productName" className="form-label" style={{ color: "white" }}>Product Name</label>
    <input 
      type="text" 
      className="form-control" 
      id="productName" 
      placeholder="Enter product name" 
      style={{
        backgroundColor: "#333", 
        color: "white", 
        border: "1px solid #555",
        caretColor: "white"
      }}     />
  </div>

  <div className="mb-3">
    <label htmlFor="productPrice" className="form-label" style={{ color: "white" }}>Price</label>
    <input 
      type="number" 
      className="form-control" 
      id="productPrice" 
      placeholder="Enter product price" 
      style={{
        backgroundColor: "#333", 
        color: "white", 
        border: "1px solid #555",
        caretColor: "white"
      }}    />
  </div>

  <div className="mb-3">
    <label htmlFor="productTags" className="form-label" style={{ color: "white" }}>Tags</label>
    <input 
      type="text" 
      className="form-control" 
      id="productTags" 
      placeholder="Enter tags (comma-separated)" 
      style={{
        backgroundColor: "#333", 
        color: "white", 
        border: "1px solid #555",
        caretColor: "white"
      }}    />
  </div>

  <div className="mb-3">
    <label htmlFor="productDescription" className="form-label" style={{ color: "white" }}>Description</label>
    <textarea 
      className="form-control" 
      id="productDescription" 
      rows="3" 
      placeholder="Enter product description" 
      style={{
        backgroundColor: "#333", 
        color: "white", 
        border: "1px solid #555",
        caretColor: "white"
      }}    ></textarea>
  </div>

  <div className="mb-3">
    <label htmlFor="productImages" className="form-label" style={{ color: "white" }}>Images</label>
    <input 
      type="file" 
      className="form-control" 
      id="productImages" 
      multiple 
      style={{
        backgroundColor: "#333", 
        color: "white", 
        border: "1px solid #555",
        caretColor: "white"
      }}    />
  </div>

  <div className="mb-3">
    <label htmlFor="productSizes" className="form-label" style={{ color: "white" }}>Sizes</label>
    <input 
      type="text" 
      className="form-control" 
      id="productSizes" 
      placeholder="Enter sizes (comma-separated)" 
      style={{
        backgroundColor: "#333", 
        color: "white", 
        border: "1px solid #555",
        caretColor: "white"
      }}    />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>


  )
}
