import {useCallback, useEffect, useMemo, useRef, useState} from "react";

export const StepTwo = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            title: "Кибернеделя",
            qr: "0,2",
            ocr: "0.2",
            ctor: "0,2",
            shown: "0,2",
            dismiss: "02",
            blacklist: "0,2",
            delivery: "0.2", perespam: "0,2"
        }, {
            id: 2,
            title: "яндекс",
            qr: "0,2",
            ocr: "0.2",
            ctor: "0,2",
            shown: "0,2",
            dismiss: "02",
            blacklist: "0,2",
            delivery: "0.2", perespam: "0,2"
        }, {
            id: 3,
            title: "Повышение цены Плюса",
            qr: "0,2",
            ocr: "0.2",
            ctor: "0,2",
            shown: "0,2",
            dismiss: "02",
            blacklist: "0,2",
            delivery: "0.2", perespam: "0,2"
        },
        {
            id: 4,
            title: "Угадай оскар",
            qr: "0,2",
            ocr: "0.2",
            ctor: "0,2",
            shown: "0,2",
            dismiss: "02",
            blacklist: "0,2",
            delivery: "0.2", perespam: "0,2"
        }, {
            id: 5,
            title: "Релиз видеошотов",
            qr: "0,2",
            ocr: "0.2",
            ctor: "0,2",
            shown: "0,2",
            dismiss: "02",
            blacklist: "0,2",
            delivery: "0.2", perespam: "0,2"
        }, {
            id: 6,
            title: "Расширить подписку",
            qr: "0,2",
            ocr: "0.2",
            ctor: "0,2",
            shown: "0,2",
            dismiss: "02",
            blacklist: "0,2",
            delivery: "0.2", perespam: "0,2"
        },
        {
            id: 7,
            title: "Релиз нейромузыки",
            qr: "0,2",
            ocr: "0.2",
            ctor: "0,2",
            shown: "0,2",
            dismiss: "02",
            blacklist: "0,2",
            delivery: "0.2", perespam: "0,2"
        }, {
            id: 8,
            title: "Релиз бенефистов",
            qr: "0,2",
            ocr: "0.2",
            ctor: "0,2",
            shown: "0,2",
            dismiss: "02",
            blacklist: "0,2",
            delivery: "0.2", perespam: "0,2"
        }, {
            id: 9,
            title: "Билет за баллы",
            qr: "0,2",
            ocr: "0.2",
            ctor: "0,2",
            shown: "0,2",
            dismiss: "02",
            blacklist: "0,2",
            delivery: "0.2", perespam: "0,2"
        }, {
            id: 10,
            title: "Концерт Орлова",
            qr: "0,2",
            ocr: "0.2",
            ctor: "0,2",
            shown: "0,2",
            dismiss: "02",
            blacklist: "0,2",
            delivery: "0.2", perespam: "0,2"
        }
    ])
    const [search, setSearch] = useState('')
    const [isOpen, setIsOpen] = useState(false)


    const searchValue = items.filter(val => {
        return val.title.toLowerCase().includes(search.toLowerCase())
    })
    const liclick = (e: any) => {
        setSearch(e.target.textContent)
        setIsOpen(!isOpen)
    }
    const test = () => {
        setIsOpen(true)
    }


    const [activeIndex, setActiveIndex] = useState(null);


    // Функция для установки активного индекса
    const handleItemClick = (index: any) => {
        setActiveIndex(index);
    };


    const sortItemsById = () => {
        const sortedItems = [...items].sort((a, b) => b.id - a.id);
        setItems(sortedItems);
    };
    const sortItemsByIdTwo = () => {
        const sortedItems = [...items].sort((a, b) => a.id - b.id);
        setItems(sortedItems);
    };
    const [highlightedElement, setHighlightedElement] = useState(null);

    const handleMouseEnter = (id: any) => {
        setHighlightedElement(id);
    };

    const handleMouseLeave = () => {
        setHighlightedElement(null);
    };
    return (
        <>
            <div className="common">
                <div className="menu"></div>
                <div className="container">
                    <div className="container-nav">
                        <div className="values">
                            <input onClick={test} type="text" value={search} className="search"
                                   onChange={e => setSearch(e.target.value)}/>
                            {search && isOpen ? searchValue.map(val =>
                                <ul>
                                    <li key={val.id} onClick={liclick}>
                                        {val.title}
                                    </li>
                                </ul>
                            ) : null}
                        </div>
                        <div className="values">
                            <button className="sort-inc" onClick={sortItemsById}>Sort by ID</button>
                        </div>
                        <div className="values">
                            <button className="sort-dec" onClick={sortItemsByIdTwo}>Sort by ID</button>
                        </div>
                        <div className="values"></div>
                        <div className="values"></div>
                        <div className="values"></div>
                        <div className="values"></div>
                        <div className="values"></div>
                        <div className="values"></div>
                        <div className="values"></div>
                    </div>

                    <div className="title-item">
                        <div onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}
                             className="title fixed">qr
                        </div>
                        <div onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}
                             className="title left">ocr
                        </div>
                        <div onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}
                             className="title">ctor
                        </div>
                        <div onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}
                             className="title">test
                        </div>
                        <div onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}
                             className="title">test
                        </div>
                        <div onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave}
                             className="title">test
                        </div>
                        <div onMouseEnter={() => handleMouseEnter(7)} onMouseLeave={handleMouseLeave}
                             className="title">test
                        </div>
                        <div onMouseEnter={() => handleMouseEnter(8)} onMouseLeave={handleMouseLeave}
                             className="title">test
                        </div>
                        <div onMouseEnter={() => handleMouseEnter(9)} onMouseLeave={handleMouseLeave}
                             className="title">test
                        </div>
                        <div onMouseEnter={() => handleMouseEnter(10)} onMouseLeave={handleMouseLeave}
                             className="title">test
                        </div>
                    </div>

                    {searchValue.map((val, index) => (

                        <div id={`${val.id}`} key={val.id}
                             className={`${val.id === activeIndex ? 'active' : 'container-item'}`}
                             onMouseOver={() => handleItemClick(val.id)}
                             onMouseOut={handleItemClick}
                        >

                            <div style={{background: highlightedElement === 1 ? 'yellow' : '#61dafb'}}
                                 className={`${val.id === activeIndex ? 'active test' : ' test'}`}>{val.title}</div>

                            <div style={{background: highlightedElement === 2 ? 'yellow' : '#61dafb'}}
                                 className="values ggg">{val.qr}</div>
                            <div style={{background: highlightedElement === 3 ? 'yellow' : '#61dafb'}}
                                 className="values">{val.ocr}</div>
                            <div style={{background: highlightedElement === 4 ? 'yellow' : '#61dafb'}}
                                 className="values">{val.ctor}</div>
                            <div style={{background: highlightedElement === 5 ? 'yellow' : '#61dafb'}}
                                 className="values">{val.shown}</div>
                            <div style={{background: highlightedElement === 6 ? 'yellow' : '#61dafb'}}
                                 className="values">{val.dismiss}</div>
                            <div style={{background: highlightedElement === 7 ? 'yellow' : '#61dafb'}}
                                 className="values">{val.blacklist}</div>
                            <div style={{background: highlightedElement === 8 ? 'yellow' : '#61dafb'}}
                                 className="values">{val.delivery}</div>
                            <div style={{background: highlightedElement === 9 ? 'yellow' : '#61dafb'}}
                                 className="values">{val.perespam}</div>
                            <div style={{background: highlightedElement === 10 ? 'yellow' : '#61dafb'}}
                                 className="values">{val.id}</div>
                            <div style={{background: highlightedElement === 11 ? 'yellow' : '#61dafb'}}
                                 className="values">{val.id}</div>
                        </div>
                    ))}

                </div>

            </div>
            <div>

            </div>
        </>
    )
}