//--------------------------------ANIMATION 7-------------------------------------//

let checkerboard = document.querySelector(".checkerboard");
createCards();

function createCards() {
	for (let i = 0; i < 45; i++) {
		let div = document.createElement("div");
		div.className = "flipcard_container";
		div.innerHTML = `
        <div class="animation_container block centered">
        <div class="card_front absolute">
            <img
                class="duck5"
                src="https://e7.pngegg.com/pngimages/242/820/png-clipart-red-and-yellow-question-mark-illustration-question-mark-icon-question-mark-3d-computer-graphics-text.png"
                alt=""
            />
        </div>
        <div class="card_back absolute">
            <img
                class="duck5"
                src="https://e7.pngegg.com/pngimages/644/738/png-clipart-yellow-duck-toy-plastic-duck-animals-ducks-thumbnail.png"
                alt=""
            />
        </div>
        <div class="frame_top absolute"></div>
        <div class="frame_bottom absolute"></div>
        <div class="frame_left absolute"></div>
        <div class="frame_right absolute"></div>
    </div>
        `;
		checkerboard.appendChild(div);
	}
}

//--------------------------------ANIMATION 8-------------------------------------//

let checkerboard8 = document.querySelector(".checkerboard8");
createCards8();

function createCards8() {
	for (let i = 0; i < 66; i++) {
		let div = document.createElement("div");
		div.className = "flipcard_container";
		div.innerHTML = `
        <div class="animation_container block centered">
        <div class="card_front absolute">
            <img
                class="duck5"
                src="https://e7.pngegg.com/pngimages/242/820/png-clipart-red-and-yellow-question-mark-illustration-question-mark-icon-question-mark-3d-computer-graphics-text.png"
                alt=""
            />
        </div>
        <div class="card_back absolute">
            <img
                class="duck5"
                src="https://e7.pngegg.com/pngimages/644/738/png-clipart-yellow-duck-toy-plastic-duck-animals-ducks-thumbnail.png"
                alt=""
            />
        </div>
        <div class="frame_top absolute"></div>
        <div class="frame_bottom absolute"></div>
        <div class="frame_left absolute"></div>
        <div class="frame_right absolute"></div>
    </div>
        `;
		checkerboard8.appendChild(div);
	}
}
