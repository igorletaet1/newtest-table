import React, {useEffect, useMemo, useRef, useState} from "react";
import { CSSTransition } from 'react-transition-group';

export const StepOne = () => {

    const [isRotated, setIsRotated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsRotated(!isRotated);
        }, 1000); // поворот произойдет через 1 секунду

        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (
        <>
            <div className="landos" style={{
                backgroundImage: `url("/shape-09-[DESIGN.png")`
            }}>
                <div className="frame-item">

                    <div className="frame">
                        <div className="text">
                            <p className="text-size">Это текст это текст это текст это текст это текст</p>
                            <img src="/image-removebg-preview6.png" alt=""/>
                            <img src="/image-removebg-preview7.png" alt=""/>
                            <img src="/image-removebg-preview8.png" alt=""/>
                            <img src="/image-removebg-preview9.png" alt=""/>
                            <p>Это текст это текст: </p>
                        </div>
                        <div className="image">

                            <img className="mobile" src="/image5.svg" alt=""/>

                            <div className="image-one">
                                <CSSTransition
                                    in={isRotated}
                                    timeout={1000}
                                    classNames="rotate"
                                >
                                    <img
                                        src="/image41.svg"
                                        className={isRotated ? 'rotate-image rotate' : 'rotate-image'}
                                    />

                                </CSSTransition>

                                <CSSTransition
                                    in={isRotated}
                                    timeout={1000}
                                    classNames="rotate"
                                >
                                    <img src="/image40.svg"
                                         className={isRotated ? 'rotate-image rotate' : 'rotate-image'}/>

                                </CSSTransition>

                            </div>


                            <div className="image-two">
                                <CSSTransition
                                    in={isRotated}
                                    timeout={1000}
                                    classNames="rotate"
                                >
                                    <img src="/image39.svg"
                                         className={isRotated ? 'rotate-image rotate' : 'rotate-image'}/>

                                </CSSTransition>
                                <CSSTransition
                                    in={isRotated}
                                    timeout={1000}
                                    classNames="rotate"
                                >
                                    <img src="/image-preview.svg"
                                         className={isRotated ? 'rotate-image rotate' : 'rotate-image'}/>

                                </CSSTransition>

                            </div>

                        </div>
                    </div>
                    <div className="item-block">
                        <div className="item-one"><img src='/rectangle.png' alt=""/>
                            <img className="image-inside" src='/1.png' alt=""/>
                            <p>это текст</p>
                        </div>
                        <div className="item-two"><img src='/rectangle.png' alt=""/>

                            <p>это текст</p></div>
                        <div className="item-three"><img src='/rectangle.png' alt=""/>

                            <p>это текст</p></div>
                        <div className="item-four"><img src='/rectangle.png' alt=""/>

                            <p>это текст</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}