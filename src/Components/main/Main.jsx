import React, { useContext } from 'react'
import "./Main.css"
import { assets } from '../../assets/assets/assets'
import { Context } from '../../Context/context'

const Main = () => {
    const { onsent, recentprompt, showresult, loading, resultdata, setinput, input } = useContext(Context)
    return (
        <div className="main">
            <div className="nav">
                < p> Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showresult
                    ?
                    <>
                        <div className="greet">
                            <p><span>Hello,Sandeep </span></p>
                            <p>How Can I Help You Toay </p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>SUuggest Beautiful  Places To See  On The Up Coming road </p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>SUuggest Beautiful  Places To See  On The Up Coming road </p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>SUuggest Beautiful  Places To See  On The Up Coming road </p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>SUuggest Beautiful  Places To See  On The Up Coming road </p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>

                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentprompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading 
                                    ?<div className='loader'>
                                       <hr />
                                       <hr />
                                       <hr />
                                    </div> 
                                    :<p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
                            }

                        </div>
                    </div>

                }


                <div className="mainbottom">
                    <div className="searchbox">
                        <input type="text " onChange={(e) => setinput(e.target.value)} value={input} placeholder='Enter a Prompt Here:' />
                        <div>
                            
                            
                            
                            
                            
                                                 <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={() => onsent()} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottominfo">
                        <span>Powered by Gemini
                        </span>
                    </p>
                </div>
            </div>

        </div >
    )
}

export default Main
