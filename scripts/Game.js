// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
     /*    //引用星星的预制资源
        starPrefab :{
            default:null,
            type = cc.Prefab
        },
        //星星产生后消失时间的随机范围
        maxStarDuration : 0,
        minStarDuration : 0,
        ground :{
            default:null,
            type = cc.Node
        },
        player : {
            default:null,
            type = cc.Node
        } */
         // 这个属性引用了星星预制资源
         starPrefab: {
            default: null,
            type: cc.Prefab
        },
        // 星星产生后消失时间的随机范围
        maxStarDuration: 0,
        minStarDuration: 0,
        // 地面节点，用于确定星星生成的高度
        ground: {
            default: null,
            type: cc.Node
        },
        // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
        player: {
            default: null,
            type: cc.Node
        },
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    
    },
    onLoad: function () {
        //获取地平面Y轴坐标
        this.groundY = this.ground.y + this.ground.height/2;
        //生成一个新的星星
        this.spawnNewStar();
    },

    spawnNewStar: function () {
        //使用给定的模板在场景中生成一个新节点
        var newStar = cc.instantiate(this.starPrefab);
        //将新节点增加到Canvas
        this.node.addChild(newStar);
        newStar.setPosition(this.getNewStarPosition());
       
    },

    getNewStarPosition: function () {
        var randX = 0;
        var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight - 150;
        var maxX = this.node.width/2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        return cc.v2(randX, randY);
        
    },



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
