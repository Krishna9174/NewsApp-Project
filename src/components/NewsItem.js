import React from 'react'

const NewsItem= (props)=> {
 
    let {title,description,imageurl,newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
    <div className="card">
      <div style={{
        display:'flex',
        justifyContent:'flex-end',
        position:'absolute',
        right:'0'
      }}>
      <span className="badge rounded-pill bg-danger">{source}</span>
      </div>
      
  <img src= {imageurl?imageurl:"https://www.gannett-cdn.com/presto/2023/06/05/USAT/a9b285eb-d76d-4572-aceb-a18de45036d4-AP_APTOPIX_Russia_Ukraine_War_7.jpg?auto=webp&crop=4987,2806,x0,y253&format=pjpg&width=1200"}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="noreferrer"  target="_blank" className="btn btn-sm btn-dark ">Go somewhere</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
