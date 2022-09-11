import React ,{Component} from 'react';
import Footer from '../Footer/footer';
import NavbarHeader from '../navbar/navbarHeader';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAds,getGardening,getBabySitter ,getDiy,getEsthetician,getPrivateLessons,getHousework} from '../../actions';
import './anouncementPage.scss'
import img1 from './imgg/img1.jpg';
import img2 from './imgg/img2.jpg';
import img3 from './imgg/img3.jpg';
import img4 from './imgg/img4.jpg';
import img5 from './imgg/img5.jpg';
import { Link } from 'react-router-dom';
const Card = (props) => (
    <div className="card">
    <div className='imgContainer'><img className='Img' src={ props.imgUrl } 
        alt={ props.alt || 'Image' } /></div>
      <div className="card-content">
        <h2 className='Name'>{ props.name } {props.lastname}</h2>
        <p className='price'>{ props.price }</p>
        <button className='hiddenButton' onClick={() => window.location.reload(false)}><Link className='Details' to={`/details/${props.id}`}>show more</Link></button>

      </div>
    </div>
  );
  
  const CardContainer = (props) => (
    <div className="cards-container">
      {
        props.cards.map((card) => (
          <Card name={ card.name}
            lastname={ card.lastname}
            price={ card.price }
            imgUrl={ card.image }
            id={card._id} />
        ))
      }
      
    </div>
  );
  const cardsData = []
  const GardeningData = []
  const BabySitterData = []
  const DiyData = []
  const LessonsData = []
  const HouseworkData = []
  const EstheticianData = []

class AnouncementPage extends Component  {
  componentWillMount(){
    this.props.dispatch(getAds(10,0,'desc'))
    this.props.dispatch(getGardening())
    this.props.dispatch(getBabySitter())
    this.props.dispatch(getDiy())
    this.props.dispatch(getPrivateLessons())
    this.props.dispatch(getHousework())
    this.props.dispatch(getEsthetician())
}
renderItems = (ads) => (
  ads.list ?  
      ads.list.map( item => (
          cardsData.push(item)
      ))
  :null
)
renderItems_Gardening = (ads) => (
  ads.gardening ?  
      ads.gardening.map( item => (
          GardeningData.push(item)
      ))
  :null
)
renderItems_BabySitter = (ads) => (
  ads.baby ?  
      ads.baby.map( item => (
         BabySitterData.push(item)
      ))
  :null
)
renderItems_Diy = (ads) => (
  ads.diy ?  
      ads.diy.map( item => (
         DiyData.push(item)
      ))
  :null
)
renderItems_Lessons = (ads) => (
  ads.lessons ?  
      ads.lessons.map( item => (
         LessonsData.push(item)
      ))
  :null
)
renderItems_Housework = (ads) => (
  ads.housework ?  
      ads.housework.map( item => (
         HouseworkData.push(item)
      ))
  :null
)
renderItems_Esthetician = (ads) => (
  ads.esthetician ?  
      ads.esthetician.map( item => (
         EstheticianData.push(item)
      ))
  :null
)
componentDidMount() {
  window.scrollTo(0, 0)
}
getKeyword = ()=>{
  console.log('key')
}
render(){
  if (cardsData.length===0){
    {this.renderItems(this.props.ads)}
  }
  if (GardeningData.length===0){
    {this.renderItems_Gardening(this.props.ads)}
  }
  if (BabySitterData.length===0){
    {this.renderItems_BabySitter(this.props.ads)}
  }
  if (DiyData.length===0){
    {this.renderItems_Diy(this.props.ads)}
  }
  if (LessonsData.length===0){
    {this.renderItems_Lessons(this.props.ads)}
  }
  if (HouseworkData.length===0){
    {this.renderItems_Housework(this.props.ads)}
  }
  if (EstheticianData.length===0){
    {this.renderItems_Esthetician(this.props.ads)}
  }
  
    return (
     <div>
        <NavbarHeader keywords={this.getKeyword}/>
        {/*Slider */}
        <section className='bodySection'>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
       <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <p className='FirstCaption'>The love of gardening…Find you'r soul,Find you job.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <p className='SecondCaption'>Friendly babysitters to your doorstep,For Your Baby Needs.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
       <p className='ThirdCaption'>Makeup is the finishing touch, the final accessory.Find your best make Up artist</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img4} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        
        <p className='FourthCaption'>Better than a thousand days of diligent study is one day with a great teacher.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img5} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        
        <p className='FifthCaption'>Life is better when you diy.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
      <div className='button-announcement'>
         <Link to='/form' className='Annonce'>Add an announcement</Link>
      </div>
    </section>
     {/*CARDS */}
    <div className='CARDS'>
          <div className="container-card">
          <h1 className='Title'>
            Most popular
          </h1>
          
          <CardContainer cards={ cardsData } />
          
        </div>
        <div className="container-card" >
        <h1 className='Title' id='Gardening'>
          Gardening
        </h1>
        
        <CardContainer cards={ GardeningData } />
        
      </div>
      <div className="container-card" id='babysitter'>
        <h1 className='Title'>
          Baby-sitter
        </h1>
        
        <CardContainer cards={ BabySitterData } />
        
      </div>
      <div className="container-card" id='diy'>
        <h1 className='Title'>
          Diy
        </h1>
        
        <CardContainer cards={ DiyData } />
        
      </div>
      <div className="container-card" id='privateLesson'>
        <h1 className='Title'>
          Private lessons
        </h1>
        
        <CardContainer cards={ LessonsData } />
        
      </div>
      <div className="container-card" id='Housework'>
        <h1 className='Title'>
          Houseworker
        </h1>
        
        <CardContainer cards={ HouseworkData } />
        
      </div>
      <div className="container-card" id='Esthetician'>
        <h1 className='Title'>
           Esthetician
        </h1>
        
        <CardContainer cards={ EstheticianData } />
        
      </div>
        </div>
        <Footer/>
    </div>
    )}
};
function mapStateToProps(state){
  return {
      ads:state.ads
  }
}

export default connect(mapStateToProps)(AnouncementPage)
