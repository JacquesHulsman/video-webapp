class userLogin extends ui {
    constructor() {
        super();
        this.cssClass = "w-full"
        this.userName = '';
    }

    get html() {
        return `
        <div class="flex flex-col items-center w-full">
            <span id="@{_userName}" style="display: none;">@{userName}</span>
            <button id="@{_login}" type="button" style="display: none;" class="m-4 rounded bg-slate-400 hover:bg-slate-300 h-12 w-48 max-w-full text-slate-800 font-bold py-2 px-4">
                <div class="w-max inline-flex items-center align-middle">
                    <div class="icon-[material-symbols--login-rounded] h-6 w-6 mr-2"></div>
                    <span class="font-sans">Login</span>
                </div>
            </button>
            <button id="@{_logout}" type="button" style="display: none;" class="m-4 rounded bg-slate-400 hover:bg-slate-300 h-12 w-48 max-w-full text-slate-800 font-bold py-2 px-4">
                <div class="w-max inline-flex items-center align-middle">
                    <div class="icon-[material-symbols--logout-rounded] h-6 w-6 mr-2"></div>
                    <span class="font-sans">Logout</span>
                </div>
            </button>
        </div>
        `;
    }

    Init() {
        this.showLogin(this.userName == '');
        this.on('userName', val => {
            this.showLogin(val == '');
        });

        this._login.addEventListener('click', e => {
            window.location.href = '/login';
        });

        this._logout.addEventListener('click', e => {
            window.location.href = '/logout';
        });
    }

    /**
     * Show login/logout
     * @param {*} login - if true, show login, else show logout
     */
    showLogin(login) {
        if (login) {
            this._logout.style.display = "none";
            this._login.style.display = "block";
            this._userName.style.display = "none";
        } else {
            this._login.style.display = "none";
            this._userName.style.display = "block";
            this._logout.style.display = "block";
        }
    }
}