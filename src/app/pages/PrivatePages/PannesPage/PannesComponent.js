import React from 'react';
import "./style/style.scss";

var data = [
    {
       message: "Panne notification this is a long text so when it reaches the end of the div it should disappear", 
       vehicle: "Tesla Model S",
       source: "Automatique",
       date: "April 20, 2021",
       time: "6:19 PM",
       seen: false
    },
    {
        message: "Open for a surprise! Come on, hurry, don't be scared! Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you", 
        vehicle: "Tesla Model 3",
        source: "Haroune Kechaoui (locataire)",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: false
    },
    {
        message: "i am panick", 
        vehicle: "Tesla Model X",
        source: "Ouarab Youcef (agent)",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: true
    },
    {
        message: "i am in panne", 
        vehicle: "Tesla Model Y",
        source: "Haroune Kechaoui (locataire)",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: false
    },
    {
        message: "git gud", 
        vehicle: "gerwaja",
        source: "Automatique",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: true
    },
    {
        message: "we see each other, we good, WE. SEE. EACH. OTHA!", 
        vehicle: "maruti",
        source: "Automatique",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: true
    },
    {
        message: "i am panick", 
        vehicle: "Tesla Model X",
        source: "Ouarab Youcef (agent)",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: true
    },
    {
        message: "i am in panne", 
        vehicle: "Tesla Model Y",
        source: "Haroune Kechaoui (locataire)",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: true
    },
    {
        message: "i am panick", 
        vehicle: "Tesla Model X",
        source: "Ouarab Youcef (agent)",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: true
    },
    {
        message: "i am in panne", 
        vehicle: "Tesla Model Y",
        source: "Haroune Kechaoui (locataire)",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: true
    },
    {
        message: "i am panick", 
        vehicle: "Tesla Model X",
        source: "Ouarab Youcef (agent)",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: true
    },
    {
        message: "i am in panne", 
        vehicle: "Tesla Model Y",
        source: "Haroune Kechaoui (locataire)",
        date: "April 20, 2021",
        time: "6:19 PM",
        seen: true
    },
];

function showMore(i) {
    var msg = document.getElementsByClassName("panne-notif-message")[i];
    var btn = document.getElementById("more"+i);
    var p = msg.getElementsByTagName("p")[0];
    if (msg.classList.contains("truncated")) {
        msg.classList.remove("truncated");
        p.classList.remove("truncated");
        btn.innerHTML = '<img class="chevron-bottom" alt="" />';
    } else {
        msg.classList.add("truncated");
        p.classList.add("truncated");
        btn.innerHTML = '<img class="chevron-right" alt="" />';
    }
}

function PannesComponent() {
    return (
        <div className="pannes-list-wrapper">
			<div className="pannes-list-header">
				<label className="pannes-list-title">Pannes</label>
				<button className="pannes-list-sort-btn" onClick={() => {
                    const sort = document.getElementsByClassName("pannes-list-sort")[0];
                    if (sort.classList.contains("hidden")) {
                        sort.classList.remove("hidden");
                    } else {
                        sort.classList.add("hidden");
                    }
                }}><img className="sort-svg" alt="" /> Ordonner</button>
				<div className="pannes-list-sort hidden">
					<ul>
						<li><input type="checkbox" id="sort-latest" /><label for="sort-latest">Plus récents</label></li>
						<li><input type="checkbox" id="sort-unseen" /><label for="sort-unseen">Non vues</label></li>
					</ul>
				</div>
				<div className="hl"></div>
			</div>
			<div className="pannes-list-body">
                {
                    data.map((e, i) =>
                    <div className="panne-notif-wrapper">
                        {
                            e.seen? <div className="panne-notif-seen"><div></div></div>
                            : <div className="panne-notif-unseen"><div></div></div>
                        }
                        <div className="panne-notif-body">
                            <div className="panne-notif-message truncated">
                                <p className="truncated">{e.message}</p>
                            </div>
                            <div className="panne-notif-source truncated">
                                <div>
                                    <label className="truncated">{e.vehicle}</label><br /> 
                                    <label className="truncated">{e.source}</label>
                                </div>
                            </div>
                            <div className="panne-notif-date truncated">
                                <div>
                                    <label className="truncated">{e.date}</label><br />
                                    <label className="truncated">{e.time}</label>
                                </div>
                            </div>
                            <div className="panne-notif-more">
                                <button id={"more"+i} onClick={() => {showMore(i)}}><img className="chevron-right" alt="" /></button>
                            </div>
                        </div>
                    </div>
                    )
                }
			</div>
		</div>
    )
}

export default PannesComponent
