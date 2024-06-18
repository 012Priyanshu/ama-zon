import React from 'react'
import img2 from './photos/box1_image.jpg'
import img3 from './photos/box3_image.jpg'
import img4 from './photos/box4_image.jpg'
import img5 from './photos/box5_image.jpg'
import img6 from './photos/box6_image.jpg'
import img7 from './photos/box7_image.jpg'
import img8 from './photos/box8_image.jpg'
import img9 from  './photos/img9.webp'
import img10 from './photos/img10.webp'
import img11 from './photos/img11.webp'
import img12 from './photos/img12.webp'
import img13 from './photos/img13.webp'
import img14 from './photos/img14.jpg'
import img15 from './photos/img15.jpg'
import img16 from './photos/img16.jpg'
import img17 from './photos/img17.webp'
import img18 from './photos/img18.webp'
import img19 from './photos/img19.webp'
import img20 from './photos/img20.webp'
import img21 from './photos/img21.webp'
import img22 from './photos/img22.webp'
import img23 from './photos/img23.webp'
import img24 from './photos/img24.webp'
import img25 from './photos/img25.jpg'
import { Link } from 'react-router-dom';


 const main=()=> {
  const capitalizeFirstLetter=(string)=> 
    {
       return string.charAt(0).toUpperCase() + string.slice(1)
    }
  
    return (
      <>
       <div className="main">
       
        <div className="headImg">
          <div className="headimg"></div>
        </div>

       
        
          
      <div className="container my-3">
        <div className="row gy-3">
      <div className="col-md-3">
      <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img2} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">TACVASEN Women's Fleece Jackets Fuzzy Sherpa Hoodies Zip Up Coats with Pockets Soft Warm Fluffy Outerwear</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <span className="badge text-bg-danger">Limited Time Deal</span>
          <br />
          <Link to="/" className="btn btn-light my-3">see more</Link>
        </div>
      </div>
      </div>

      <div className="col-md-3">
      <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img3} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">YITAHOME 5-Tier Bookshelf, S-Shaped Z-Shelf Bookshelves and Bookcase, Industrial Freestanding Multifunctional</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/" className="btn btn-light my-3">see more</Link>
        </div>
      </div>
      </div>

      <div className="col-md-3">
      <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img4} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">7 unique smartphones you’ve likely never heard of.</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          
          <span className="badge text-bg-danger">Limited Time Deal</span>
          <br />
          <Link to="/" className="btn btn-light my-3">see more</Link>
        </div>
      </div>

      </div>

      <div className="col-md-3">
      <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img13} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Amazon Fire TV Stick with Alexa Voice Remote (includes TV and app controls)</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/"className="btn btn-light my-3">see more</Link>
        </div>
      </div>
      </div>

      
      <div className="col-md-3">
      <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img5} className="card-img-top" alt="..."/>
        <div className="card-body mx-3">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">30 Pieces Travel Makeup Bags Canvas Cosmetic Bags Bulk Multipurpose Small Makeup Pouch with Zipper Plain Blank Toiletry Bag DIY for Women Teens, Assorted Colors</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/" className="btn btn-light my-3">see more</Link>
        </div>
      </div>
      </div>


     <div className="col-md-3">
     <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img6} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Now, it’s time to come up with the best pet food slogan to tie all the pieces together. not just a slogan, it should be short and to the point, it should also be catchy and memorable.</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          
          <span className="badge text-bg-danger">Limited Time Deal</span>
          <br />
          <Link to="/" className="btn btn-light my-3">see more</Link>
        </div>
      </div>
     </div>


     <div className="col-md-3">
     <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img7} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Outward Hound Tail Teaser Durable Dog Wand with Soft Plush Toys</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/" className="btn btn-light my-3">see more</Link>
        </div>
      </div>
     </div>


      <div className="col-md-3">
      <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img8} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Dokotoo Oversized T Shirts for Women Crewneck Short Sleeve Casual Summer Tops Lightweight Loose High Low</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/" className="btn btn-light my-3">see more</Link>
        </div>
      </div>
      
      </div>

      



     
     <div className="col-md-3">
     <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img9} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">Teri Baaton Mein Aisa Uljha Jiya <br /> 2024</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/"className="btn btn-light my-3" style={{color:'#007185',fontWeight:'bolder'}}>Prime Video</Link>
          <p>
           <big> <sup>₹</sup>279</big> to rent <br />
          Or available with a Prime membership
          </p>
        </div>
      </div>
     </div>


      <div className="col-md-3">
      <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img10} className="card-img-top" alt="..."/>
        <div className="card-body">
          
          <p className="card-text">Tiger 3 <br />2023</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/"className="btn btn-light my-3" style={{color:'#007185',fontWeight:'bolder'}}>Prime Video</Link>
          <p>
           <big> <sup>₹</sup>129</big> to rent <br />
          Or available with a Prime membership
          </p>
        </div>
      </div>
      </div>


      <div className="col-md-3">
      <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img11} className="card-img-top" alt="..."/>
        <div className="card-body">
          
          <p className="card-text">Yodha <br /> 2024</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/"className="btn btn-light my-3" style={{color:'#007185',fontWeight:'bolder'}}>Prime Video</Link>
          <p>
           <big> <sup>₹</sup>274</big> to rent <br />
          Or available with a Prime membership
          </p>
        </div>
      </div>
      </div>


      <div className="col-md-3">
      <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img12} className="card-img-top" alt="..."/>
        <div className="card-body">
         
          <p className="card-text">Bawaal <br /> 2023</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/"className="btn btn-light my-3" style={{color:'#007185',fontWeight:'bolder'}}>Prime Video</Link>
          <p>
           <big> <sup>₹</sup>229</big> to rent <br />
          Or available with a Prime membership
          </p>
        </div>
      </div>
      </div>
      

    
      <div className="col-md-3">
      <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img25} className="card-img-top" alt="..."/>
        <div className="card-body">
          
          <p className="card-text">Tome & Jerry<br /> 2000</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/"className="btn btn-light my-3" style={{color:'#007185',fontWeight:'bolder'}}>Prime Video</Link>
          <p>
           <big> <sup>₹</sup>552</big> to rent <br />
          Or available with a Prime membership
          </p>
        </div>
      </div>
      </div>


      <div className="col-md-3">
      <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img14} className="card-img-top" alt="..."/>
        <div className="card-body">
        
          <p className="card-text">Oru Peru<br />2023</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/"className="btn btn-light my-3" style={{color:'#007185',fontWeight:'bolder'}}>Prime Video</Link>
          <p>
           <big> <sup>₹</sup>124</big> to rent <br />
          Or available with a Prime membership
          </p>
        </div>
      </div>
      </div>


      <div className="col-md-3">
      <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img15} className="card-img-top" alt="..."/>
        <div className="card-body">
         
          <p className="card-text">Jailer<br /> 2024</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/"className="btn btn-light my-3" style={{color:'#007185',fontWeight:'bolder'}}>Prime Video</Link>
          <p>
           <big> <sup>₹</sup>643</big> to rent <br />
          Or available with a Prime membership
          </p>
        </div>
      </div>
      </div>


     <div className="col-md-3">
     <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img16} className="card-img-top" alt="..."/>
        <div className="card-body">
         
          <p className="card-text">Operation Valentine<br /> 2020</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/"className="btn btn-light my-3" style={{color:'#007185',fontWeight:'bolder'}}>Prime Video</Link>
          <p>
           <big> <sup>₹</sup>435</big> to rent <br />
          Or available with a Prime membership
          </p>
        </div>
      </div>
     </div>
      

     
      <div className="col-md-3">
      <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img17} className="card-img-top" alt="..."/>
        <div className="card-body">
          
          <p className="card-text">PS-2 <br /> 2023</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/"className="btn btn-light my-3" style={{color:'#007185',fontWeight:'bolder'}}>Prime Video</Link>
          <p>
           <big> <sup>₹</sup>531</big> to rent <br />
          Or available with a Prime membership
          </p>
        </div>
      </div>
      </div>


      <div className="col-md-3">
      <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img18} className="card-img-top" alt="..."/>
        <div className="card-body">
        
          <p className="card-text">The Family Star <br />2022</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/"className="btn btn-light my-3" style={{color:'#007185',fontWeight:'bolder'}}>Prime Video</Link>
          <p>
           <big> <sup>₹</sup>421</big> to rent <br />
          Or available with a Prime membership
          </p>
        </div>
      </div>
      </div>


      <div className="col-md-3">
      <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img19} className="card-img-top" alt="..."/>
        <div className="card-body">
        
          <p className="card-text">Tiger <br /> 2021</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/"className="btn btn-light my-3" style={{color:'#007185',fontWeight:'bolder'}}>Prime Video</Link>
          <p>
           <big> <sup>₹</sup>123</big> to rent <br />
          Or available with a Prime membership
          </p>
        </div>
      </div>
      </div>


      <div className="col-md-3">
      <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img20} className="card-img-top" alt="..."/>
        <div className="card-body">
         
          <p className="card-text">Dil DOsti Dilemma<br /> 2023</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/"className="btn btn-light my-3" style={{color:'#007185',fontWeight:'bolder'}}>Prime Video</Link>
          <p>
           <big> <sup>₹</sup>321</big> to rent <br />
          Or available with a Prime membership
          </p>
        </div>
      </div>
      </div>
      

      
     <div className="col-md-3">
     <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img21} className="card-img-top" alt="..."/>
        <div className="card-body">
        
          <p className="card-text">J Baby <br /> 2023</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/"className="btn btn-light my-3" style={{color:'#007185',fontWeight:'bolder'}}>Prime Video</Link>
          <p>
           <big> <sup>₹</sup>267</big> to rent <br />
          Or available with a Prime membership
          </p>
        </div>
      </div>
     </div>


      <div className="col-md-3">
      <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img22} className="card-img-top" alt="..."/>
        <div className="card-body">
         
          <p className="card-text">Eagle <br />2021</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/"className="btn btn-light my-3" style={{color:'#007185',fontWeight:'bolder'}}>Prime Video</Link>
          <p>
           <big> <sup>₹</sup>29</big> to rent <br />
          Or available with a Prime membership
          </p>
        </div>
      </div>
      </div>


    <div className="col-md-3">
    <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img23} className="card-img-top" alt="..."/>
        <div className="card-body">
         
          <p className="card-text">Garudan <br /> 2017</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/"className="btn btn-light my-3" style={{color:'#007185',fontWeight:'bolder'}}>Prime Video</Link>
          <p>
           <big> <sup>₹</sup>27</big> to rent <br />
          Or available with a Prime membership
          </p>
        </div>
      </div>
    </div>


      <div className="col-md-3">
      <div className="card" style={{width:' 15rem',height: 'fit-content;',backgroundColor:'   #f5f6f7'}}>
        <img src={img24} className="card-img-top" alt="..."/>
        <div className="card-body">
        
          <p className="card-text">Transformer <br /> 2000</p>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
          <br />
          <Link to="/"className="btn btn-light my-3" style={{color:'#007185',fontWeight:'bolder'}}>Prime Video</Link>
          <p>
           <big> <sup>₹</sup>79</big> to rent <br />
          Or available with a Prime membership
          </p>
        </div>
      </div>
      </div>

      
      </div>
      </div>
     
        
        <div className="container my-5">
          <div className="row">
         <h4>Related Search</h4>
           
         <div className="col-md-4">
          <div className="card" style={{width: "17rem",height:'4rem'}}>
            <div className="card-body"> 
            <i className="fa-solid fa-magnifying-glass"></i>
              <Link to="/"className="card-link mx-2" style={{textDecoration:'none',color:'black'}}>amazon prime membership</Link>
              
            </div>
          </div>
         </div>
         <div className="col-md-4">
         
          <div className="card" style={{width: "19rem",height:'4rem'}}>
            <div className="card-body"> 
            <i className="fa-solid fa-magnifying-glass"></i>
              <Link to="/"className="card-link mx-2" style={{textDecoration:'none',color:'black'}}>amazon prime subscription offer</Link>
              
            </div>
          </div>
         </div>
         <div className="col-md-4">
         
          <div className="card" style={{width: "17rem",height:'4rem'}}>
            <div className="card-body"> 
            <i className="fa-solid fa-magnifying-glass"></i>
              <Link to="/"className="card-link mx-2" style={{textDecoration:'none',color:'black'}}>prime</Link>
              
            </div>
          </div>
         </div>
         <div className="col-md-4">
         
          <div className="card" style={{width: "17rem",height:'4rem'}}>
            <div className="card-body"> 
            <i className="fa-solid fa-magnifying-glass"></i>
              <Link to="/"className="card-link mx-2" style={{textDecoration:'none',color:'black'}}>amazon prime video</Link>
              
            </div>
          </div>
         </div>
         <div className="col-md-4">
         
          <div className="card" style={{width: "17rem",height:'4rem'}}>
            <div className="card-body"> 
            <i className="fa-solid fa-magnifying-glass"></i>
              <Link to="/"className="card-link mx-2" style={{textDecoration:'none',color:'black'}}>amazon prime movies</Link>
              
            </div>
          </div>
         </div>
         <div className="col-md-4">
         
          <div className="card" style={{width: "21rem",height:'4rem'}}>
            <div className="card-body"> 
            <i className="fa-solid fa-magnifying-glass"></i>
              <Link to="/"className="card-link mx-2" style={{textDecoration:'none',color:'black'}}>amazon prime membership for 1 year</Link>
              
            </div>
          </div>
         </div>


          </div>


        

        </div>

        <div className="container">
          <h4>Need Help?</h4>
          <h6 style={{color:'#007185'}}>visit the help section or contact us</h6>
        </div>

        <div className="border border-success p-2 text-center" style={{height:'8rem'}}>{capitalizeFirstLetter("see personalised recomdation")} <br />
        <button type="button" className="btn btn-warning" style={{width:'16rem',fontWeight:'bold'}}>sign in</button>
        <p style={{fontSize:'15px'}}>{capitalizeFirstLetter("new Customer ?")}<Link className='mx-2' to="/" style={{textDecoration:'none',color:'#007185'}}>{capitalizeFirstLetter("start here")}</Link></p>
        </div>
        
      
      </div>
      </>
    )
  }


export default main