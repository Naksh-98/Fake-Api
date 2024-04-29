import React, { useState } from 'react';
import '../css/Aside.css';

const Aside = () => {
    // State to track which dropdowns are open
    const [openDropdown, setOpenDropdown] = useState(null);

    // Function to toggle the dropdown
    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <aside className="aside">
            <div>
                <div className="dropdown">
                    <h5>IDEAL FOR</h5>
                    <button className="dropbtn" onClick={() => toggleDropdown(0)}>
                        <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" width="20px" height="20px" />
                    </button>

                    {openDropdown === 0 && (
                        <div className="dropdown-content">
                            <label><input type="checkbox" /> All</label>
                            <label><input type="checkbox" /> Men (65)</label>
                            <label><input type="checkbox" /> Women (63)</label>
                            <label><input type="checkbox" /> Baby & Kids (59)</label>
                        </div>
                    )}
                </div>
            </div>


            <div>
                <div className="dropdown">
                    <h5>Occasion</h5>
                    <button className="dropbtn" onClick={() => toggleDropdown(1)}>
                        <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" width="20px" height="20px" />

                        <div className="burger-icon"></div>
                    </button>
                    {openDropdown === 1 && (
                        <div className="dropdown-content">
                            <label><input type="checkbox" /> All</label>
                            <label><input type="checkbox" /> Rainy Season (1)</label>
                            <label><input type="checkbox" /> Casual (3)</label>
                            <label><input type="checkbox" /> Wedding (1)</label>
                        </div>
                    )}
                </div>
            </div>


            <div>
                <div className="dropdown">
                    <h5>Work</h5>
                    <button className="dropbtn" onClick={() => toggleDropdown(2)}>
                        <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" width="20px" height="20px" />

                        <div className="burger-icon"></div>
                    </button>
                    {openDropdown === 2 && (
                        <div className="dropdown-content">
                            <label><input type="checkbox" /> All</label>
                            <label><input type="checkbox" /> Baby & Kids (59)</label>
                        </div>
                    )}
                </div>
            </div>


            <div>
                <div className="dropdown">
                    <h5>Fabric</h5>
                    <button className="dropbtn" onClick={() => toggleDropdown(3)}>
                        <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" width="20px" height="20px" />

                        <div className="burger-icon"></div>
                    </button>
                    {openDropdown === 3 && (
                        <div className="dropdown-content">

                        </div>
                    )}
                </div>
            </div>


            <div>
                <div className="dropdown">
                    <h5>Segment</h5>
                    <button className="dropbtn" onClick={() => toggleDropdown(4)}>
                        <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" width="20px" height="20px" />

                        <div className="burger-icon"></div>
                    </button>
                    {openDropdown === 4 && (
                        <div className="dropdown-content">

                        </div>
                    )}
                </div>
            </div>


            <div>
                <div className="dropdown">
                    <h5>Suitable For</h5>
                    <button className="dropbtn" onClick={() => toggleDropdown(5)}>
                        <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" width="20px" height="20px" />

                        <div className="burger-icon"></div>
                    </button>
                    {openDropdown === 5 && (
                        <div className="dropdown-content">

                        </div>
                    )}
                </div>
            </div>


            <div>
                <div className="dropdown">
                    <h5>Raw Materials</h5>
                    <button className="dropbtn" onClick={() => toggleDropdown(6)}>
                        <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" width="20px" height="20px" />

                        <div className="burger-icon"></div>
                    </button>
                    {openDropdown === 6 && (
                        <div className="dropdown-content">

                        </div>
                    )}
                </div>
            </div>


            <div>
                <div className="dropdown">
                    <h5>Pattern</h5>
                    <button className="dropbtn" onClick={() => toggleDropdown(7)}>
                        <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" width="20px" height="20px" />

                        <div className="burger-icon"></div>
                    </button>
                    {openDropdown === 7 && (
                        <div className="dropdown-content">

                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
}

export default Aside;
