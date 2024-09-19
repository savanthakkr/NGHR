import React from "react";
import chatList from "../../data/chatList.json";

function ConsultantChat() {
    return (
        <div className="col-lg-12">
            <div className="consultant-clients">
                <div className="title">
                    <h5>Chat</h5>
                </div>
            </div>
            <div className="col-12 client-chat">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="chat-list-view">
                            <div>
                                <h6 className="title">Chats</h6>
                            </div>
                            {chatList.map(chat => (
                                <div className="chat-lists">
                                    <div className="col-3 col-xl-2">
                                        <img src={chat.imgSrc} alt="client-img" />
                                    </div>
                                    <div className="col-9 col-xl-8 chat-data">
                                        <h6>{chat.name}</h6>
                                        <small>{chat.chat}</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="start-chat-btn">
                            <div className="form-inner">
                                <button
                                    className="primry-btn-2 lg-btn w-100"
                                    type="submit"
                                >
                                    Start New Chat
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="chat-view">
                            <div className="chat-head">
                                <div className="row">
                                    <p className="title">Chat with <span className="primary-text">Kyle Fisher</span></p>
                                    <p className="lst-online text-uppercase">last online: 4 hours ago</p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default ConsultantChat;