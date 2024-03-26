import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}= useContext(Context);

  return (
    <div className='main'>
        <div className='nav'>
            <p>Gpt</p>
            <img  src={assets.user_icon} alt=""/>
        </div>

    <div className="main-container">


        {!showResult?
        <>


<div className="greetings">
            <p><span>Hello, User.</span></p>
            <p>How can i help you? </p>
        </div>
        <div className="cards">
            <div className="card">
                <p>How does memory formation occur in the brain?</p>
                <img src={assets.question_icon} alt=""/>

            </div>

            <div className="card">
                <p>Suggest some good restaurants near chennai</p>
                <img src={assets.compass_icon} alt=""/>

            </div>

            <div className="card">
                <p>Find error in the given code</p>
                <img src={assets.code_icon} alt=""/>

            </div>

            <div className="card">
                <p>write an article about global warming</p>
                <img src={assets.message_icon} alt=""/>

            </div>
        </div>

        </>
        :

        <div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading ?
                <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>
                :
                
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>

                }
               

            </div>
            </div>  

        }


       

        <div className="main-bottom">
            
            <div className="search-box">
                
            {/**/}
            <input onChange={(e)=>setInput(e.target.value)}  value={input} type='text' placeholder='Enter your message '/>
            <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {input ? <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                : null
            }
                
            </div>
            </div>
            <p className="bottom-info">
                Gpt may display inaccurate info,consider checking important information.
            </p>
        </div>
    </div>
    </div>
  )
}

export default Main