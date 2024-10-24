import React, { useState } from "react";
import chatList from "../../data/chatList.json";
import { SenderBubble, ReceiverBubble } from "./chatBubble";

function ConsultantChat() {
    const [messages] = useState([
        { id: 1, sender: 'other', text: 'Hi, Kyle. How are you doing? Did you get that job yesterday?', time: '4:20 PM' },
        { id: 2, sender: 'self', text: 'Nope, they kicked me out of the office!', time: '4:25 PM', avatar: '/assets/images/icon/connection2.png' },
        { id: 3, sender: 'other', text: 'Wow! I can invite you in my new project. We need a product designer right now!', time: '4:30 PM' },
        { id: 4, sender: 'self', text: "It'll be great! I need this job, but...", time: '4:29 PM', avatar: '/assets/images/icon/connection2.png' },
        { id: 5, sender: 'self', text: 'So, it’s up to you!', time: '4:29 PM', avatar: '/assets/images/icon/connection2.png' },
    ]);
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
                                <div className="chat-status">
                                    <h6 className="title mb-0 me-5">Chat with <span className="primary-text">Kyle Fisher</span></h6>
                                    <p className="last-online text-uppercase mb-0">last online: 4 hours ago</p>
                                </div>
                                <div className="chat-attach">
                                    <i className="bi bi-paperclip me-2"></i>
                                    <div className="share-media">Share Media <span className="">(12)</span></div>
                                </div>
                            </div>
                            <div className="chat">
                                <div className="conversation-head">
                                    <div className="line"></div>
                                    <p className="conversation-data mb-0">yesterday, 29 aug</p>
                                    <div className="line"></div>
                                </div>
                                <div style={{ padding: '20px', height: '77vh', overflowY: 'auto' }}>
                                    {messages.map((msg) =>
                                        msg.sender === 'self' ? (
                                            <SenderBubble key={msg.id} message={msg.text} time={msg.time} avatar={msg.avatar} />
                                        ) : (
                                            <ReceiverBubble key={msg.id} message={msg.text} time={msg.time} />
                                        )
                                    )}
                                </div>
                            </div>
                            <div className="chat-bottom">
                                <input type="text" placeholder="Write your message" className="w-100" />
                                <div className="chat-attach-bottom">
                                    <i className="bi bi-paperclip mx-4"></i>
                                    <div className="send-icon ms-auto">
                                        <img src="/assets/images/icon/send.png" alt="send-icon" />
                                    </div>
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