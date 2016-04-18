angular.module('starter.services', [])

.service('modalScrollDelegate', function($ionicScrollDelegate){
  var custom = {
    $getByHandle: function(name) {
      var instances = $ionicScrollDelegate.$getByHandle(name)._instances;
      return instances.filter(function(element) {
        return (element['$$delegateHandle'] == name);
      })[0];
    }
  };

  return custom;
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})


//homePage页面 个人信息刷新
.factory('userInfoService', function($rootScope){
  var service = {};
  service.userInfo = [];

  service.refreshUserInfo = function(user){

    //缓存用户ID
    localStorage.userId = user.result.id;
    //缓存用户账户
    localStorage.account = user.result.account;
    //缓存用户昵称
    localStorage.nickname = user.result.nickname;
    //缓存用户个性签名
    localStorage.motto = user.result.sign;
    //缓存用户头像
    localStorage.avatar = user.result.head_img;
    //等我回答的数量
    localStorage.waitForAnswerNum = user.myWaitAnsCount;
    //我的问题的数量
    localStorage.myQuesNum = user.myQuesCount;
    //我的粉丝数
    localStorage.myFollowerNum = user.myFunsCount;
    //我的答案数
    localStorage.myAnswerNum = user.myAnsCount;
    //我的收藏数
    localStorage.markedNum = user.myCollectCount;

    //用户信息
    this.userInfo = [{
      account: user.result.account,
      nickname: user.result.nickname,
      avatar: user.result.head_img,
      motto: user.result.sign,
      userSign: user.result.sign,
      markedNum: user.myCollectCount,
      myAnswerNum: user.myAnsCount,
      waitForAnswerNum: user.myWaitAnsCount,
      myFollowerNum: user.myFunsCount,
      myQuesNum: user.myQuesCount
    }];

    $rootScope.$broadcast("userRefreshed");
  };

  return service;
});