angular.module('starter.controllers', [])

//总控制器
.controller('homeCtrl', function(
    $scope, $rootScope, $ionicHistory, $state, $ionicModal,
    $ionicScrollDelegate, $ionicPopup, $ionicLoading){

    //判断是否已经登录
    $scope.getDataForHome = function(){
        if(localStorage.length == 0){
            $scope.openLoginModal();
        }
        console.log(localStorage);
    };

    //弹出提示框
    $scope.showAlert = function(title, template){
        var alertPopup = $ionicPopup.alert({
            title: title,
            template: template
        });
    };

    //加载时候的蒙版层
    $scope.loadingShow = function() {
        $ionicLoading.show({
            template: '<ion-spinner icon="crescent"></ion-spinner>'
        });
    };
    $scope.loadingHide = function(){
        $ionicLoading.hide();
    };


    //* * * * * * * * * 问题详情
    $ionicModal.fromTemplateUrl('templates/section-question.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.sectionQuestionModal = modal;
    });

    $scope.openQuestionModal = function(id) {
        $scope.selectedId = id;
        $scope.sectionQuestionModal.show();
    };

    $scope.closeQuestionModal = function() {
        $scope.sectionQuestionModal.hide();
    };

    //* * * * * * * * * 添加问题
    $ionicModal.fromTemplateUrl('templates/section-quiz.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.sectionQuizModal = modal;
    });

    $scope.openQuizModal = function() {
        $scope.sectionQuizModal.show();
        var editor = UM.getEditor('myEditor',{
            toolbar:['image'],
            //focus时自动清空初始化时的内容
            autoClearinitialContent:true,
            //关闭字数统计
            wordCount:false,
            //关闭elementPath
            elementPathEnabled:false,
            //默认的编辑区域高度
            initialFrameHeight:300,
            //是否允许自动变高
            autoHeightEnabled:false
            //更多其他参数，请参考umeditor.config.js中的配置项
        });
    };

    $scope.closeQuizModal = function() {
        $scope.sectionQuizModal.hide();
    };

    //* * * * * * * * * 搜索
    $ionicModal.fromTemplateUrl('templates/section-search.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.sectionSearchModal = modal;
    });

    $scope.openSearchModal = function() {
        $scope.sectionSearchModal.show();
    };

    $scope.closeSearchModal = function() {
        $scope.sectionSearchModal.hide();
    };

    //* * * * * * * * * 登录
    $ionicModal.fromTemplateUrl('templates/section-login.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.sectionLogin = modal;
    });
    $scope.openLoginModal = function() {
        $scope.sectionLogin.show();
    };

    $scope.closeLoginModal = function() {
        $scope.sectionLogin.hide();
    };

    //* * * * * * * * * 注册
    $ionicModal.fromTemplateUrl('templates/section-sign.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.sectionSign = modal;
    });
    $scope.openSignModal = function() {
        $scope.sectionSign.show();
        $scope.buttonText_sign = '发送验证码'
    };

    $scope.closeSignModal = function() {
        $scope.sectionSign.hide();
    };

    //* * * * * * * * *重置密码
    //输入账号
    $ionicModal.fromTemplateUrl('templates/section-fetchPsw-1.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.sectionfetchPsw_1 = modal;
    });
    $scope.openFetchPsw_1Modal = function() {
        $scope.sectionfetchPsw_1.show();
    };

    $scope.closeFetchPsw_1Modal = function() {
        $scope.sectionfetchPsw_1.hide();
    };
    //输入验证码
    $ionicModal.fromTemplateUrl('templates/section-fetchPsw-2.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.sectionfetchPsw_2 = modal;
    });
    $scope.openFetchPsw_2Modal = function() {
        $scope.sectionfetchPsw_2.show();
        $scope.buttonText_fetch = "发送验证码";
    };

    $scope.closeFetchPsw_2Modal = function() {
        $scope.sectionfetchPsw_2.hide();
    };
    //输入重置密码
    $ionicModal.fromTemplateUrl('templates/section-fetchPsw-3.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.sectionfetchPsw_3 = modal;
    });
    $scope.openFetchPsw_3Modal = function() {
        $scope.sectionfetchPsw_3.show();
    };

    $scope.closeFetchPsw_3Modal = function() {
        $scope.sectionfetchPsw_3.hide();
    };


    //* * * * * * * * * 个人主页 —— 梧桐圈协议
    $ionicModal.fromTemplateUrl('templates/section-homepage-agreement.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.sectionAgreement = modal;
    });
    $scope.openAgreementModal = function() {
        $scope.sectionAgreement.show();
    };

    $scope.closeAgreementModal = function() {
        $scope.sectionAgreement.hide();
    };

    //* * * * * * * * * 个人主页 —— 等我回答
    $ionicModal.fromTemplateUrl('templates/section-homepage-answer.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.sectionAnswer = modal;
    });
    $scope.openAnswerModal = function() {
        $scope.sectionAnswer.show();
    };

    $scope.closeAnswerModal = function() {
        $scope.sectionAnswer.hide();
    };

    //* * * * * * * * * 个人主页 —— 问题反馈
    $ionicModal.fromTemplateUrl('templates/section-homepage-feedback.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.sectionFeedback = modal;
    });
    $scope.openFeedbackModal = function() {
        $scope.sectionFeedback.show();
    };

    $scope.closeFeedbackModal = function() {
        $scope.sectionFeedback.hide();
    };

    //* * * * * * * * * 个人主页 —— 我的粉丝
    $ionicModal.fromTemplateUrl('templates/section-homepage-followers.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.sectionFollower = modal;
    });
    $scope.openFollowerModal = function() {
        $scope.sectionFollower.show();
    };

    $scope.closeFollowerModal = function() {
        $scope.sectionFollower.hide();
    };

    //* * * * * * * * * 个人主页 —— 我的收藏
    $ionicModal.fromTemplateUrl('templates/section-homepage-marked.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.sectionMark = modal;
    });
    $scope.openMarkModal = function() {
        $scope.sectionMark.show();
    };

    $scope.closeMarkModal = function() {
        $scope.sectionMark.hide();
    };

    //* * * * * * * * * 个人主页 —— 我的提问
    $ionicModal.fromTemplateUrl('templates/section-homepage-question.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.sectionQuestion = modal;
    });
    $scope.openMyQuestionModal = function() {
        $scope.sectionQuestion.show();
    };

    $scope.closeMyQuestionModal = function() {
        $scope.sectionQuestion.hide();
    };

    //* * * * * * * * * 个人主页 —— 设置
    $ionicModal.fromTemplateUrl('templates/section-homepage-setting.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.sectionSetting = modal;
    });
    $scope.openSettingModal = function() {
        $scope.sectionSetting.show();
    };

    $scope.closeSettingModal = function() {
        $scope.sectionSetting.hide();
    };

    //* * * * * * * * * 个人主页 —— 我的关注
    $ionicModal.fromTemplateUrl('templates/section-homepage-watch.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.sectionWatch = modal;
    });
    $scope.openWatchModal = function() {
        $scope.sectionWatch.show();
    };

    $scope.closeWatchModal = function() {
        $scope.sectionWatch.hide();
    };

    //* * * * * * * * * 个人主页 —— 我的回答
    $ionicModal.fromTemplateUrl('templates/section-homepage-myAnswer.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.sectionMyAnswer = modal;
    });
    $scope.openMyAnswerModal = function() {
        $scope.sectionMyAnswer.show();
    };

    $scope.closeMyAnswerModal = function() {
        $scope.sectionMyAnswer.hide();
    };

    //* * * * * * * * * 个人主页 —— 编辑我的资料
    $ionicModal.fromTemplateUrl('templates/section-homepage-EditInfo.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.sectionEditInfo = modal;
    });
    $scope.openEditInfoModal = function() {
        $scope.sectionEditInfo.show();
    };

    $scope.closeEditInfoModal = function() {
        $scope.sectionEditInfo.hide();
    };

})

//圈子控制器
.controller('circleCtrl', function($scope, $state, $stateParams, $ionicHistory) {

})

//榜单控制器
.controller('postCtrl', function($scope, Chats) {

})

//实务控制器
.controller('concreteCtrl', function($scope) {

})

//我的控制器
.controller('homepageCtrl', function($scope, userInfoService) {
    console.log('个人主页控制器');

    //登录成功之后返回赋值
    $scope.$on('userRefreshed',function(){
        $scope.userInfo = [{
            account: userInfoService.userInfo[0].account,
            nickname: userInfoService.userInfo[0].nickname,
            avatar: userInfoService.userInfo[0].avatar,
            motto: userInfoService.userInfo[0].motto,
            markedNum: userInfoService.userInfo[0].markedNum,
            myAnswerNum: userInfoService.userInfo[0].myAnswerNum,
            waitForAnswerNum: userInfoService.userInfo[0].waitForAnswerNum,
            myFollowerNum: userInfoService.userInfo[0].myFollowerNum,
            myQuesNum: userInfoService.userInfo[0].myQuesNum
        }];
        console.log($scope.userInfo);
    });

    //根据缓存赋值
    if(!localStorage.length == 0) {
        $scope.userInfo = [{
            account: localStorage.account,
            nickname: localStorage.nickname,
            avatar: localStorage.avatar,
            motto: localStorage.motto,
            markedNum: localStorage.markedNum,
            myAnswerNum: localStorage.myAnswerNum,
            waitForAnswerNum: localStorage.waitForAnswerNum,
            myFollowerNum: localStorage.myFollowerNum,
            myQuesNum: localStorage.myQuesNum
        }];
        console.log($scope.userInfo);
    };

    //是否有新的未查看回答邀请
    $scope.newAnswerRequest = function(){
        if ($scope.userInfo[0].waitForAnswerNum == 0) {
            return false;
        }else {
            return true;
        }
    };

    //刷新个人主页信息
    $scope.doRefresh = function(){

    };
})

//圈子-推荐控制器
.controller('circleCommendCtrl', function($scope, $state, $ionicModal, $http){
    console.log('圈子-推荐控制器');
    var fetchData = function(tag){
        var url = mainServer + 'remd/getQuestionAnswer';
        $scope.noData = false;
        $http.post(url).success(function(data){
            if(tag == 'refresh'){
                $scope.$broadcast('scroll.refreshComplete');
            }
            switch (data.resultCode) {
                case 1000: {
                    $scope.dataArray = data.result;
                    break;
                }
                case 1001: {
                    $scope.dataArray = [];
                    console.log('没有数据');
                    $scope.noData = true;
                    break;
                }
                default: {
                    $scope.dataArray = [];
                    console.log("无数据");
                    $scope.noData = true;
                    break;
                }
            }
        }).error(function(error){
            console.log(error);
            $scope.dataArray = [];
            $scope.noData = true;
            $scope.$broadcast('scroll.refreshComplete');
        })
    };

    fetchData();

    $scope.doRefresh = function(){
        fetchData('refresh');
    }
})

//圈子-动态控制器
.controller('circleCampaignCtrl', function($scope, $http){
    console.log('圈子-动态控制器');

    var fetchData = function(tag){
        $scope.unSign = false;
        $scope.noData = false;
        $scope.unWatch = false;

        if (localStorage.length == 0){
            console.log("还没有登录");
            $scope.dataArray = [];
            $scope.unSign = true;
            $scope.$broadcast('scroll.refreshComplete');
        }else {
            var url = mainServer + "latest/trend?userId=" + localStorage.userId;
            $http.post(url).success(function(data){
                if(tag == 'refresh'){
                    $scope.$broadcast('scroll.refreshComplete');
                }
                switch (data.resultCode) {
                    case '1000': {
                        $scope.dataArray = data.trends;
                        console.log($scope.dataArray);
                        break;
                    }
                    case '1001': {
                        $scope.dataArray = [];
                        console.log('关注的用户暂无内容');
                        $scope.noData = true;
                        break;
                    }
                    case '1002': {
                        $scope.dataArray = [];
                        console.log('当前用户暂未关注其他用户');
                        $scope.unWatch = true;
                        break;
                    }
                    default: {
                        $scope.dataArray = [];
                        console.log("无数据");
                        $scope.noData = true;
                        break;
                    }
                }
            }).error(function(error){
                console.log(error);
                $scope.dataArray = [];
                $scope.noData = true;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
    };

    fetchData();

    $scope.doRefresh = function(){
        fetchData('refresh');
    }
})

//圈子-最新控制器
.controller('circleNewCtrl', function($scope, $http){
    console.log('圈子-最新控制器');
    var fetchData = function(tag){
        $scope.noData = false;
        var url = mainServer + "latest/latestList";
        $http.post(url).success(function(data){
            if(tag == 'refresh'){
                $scope.$broadcast('scroll.refreshComplete');
            }
            switch (data.resultCode) {
                case '1000': {
                    $scope.dataArray = data.result;
                    console.log($scope.dataArray);
                    break;
                }
                case '1001': {
                    $scope.dataArray = [];
                    console.log("没有数据");
                    $scope.noData = true;
                    break;
                }
                default: {
                    $scope.dataArray = [];
                    console.log("没有数据");
                    $scope.noData = true;
                    break;
                }
            }
        }).error(function(error){
            $scope.dataArray = [];
            console.log(error);
            $scope.noData = true;
            $scope.$broadcast('scroll.refreshComplete');
        })
    };

    fetchData();

    $scope.doRefresh = function(){
        fetchData("refresh");
    }
})

//圈子-关注控制器
.controller('circleRegardCtrl', function($scope, $timeout, $http){
    console.log('圈子-关注控制器');

    var fetchData = function(tag){
        //没有数据时候的提示
        $scope.unSign = false;
        $scope.unWatch = false;
        $scope.noData = false;

        //未登录
        if (localStorage.length == 0){
            $scope.dataArray = [];
            console.log("没有登录");
            $scope.unSign = true;
            $scope.$broadcast('scroll.refreshComplete');
        }else {
            var url = mainServer + "latest/myAttentionList?userId=" + localStorage.userId;
            $http.post(url).success(function(data){
                if (tag == 'refresh'){
                    $scope.$broadcast('scroll.refreshComplete');
                }
                switch (data.resultCode) {
                    case '1000': {
                        $scope.dataArray = data.result;
                        console.log($scope.dataArray);
                        break;
                    }
                    case '1001': {
                        $scope.dataArray = [];
                        console.log("没有数据");
                        $scope.noData = true;
                        break;
                    }
                    case '1002': {
                        $scope.dataArray = [];
                        console.log("没有关注的问题");
                        $scope.unWatch = true;
                        break;
                    }
                    default: {
                        $scope.dataArray = [];
                        console.log("没有数据");
                        $scope.noData = true;
                        break;
                    }
                }
            }).error(function(error){
                console.log(error);
                $scope.dataArray = [];
                console.log("没有数据");
                $scope.noData = true;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
    };

    fetchData();

    $scope.doRefresh = function(){
        fetchData('refresh');
    };

    $scope.loadMoreData = function(){
        $scope.$broadcast('scroll.infiniteScrollComplete');
    };
})

//搜索圈子界面 控制器
.controller('sectionSearchCtrl', function($scope, modalScrollDelegate, $http){

    $scope.$on('modal.shown', function() {
        if($scope.sectionSearchModal.isShown()){
            $scope.isQuestion = true;
            $scope.isUser = false;
        }
    });

    var contentUrl = mainServer + 'search/searchContent?content=';
    var userUrl = mainServer + 'search/searchUser?content=';

    //查询问答结果
    var searchForContent = function(){
        var content = document.getElementById('circleSearchContent').value;
        $http.post(contentUrl + content).success(function(data){
            console.log(data);
        }).error(function(error){
            console.log(error)
        })
    };

    //查询用户结果
    var searchForUser = function(){
        var content = document.getElementById('circleSearchContent').value;
        $http.post(userUrl + content).success(function(data){
            console.log(data);
        }).error(function(error){
            console.log(error)
        })
    };

    $scope.searchResult = function(isQuestion){
        if(isQuestion){
            searchForContent();
        }else {
            searchForUser();
        }
    };

    var toTop = function(){
        modalScrollDelegate.$getByHandle('searchModal').scrollTop();
    };

    $scope.switchResult = function(target) {
        toTop();
        switch (target) {
            case 'question': {
                $scope.isQuestion = true;
                $scope.isUser = false;
                $scope.searchResult(true);
                break;
            }
            case 'user': {
                $scope.isQuestion = false;
                $scope.isUser = true;
                $scope.searchResult(false);
                break;
            }
            default: {
                $scope.isQuestion = true;
                $scope.isUser = false;
                $scope.searchResult(true);
                break;
            }
        }
    };
})

//提问界面 控制器
.controller('sectionQuizCtrl', function($scope){
})

//问题详情页面 控制器
.controller('sectionQuestionCtrl', function($scope){
    $scope.detailMore  =false;
    $scope.showMoreDetail = function(){
        $scope.detailMore = !$scope.detailMore;
    }
})

//登录界面 控制器
.controller('sectionLoginCtrl', function($scope, $rootScope, $ionicHistory, $http, userInfoService){
    //检测用户名规则
    var ruleUsername = function(username){
        var reg1=/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i;
        var reg2=/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
        var phone = reg1.test(username);
        var email = reg2.test(username);
        if(!phone && !email){
            $scope.showAlert('错误提示','账户名必须为邮箱或手机号');
        }else {
            return true;
        }
    };

    //手机邮箱登录
    $scope.myLogin = function() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        //账户密码不能为空
        if (!username || !password){
            $scope.showAlert('错误提示', '账户或密码不能为空');
        }
        //账户必须为邮箱或者手机号
        else if (!ruleUsername(username)){

        }else {
            //$scope.closeLoginModal();
            ////传递登录的用户信息到 userInfoService
            //userInfoService.refreshUserInfo(username);
            //提交账号密码到服务端
            $scope.loadingShow();
            var url = mainServer + "user/login?account=" + username + "&password=" + password;
            $http.post(url).success(function(data){
                $scope.loadingHide();
                console.log(data);
                var resultCode = data.resultCode;
                console.log(resultCode);
                switch (resultCode) {
                    case '1000': {
                        console.log('登录成功');
                        $scope.closeLoginModal();
                        userInfoService.refreshUserInfo(data);
                        break;
                    }
                    case '1007': {
                        $scope.showAlert('错误提示','用户名或密码错误');
                        break;
                    }
                    default: {
                        $scope.showAlert('错误提示','发生未知错误');
                        break;
                    }
                }
            }).error(function(error){
                $scope.loadingHide();
                console.log(error);
                $scope.showAlert('糟糕', '连接不上啦');
            })
        }
    };

    //忘记手机/邮箱密码
    $scope.forget = function(){

    };

    //第三方微博登录
    $scope.loginWeibo = function(){

    };

    //第三方QQ登录
    $scope.loginQQ = function(){

    };

    //第三方微信登录
    $scope.loginWeChat = function(){
        device.getInfo(function(data){
            console.log(data);
        },function(error){
            console.log(error)
        });
    };

    //关闭登录界面
    $scope.loginGoback = function(){
        $ionicHistory.goBack();
        $scope.closeLoginModal();
    };
})

//注册界面控制器
.controller('sectionSignCtrl', function($scope, $http, $ionicHistory, $interval){
    var username, password, verificationCode;
    //验证用户名是否合格 账户:邮箱或者手机号
    $scope.ruleUsername = function(){
        var reg1=/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i;
        var reg2=/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
        username = document.getElementById('setUsername').value;
        var phone = reg1.test(username);
        var email = reg2.test(username);
        if(!phone && !email){
            $scope.showAlert('错误提示','账户名必须为邮箱或手机号');
            //document.getElementById('usernamePoint').innerText = '账户名必须为邮箱或手机号';
        }else {
            //document.getElementById('usernamePoint').innerText = '';
            return true;
        }
    };

    //验证密码是否合格 密码:6-12位数字字母组合
    $scope.rulePassword = function(){
        var reg =/(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,}$/;
        password = document.getElementById('setPassword').value;
        if(!reg.test(password)){
            $scope.showAlert('验证码发送成功','须六位以上数字字母组合');
            //document.getElementById('passwordPoint').innerText = '须六位以上数字字母组合';
        }else {
            //document.getElementById('passwordPoint').innerText = '';
            return true;
        }
    };

    //获取验证码
    $scope.verification = function(){
        username = document.getElementById('setUsername').value;
        password = document.getElementById('setPassword').value;
        //账户和密码必须符合规则
        if($scope.ruleUsername() && $scope.rulePassword()){
            //重发验证码倒计时 60秒
            var button = document.getElementById("fetchCode");
            var n = 10;
            var interval = $interval(function(){
                if (n>0) {
                    button.disabled = true;
                    $scope.buttonText_sign = '重发 ' + (n--);
                    //console.log(n);
                } else {
                    button.disabled = false;
                    $scope.buttonText_sign = '发送验证码';
                    $interval.cancel(interval);
                    console.log("可以重发了")
                }
            }, 1000);

            //获取验证码
            //提交账号密码到服务端
            var url = mainServer + "user/beforeReg?account=" + username + "&password=" + password;
            $http.post(url).success(function(data){
                //console.log(data);
                var resultCode = data.resultCode;
                console.log(resultCode);
                switch (resultCode) {
                    case '1000': {
                        $scope.showAlert('验证码发送成功','请注意查收验证码');
                        break;
                    }
                    case '1005': {
                        $scope.showAlert('该用户已注册','请勿重复注册');
                        break;
                    }
                    default: {
                        $scope.showAlert('错误提示','发生未知错误');
                        break;
                    }
                }
            }).error(function(error){
                console.log(error);
                $scope.showAlert('错误', error);
            })
        }else {
            return null;
        }
    };

    //注册
    $scope.signup = function(){
        username = document.getElementById('setUsername').value;
        password = document.getElementById('setPassword').value;
        verificationCode = document.getElementById('verificationCode').value;
        //验证码不能为空
        if (!verificationCode) {
            $scope.showAlert('错误提示', '验证码不能为空');
        }
        //账户和密码必须符合规则
        else if (!$scope.ruleUsername() || !$scope.rulePassword()){
            return null;
        }else {
            //提交账号密码和验证码到服务端
            var url = mainServer + "user/register?account=" + username + "&password=" + password + "&valiCode=" + verificationCode;
            $http.post(url).success(function(data){
                var resultCode = data.resultCode;
                console.log(resultCode);
                switch (resultCode){
                    case '1000': {
                        $scope.showAlert('注册成功', '去登陆~');
                        break;
                    }
                    case '1006': {
                        $scope.showAlert('错误提示', '验证码错误');
                        break;
                    }
                    case '1007': {
                        $scope.showAlert('错误提示', '系统错误');
                        break;
                    }
                    case '1009': {
                        $scope.showAlert('错误提示', '验证码已过期，请重新获取');
                        break;
                    }
                    //default: {
                    //    $scope.showAlert('错误提示','发生未知错误');
                    //    break;
                    //}
                }
            }).error(function(error){
                console.log(error);
                $scope.showAlert('错误', error);
            })
        }
    };
})

//找回密码界面控制器
.controller('sectionFetchCtrl', function($scope, $interval){
    //重发验证码
    var reFetchCode = function(n){

    };

    //输入账号 下一步
    $scope.nextStep_1 = function(){
        $scope.openFetchPsw_2Modal();
    };

    //重发验证码
    $scope.reFetch = function(){
        var n = 10;
        var button = document.getElementById("reFetchButton");
        var interval = $interval(function(){
            if (n>0) {
                button.disabled = true;
                $scope.buttonText_fetch = '重发 ' + (n--);
            } else {
                button.disabled = false;
                $scope.buttonText_fetch = '发送验证码';
                $interval.cancel(interval);
                console.log("可以重发了")
            }
        }, 1000);
    };
    //输入验证码 下一步
    $scope.nextStep_2 = function(){
        $scope.openFetchPsw_3Modal();
    };
    //完成修改密码
    $scope.fetchFinish = function(){
        $scope.closeFetchPsw_1Modal();
        $scope.closeFetchPsw_2Modal();
        $scope.closeFetchPsw_3Modal();
    }
})

//问题反馈界面控制器
.controller('sectionFeedbackCtrl', function($scope){
    $scope.output = function(){
        console.log(document.getElementById("getImage").value);
    }
})

//个人主页-我的问题
.controller('sectionHomepageQuestionCtrl', function($scope, modalScrollDelegate, $http){

    $scope.avatar = localStorage.avatar;

    var fetchAllQuestion = function(){
        var allUrl = mainServer + 'question/queryQuestion?userId=' + localStorage.userId;
        $http.post(allUrl).success(function(data){
            switch (data.resultCode) {
                case '1000': {
                    $scope.dataArray = data.result;
                    console.log($scope.dataArray);
                    break;
                }
                case '1001': {
                    $scope.dataArray = [];
                    console.log("没有数据");
                    break;
                }
                default: {
                    $scope.dataArray = [];
                    console.log("没有数据");
                    break;
                }
            }
        }).error(function(error){
            console.log(error);
            $scope.dataArray = [];
        });
    };

    var fetchNewAnswer = function(){
        var newUrl = mainServer + 'question/getUpdQuestion?userId=' + localStorage.userId;
        $http.post(newUrl).success(function(data){
            switch (data.resultCode) {
                case '1000': {
                    $scope.dataArray = data.result;
                    console.log($scope.dataArray);
                    break;
                }
                case '1001': {
                    $scope.dataArray = [];
                    console.log("没有数据");
                    break;
                }
                default: {
                    $scope.dataArray = [];
                    console.log("没有数据");
                    break;
                }
            }
        }).error(function(error){
            console.log(error);
            $scope.dataArray = [];
        })
    };

    $scope.$on('modal.shown', function() {
        if($scope.sectionQuestion.isShown()){
            $scope.allQuestion = true;
            $scope.newAnswer = false;
            fetchAllQuestion();
        }
    });

    var toTop = function(){
        modalScrollDelegate.$getByHandle('homepageQuestion').scrollTop();
    };

    $scope.switchResult = function(target) {
        toTop();
        switch (target) {
            case 'allQuestion': {
                $scope.allQuestion = true;
                $scope.newAnswer = false;
                fetchAllQuestion();
                break;
            }
            case 'newAnswer': {
                $scope.allQuestion = false;
                $scope.newAnswer = true;
                fetchNewAnswer();
                break;
            }
            default: {
                $scope.allQuestion = true;
                $scope.newAnswer = false;
                break;
            }
        }
    };
})

//个人主页 我的收藏
.controller('sectionHomepageMarkCtrl', function($scope, $http){

    var fetchData = function() {
        var url = mainServer + 'collect/getCollect?userId=' + localStorage.userId;
        $http.post(url).success(function(data){
            switch (data.resultCode) {
                case '1000': {
                    $scope.dataArray = data.result;
                    console.log($scope.dataArray);
                    break;
                }
                case '1001': {
                    $scope.dataArray = [];
                    console.log("没有数据");
                    break;
                }
                default: {
                    $scope.dataArray = [];
                    console.log("没有数据");
                    break;
                }
            }
        }).error(function(error){
            console.log(error);
            $scope.dataArray = [];
        })
    };

    $scope.$on('modal.shown', function() {
        if($scope.sectionMark.isShown()){
            fetchData();
        }
    });
})

//个人主页 我的回答
.controller('sectionHomepageAnswerCtrl', function($scope, $http){

    var fetchData = function() {
        var url = mainServer + 'question/queryInviteAnswers?userId=' + localStorage.userId;
        $http.post(url).success(function(data){
            switch (data.resultCode) {
                case '1000': {
                    $scope.dataArray = data.result;
                    console.log($scope.dataArray);
                    break;
                }
                case '1001': {
                    $scope.dataArray = [];
                    console.log("没有数据");
                    break;
                }
                default: {
                    $scope.dataArray = [];
                    console.log("没有数据");
                    break;
                }
            }
        }).error(function(error){
            console.log(error);
            $scope.dataArray = [];
        })
    };

    $scope.$on('modal.shown', function() {
        if($scope.sectionAnswer.isShown()){
            fetchData();
        }
    });
})

//个人主页 我的关注
.controller('sectionHomepageWatchCtrl', function($scope, modalScrollDelegate){
    $scope.$on('modal.shown', function() {
        if($scope.sectionWatch.isShown()){
            $scope.isTopic = true;
            $scope.isUser = false;
        }
    });

    var toTop = function(){
        modalScrollDelegate.$getByHandle('homepageWatch').scrollTop();
    };

    $scope.switchResult = function(tag){
        toTop();
        switch (tag) {
            case 'topic': {
                $scope.isTopic = true;
                $scope.isUser = false;
                break;
            }
            case 'user': {
                $scope.isTopic = false;
                $scope.isUser = true;
                break;
            }
            default: {
                $scope.isTopic = true;
                $scope.isUser = false;
                break;
            }
        }
    }
})

//个人主页 我的回答
.controller('sectionHomepageMyAnswerCtrl', function($scope){

})

//个人主页 编辑个人资料
.controller('sectionHomepageEditInfoCtrl', function($scope){

});



