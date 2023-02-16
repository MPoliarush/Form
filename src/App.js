
import { useState } from "react";
import styled from "styled-components"

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));



const MainWrapper = styled.main`
width:100%;
height:1000px;
margin:0 auto;
height:928px;
background-color:transparent;
color:#2D2D2D;
position:relative;

z-index:0;
overflow:hidden;
`
const BackgroundWrapper = styled.div`
width:1440px;
margin:0 auto;
position:absolute;
z-index:2;

position:relative;
`
const Footer = styled.footer`
max-width:1440px;
margin:0 auto;
background-color:#D8D8D8;
height:200px;
position:relative;
`

const MainForm=styled.form`
{
  width:563px;
  margin-left:147px;
  position:relative;
  top:174px;
  font-family: "Apercu Arabic Pro";
}
h1{
  font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 130%;
color: #3E3E3E;
margin-bottom:38px;

}

`
const TextInput = styled.input`
  width:563px;
  display:block;
  width:90%;
  background: #FFFFFF;
  border: 1px solid #DCDCDC;
  border-radius: 8px;
  padding:34px 0 31px 46px;
  margin-bottom:10px;
  font-size: 18px;
  color:black;
  :last-of-type{
    position:absolute:
  height:125px;
  padding-top:35px;
  padding-bottom:126px;
  }
  
`

// input::placeholder{
//   font-style: normal;
// font-weight: 400;
// font-size: 18px;
// line-height: 180%;
// padding:30px 411px 30px 46px;
// }

// `




function App() {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')

  const [isValid,setToValid]= useState({
    nameValid:true,
    emailValid:true,
  })

  const nameHandler=(event)=>{
    console.log(event.target.value)
    setName(event.target.value)

    if (name==''){
      setToValid({...isValid, nameValid:false})
    } else if (name.length>0){
      setToValid({...isValid, nameValid:true})
    }
  }

  const emailHandler=(event)=>{
    console.log(event.target.value)
    setEmail(event.target.value)

    if (!email.includes('@')){
      setToValid({...isValid, emailValid:false})
    } else if (email.includes('@')){
      setToValid({...isValid, emailValid:true})
    }
  }

  const messageHandler=(event)=>{
    console.log(event.target.value)
    setMessage(event.target.value)
  }

  const onClick =(event)=>{
    event.preventDefault()
    console.log(isValid)
    if(name==''){
      setToValid({...isValid, nameValid:false})
      return
    } 

    if(email.includes('@')==false){
      setToValid({...isValid, emailValid:false})
       return
    }

    setName('')
    setEmail('')
    setMessage('')

  }

    
     



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
          <MainForm onSubmit={onClick} >       
            <h1>Reach out to us!</h1>
            <TextInput type='text' className={!isValid.nameValid ? 'invalid' :''} value={name} placeholder="Your name*" onChange={nameHandler}></TextInput>
            <TextInput type='text' className={!isValid.emailValid ? 'invalid' :''} value={email} placeholder="Your e-mail*" onChange={emailHandler}></TextInput>
            <TextInput type='text' value={message} placeholder="Your message*" onChange={messageHandler}></TextInput>
            <button >Send message</button>
          </MainForm>
            
        
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
