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
        <h2 class="home-title">ようこそ{{data[0].name}}さん</h2>
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
                            <span>販売員ページへ</span>
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
};
//相談一覧画面
let question_data = []; //相談のデータ格納用
const questions_page = {
    data: function () {
        return {
            data: question_data,
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
                                <div class='question-title'>
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
};
//プロフィール編集画面
const creat_question_page = {
    data: function () {
        return {
            title:null,
            contents:null,
            errorMessage: '通信エラーが発生しました',
        };
    },
    template: `
        <div class="question-post">
            <form>
                <fieldset class="question-content">
                    <div class="form-group question-item">
                        <input type="text" name="question-title" class="form-control" v-model="title" placeholder="相談のタイトルを１０文字以上１００文字未満で記入してください" >
                    </div>
                    <div class="form-group question-item">
                        <textarea class="form-control" name="question-contents" v-model="contents" rows="10"></textarea>
                        <input type="hidden" name="uid" value="<?=$uid?>">
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
            axios
                .post('creat_question.php',{
                    title:this.title,
                    contents:this.contents
                })
                .then(function (res) {
                    console.log(res)
                    alert('相談を投稿しました')
                })
                .catch(function () {
                    console.log('通信エラー');
                });
        },
    },
};
//画面の切り替え実行（トグルメニューのクリックに応じてメソッド発火）
const cotent = new Vue({
    data: {
        currentPage: 'home',
    },
    el: '#main-content',
    components: {
        home: home_page,
        salesperson: salesperson_page,
        questions: questions_page,
        creat_question: creat_question_page,
    },
    methods: {
        changePage: function (page) {
            this.currentPage = page;
        },
    },
});
