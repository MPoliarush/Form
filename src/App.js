import { useState } from "react"
import styled from "styled-components"
import axios from 'axios'


function importAll(r) {
  let images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


const MainWrapper = styled.main`
width:100%;
max-width:1440px;
margin:0 auto;
height:928px;
background-color:transparent;
color:#2D2D2D;
z-index:0;
overflow:hidden;
`

const BackgroundWrapper = styled.div`
width:100%;
margin:0 auto;
position:absolute;
z-index:2;
position:relative;
`

const Footer = styled.footer`
width:100%;
margin:0 auto;
background-color:#FAFAFA;
height:200px;
position:relative;
z-index:4;
`

const MainForm=styled.form`
{
  width:39.9%;
  top:175px;
  font-family: "Apercu Arabic Pro";
  padding-left:146px;
  position:relative;
  z-index:5;
}

h1{
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  color:#3E3E3E;
  margin-bottom:39px;
}
`

const TextInput = styled.input`
  font-family: "Apercu Arabic Pro";
  display:block;
  width:88.5%;
  background:#FFFFFF;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  padding:31px 0 35px 49px;
  font-weight: 400;
  margin-bottom:8px;
  font-size:18px;
  color:#2D2D2D;
  background-color:#FFFFFF;
  position:relative;
  z-index:3;
  :last-of-type{
    padding-top:27px;
    padding-bottom:131px;
  }
  
`


const url = 'http://localhost:8000/inputs'


function App() {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')

  const [isValid,setToValid] = useState({
    nameValid:true,
    emailValid:true,
    messageValid:true
  })

  const nameHandler=(event)=>{
    setName(event.target.value)

    if (name==''){
      setToValid({...isValid, nameValid:false})
    } else if (name.length>0){
      setToValid({...isValid, nameValid:true})
    }
  }

  const emailHandler=(event)=>{
    setEmail(event.target.value)

    if (!email.includes('@')){
      setToValid({...isValid, emailValid:false})
    } else if (email.includes('@')){
      setToValid({...isValid, emailValid:true})
    }
  }

  const messageHandler=(event)=>{
    setMessage(event.target.value)

    if(message==''){
      setToValid({...isValid, messageValid:false})
    } else if(message.length>0){
      setToValid({...isValid, messageValid:true})
    }
  }

  const onClick =(event)=>{
    event.preventDefault()
    if(name==''){
      setToValid({...isValid, nameValid:false})
      return
    } 

    if(email.includes('@')==false){
      setToValid({...isValid, emailValid:false})
      return
    }

    if(message==''){
      setToValid({...isValid, messageValid:false})
      return
    } 

    const inputData={
      name:name,
      email:email,
      message:message
    }

    axios.post(url, inputData)
      .then(response=>console.log(response.data))

    setName('')
    setEmail('')
    setMessage('')
  }

    

  return (
    <div>
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
        <MainWrapper>
          <MainForm onSubmit={onClick} >       
            <h1>Reach out to us!</h1>
            <TextInput type='text' className={!isValid.nameValid ? 'invalid' :''} value={name} placeholder="Your name*" onChange={nameHandler}></TextInput>
            <TextInput type='text' className={!isValid.emailValid ? 'invalid' :''} value={email} placeholder="Your e-mail*" onChange={emailHandler}></TextInput>
            <TextInput type='text' className={!isValid.messageValid ? 'invalid' :''} value={message} placeholder="Your message*" onChange={messageHandler}></TextInput>
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

export default App