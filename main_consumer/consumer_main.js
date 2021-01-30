//メインコンテンツ
//ホーム画面
let consumer_data = []; //配列の初期化
const home_page = {
    data: function () {
        return {
            data: consumer_data,
            errorMessage: '通信エラーが発生しました',
        };
    },
    template: `
        <div>
            <h2 class="home-title">ようこそ{{data[0].name}}さん</h2>
            <dl>
                <dt>累計相談件数</dt>
                <dd>{{data[0].cnt}}件</dd>
                <dt>累計代行依頼</dt>
                <dd>件</dd>
            </dl>
        </div>

    `,
    created: function () {
        axios
            .post('consumer_data.php')
            .then(function (res) {
                consumer_data.push(res.data);
                console.log(res.data);
                consumer_data = []; //配列の初期化
            })
            .catch(function () {
                console.log('通信エラー');
            });
    },
};
//販売員一覧画面
let salesperson_data = []; //販売員のデータ格納用
const salesperson_page = {
    data: function () {
        return {
            data: salesperson_data,
            errorMessage: '通信エラーが発生しました',
        };
    },
    template: `
        <div>
            <ul class="salesperson-list">
                <li v-for='salespersonData,index in data'>
                    <div class="salesperson-contnt">
                        <span>氏名：{{salespersonData[index].name}}</span>
                        <span>所属ショップ：{{salespersonData[index].shop}}</span>
                        <span>経験ショップ：{{salespersonData[index].experience}}</span>
                        <div class="jump-salesperson-page">
                            <span v-on:click="multipleMethods('salesperson_detail',salespersonData[index].id)">販売員ページへ</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    `,
    created: function () {
        axios
            .post('saleperson_data.php')
            .then(function (res) {
                salesperson_data.push(res.data);
                console.log(res.data);
                salesperson_data = []; //配列の初期化
            })
            .catch(function () {
                console.log('通信エラー');
            });
    },
    methods: {
        //2つの関数を実行する関数
        multipleMethods: function (page, id) {
            this.changeSalespersonDetail(page);
            this.salespersonId(id);
        },
        //販売員のIDを受け渡す関数
        salespersonId: function (id) {
            publicData.salesperson_id = id;
        },
        //ページ切り替え（販売員詳細ページ）の関数
        changeSalespersonDetail: function (page) {
            cotent.currentPage = page;
        },
    },
};
//相談一覧画面
let question_data = []; //相談のデータ格納用
const questions_page = {
    data: function () {
        return {
            data: question_data,
            // question_id: document.getElementById('question_id').text,
            errorMessage: '通信エラーが発生しました',
        };
    },
    template: `
        <div>
            <ul class="question-list" >
                <li v-for='questionData in data'>
                    <ul>
                        <li class='question-Area' v-for='questionDataItem,index in questionData'>
                            <div class='question-stateArea'>
                                <dl>
                                    <dt>回答</dt>
                                    <dd>{{questionDataItem.answers}}</dd>
                                </dl>
                            </div>
                            <div class='question-contentArea'>
                                <div class='question-title' v-on:click="multipleMethods('question_detail',questionDataItem.id)">
                                    {{questionDataItem.title}}
                                </div>
                                <div class='question-content'>
                                    {{questionDataItem.contents}}
                                </div>
                            </div>
                            <div class='question-date'>
                                <p>{{questionDataItem.created_at}}</p>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    `,
    created: function () {
        axios
            .post('question_data.php')
            .then(function (res) {
                question_data.push(res.data);
                console.log(question_data);
                question_data = []; //配列の初期化
            })
            .catch(function () {
                console.log('通信エラー');
            });
    },
    methods: {
        //2つの関数を実行する関数
        multipleMethods: function (page, id) {
            this.changeQuestionDetail(page);
            this.questionId(id);
        },
        //販売員のIDを受け渡す関数
        questionId: function (id) {
            // const question_id = $('#question_id').text();
            publicData.question_id = id;
        },
        //ページ切り替え（販売員詳細ページ）の関数
        changeQuestionDetail: function (page) {
            cotent.currentPage = page;
        },
    },
};
//相談投稿画面
const creat_question_page = {
    data: function () {
        return {
            title: null,
            contents: null,
            errorMessage: '通信エラーが発生しました',
        };
    },
    template: `
        <div class="question-post">
            <form>
                <fieldset class="post-questioncontent">
                    <div class="form-group question-item">
                        <input type="text" class="form-control" v-model="title" placeholder="相談のタイトルを１０文字以上１００文字未満で記入してください" >
                    </div>
                    <div class="form-group question-item">
                        <textarea class="form-control" v-model="contents" placeholder="相談の内容を５００文字未満で記入してください" rows="10"></textarea>
                    </div>
                    <div class="form-group question-item">
                        <button type="button" class="send-question form-control" v-on:click="creatQuestion"><i class="fas fa-edit"></i>相談する</button>
                    </div>
                </fieldset>
            </form>
        </div>
    `,
    methods: {
        creatQuestion: function () {
            const question_data = new URLSearchParams();
            question_data.append('title', this.title);
            question_data.append('contents', this.contents);
            axios
                .post('creat_question.php', question_data)
                .then(function (res) {
                    console.log(res);
                    alert('相談を投稿しました');
                    cotent.currentPage = 'questions';
                })
                .catch(function () {
                    console.log('通信エラー');
                });
        },
    },
};
//質問詳細画面
//回答内容表示用のコンポーネント
let answerContent_data = [];
const answerContent = {
    data: function () {
        return {
            data: answerContent_data,
            question_id: publicData.question_id,
        };
    },
    template: `
        <ul class="fistcycle">
            <li v-for='contentData in data'>
                <ul class="secondcycle">
                    <li  class='answers' v-for='answercontent in contentData'>
                        <div v-on:click="multipleMethods('salesperson_detail',answercontent.salesperson_id)">{{answercontent.name}}</div>
                        <span>{{answercontent.answer_content}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    `,
    created: function () {
        const question_id = new URLSearchParams();
        question_id.append('id', this.question_id);
        axios
            .post('answer_data.php', question_id)
            .then(function (res) {
                answerContent_data.push(res.data);
                console.log(answerContent_data);
                answerContent_data = []; //配列の初期化
            })
            .catch(function () {
                console.log('通信エラー');
            });
    },
    methods: {
        //2つの関数を実行する関数
        multipleMethods: function (page, id) {
            this.changeSalespersonDetail(page);
            this.salespersonId(id);
        },
        //販売員のIDを受け渡す関数
        salespersonId: function (id) {
            publicData.salesperson_id = id;
        },
        //ページ切り替え（販売員詳細ページ）の関数
        changeSalespersonDetail: function (page) {
            cotent.currentPage = page;
        },
    },
};
//選択された相談のデータ
let question_detaildata = []; //相談のデータ格納用
const question_detail_page = {
    data: function () {
        return {
            data: question_detaildata,
            question_id: publicData.question_id,
            errorMessage: '通信エラーが発生しました',
        };
    },
    template: `
        <div>
            <dl class="questions">
                <dt>
                    <div class="title">
                        {{data[0].title}}
                    </div>
                    <div class="date">
                        <p>投稿日：{{data[0].created_at}}</p>
                    </div>
                    <div class="state-solved" v-if="data[0].solved==1">
                        <p>解決済み</p>
                    </div>
                </dt>
                <div class="question-contents">
                    {{data[0].contents}}
                </div>
                <div class="content" id="answer_content">
                    <dd class="state">
                        <span class="state-contents">
                            <p>回答　</p>
                            <p v-if="data[0].cnt>0">{{data[0].cnt}}</p>
                            <p v-else>0</p>
                            <p>　件</p>
                        </span>
                    </dd>
                    <answer-content></answer-content>
                </div>

            </dl>
            <button type="button" class="solved" v-if="data[0].solved==0" v-on:click="solvedQuestion(data[0].id)">解決済み</button>
        </div>
    `,
    components: {
        'answer-content': answerContent,
    },
    created: function () {
        const question_id = new URLSearchParams();
        question_id.append('id', this.question_id);
        axios
            .post('question_detail_data.php', question_id)
            .then(function (res) {
                question_detaildata.push(res.data);
                console.log(question_detaildata);
                question_detaildata = []; //配列の初期化
            })
            .catch(function () {
                console.log('通信エラー');
            });
    },
    methods: {
        solvedQuestion: function (id) {
            const question_id = new URLSearchParams();
            question_id.append('id', id);
            axios
                .post('solved_question.php', question_id)
                .then(function (res) {
                    alert('解決済みになりました');
                    cotent.currentPage = 'questions';
                    console.log(res);
                })
                .catch(function () {
                    console.log('通信エラー');
                });
        },
    },
};

//販売員詳細画面
let salesperson_detaildata = []; //販売員のデータ格納用
const salesperson_detail_page = {
    data: function () {
        return {
            data: salesperson_detaildata,
            salesperson_id: publicData.salesperson_id,
            errorMessage: '通信エラーが発生しました',
        };
    },
    template: `
        <div>
            <div class="salesperson-detail-content">
                <div class="profile">
                    <img src="../img/IMG_5816.jpg" class="profile-img" width="300px" height="400px"/>
                    <dl>
                        <dt>自己紹介</dt>
                        <dd>{{this.data[0].name}}</dd>
                    </dl>
                    <button id="favorite" class="favorite-button">気になる販売員に登録</button>
                </div>
                <dl>
                    <dt>氏名</dt>
                    <dd>{{this.data[0].name}}</dd>
                    <dt>エリア</dt>
                    <dd>{{this.data[0].city}}</dd>
                    <dt>年齢</dt>
                    <dd>{{this.data[0].age}}</dd>
                    <dt>所属ショップ</dt>
                    <dd>{{this.data[0].shop}}</dd>
                    <dt>得意なテイスト・ブランド</dt>
                    <dd>{{this.data[0].name}}</dd>
                    <dt>回答回数</dt>
                    <dd>{{this.data[0].name}}</dd>
                    <dt>代行回数</dt>
                    <dd>{{this.data[0].name}}</dd>
                    <dt>評価</dt>
                    <dd>{{this.data[0].name}}</dd>
                </dl>
            </div>
        </div>
    `,
    created: function () {
        const salesperson_id = new URLSearchParams();
        salesperson_id.append('id', this.salesperson_id);
        axios
            .post('salesperson_detail_data.php', salesperson_id)
            .then(function (res) {
                salesperson_detaildata.push(res.data);
                // console.log(this.data);
                salesperson_detaildata = []; //配列の初期化
            })
            .catch(function () {
                console.log('通信エラー');
            });
    },
};
//画面の切り替え実行（トグルメニューのクリックに応じてメソッド発火）
const cotent = new Vue({
    data: {
        currentPage: 'home',
    },
    el: '#main-content',
    components: {
        home: home_page, //ホーム画面
        salesperson: salesperson_page, //販売員一覧
        questions: questions_page, //相談一覧
        creat_question: creat_question_page, //相談投稿
        salesperson_detail: salesperson_detail_page, //販売員詳細
        question_detail: question_detail_page, //相談詳細
    },
    methods: {
        changePage: function (page) {
            this.currentPage = page;
        },
    },
});
//コンポーネント間のデータ受け渡し用
const publicData = new Vue({
    data: {
        salesperson_id: null,
        question_id: null,
    },
});
