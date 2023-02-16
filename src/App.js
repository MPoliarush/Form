
import styled from "styled-components"

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));



const MainWrapper = styled.main`
width:1440px;
height:1000px;
margin:0 auto;
height:928px;
background-color:white;
color:#2D2D2D;
`
const BackgroundWrapper = styled.div`
width:1440px;
margin:0 auto;
position:absolute;
z-index:0;
background-color:gray;
`
const Footer = styled.footer`
width:1440px;
margin:0 auto;
background-color:#D8D8D8;
height:200px;
position:relative;
`




function App() {
  return (
    <div>

      <MainWrapper>
         <BackgroundWrapper> 
            <img src={images['cartoon4.png']} className='c4'/>
            <img src={images['cartoon3.png']} className='c3'/>
            <img src={images['cloud1.png']} className='cl1'/>
            <img src={images['cloud2.png']} className='cl2'/>
            <img src={images['cloud3.png']} className='cl3'/>
            <img src={images['cloud4.png']} className='cl4'/>
            <img src={images['cloud5.png']} className='cl5'/>
            <img src={images['cloud6.png']} className='cl6'/>
            <img src={images['cloud7.png']} className='cl7'/>
            <img src={images['cartoon1.png']} className='c1'/>
            <img src={images['cartoon2.png']} className='c2'/>
            <img src={images['cloud8.png']} className='cl8'/>
            <img src={images['cloud9.png']} className='cl9'/>
            <img src={images['map.png']} className='map'/>
        </BackgroundWrapper>
        
      </MainWrapper> 
      <Footer>
        <img src={images['cartoon6.png']} className='c6'/>
        <img src={images['green.png']} className='green'/>
        <img src={images['cartoon5.png']} className='c5'/>
        <div className="links">
          <a href="#"><img src={images['In.png']} className='linked'></img></a>
          <a href="#"><img src={images['twiter.png']} className='linked'></img></a>
          <a href="#"><img src={images['fb.png']} className='linked'></img></a>
          <a href="#"><img src={images['pint.png']} className='linked'></img></a>
        </div>
      </Footer>
      </div>
  );

}

export default App;
