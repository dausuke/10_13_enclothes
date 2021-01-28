//ヘッダー
var consumer_header = {
    template: `
        <div>
            <p>enclothes</p>
            <div class="action">
                <div class="signout" v-on:click="signout"><i class="fas fa-sign-out-alt"></i>ログアウト</div>
            </div>
        </div>
    `,
    methods: {
        signout: function () {
            window.location.href = '../signout.php';
        },
    },
};
const header = new Vue({
    el: '#headerContent',
    components: {
        'headre-content': consumer_header,
    },
});
