import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalCard = styled.div`
    width: 500px;
    height: 70px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    position: relative;
`;

const Button = styled.button`
    width: 25px;
    height: 25px;
    background-color: #EEC643;
    color: #141414;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: -10px;
    right: -10px;
    cursor: pointer;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(20, 20, 20, 0.5);
    z-index: 0;
`;

const Modal = ({ showModal, setShowModal, Name, showBGModal }) => {
    return (
        <>
            {showModal ? (
                <ModalWrapper>
                    <ModalCard>
                        <p>{Name}</p>
                        <Button onClick={() => setShowModal(false)}>X</Button>
                    </ModalCard>
                    {showBGModal ? <Background onClick={() => setShowModal(false)} /> : null}
                </ModalWrapper>
            ) : null}
        </>
    );
};
export default Modal;