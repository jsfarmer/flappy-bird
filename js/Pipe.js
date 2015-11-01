/**
 * Created by Danny on 2015/9/10 11:38.
 */
(function(){
    //管子类
    window.Pipe = Class.extend({
        init : function(){
            //向上管子的高度
            this.h = _.random(50 ,game.canvas.height / 2);  //向下管子的具体值可以根据向上管子的值计算得到
            //向上管子的x位置
            this.x = game.canvas.width;
            //向上管子的y位置
            this.y = game.canvas.height - this.h - 44;

            //宽度
            this.w = 148;
            //速度
            this.speed = 3;
        },
        pause : function(){
            this.speed = 0;
        },
        update : function(){
            this.x -= this.speed;
            if(this.x < -this.w){
                game.pipeArray = _.without(game.pipeArray,this);
            }

            //碰撞检测
            if(game.bird.x > this.x - game.bird.w && game.bird.x < this.x + this.w){
                //此时小鸟进入到了this表示的这个管子的领空
                    //向上的管子
                    if(game.bird.y >= this.y - game.bird.h){
                        //碰撞了
                        game.gameover();
                        return;
                    }
                    //向下的管子
                    if(game.bird.y <= (game.canvas.height-this.h-250)){
                        //碰撞了
                        game.gameover();
                        return;
                    }
                }
            

            //加分
            if(!this.done && this.x < canvas.width / 2 - this.w){
                game.scoreManager.addPoint();
                this.done = true;
            }
        },
        render : function(){
          // if(this.type == 0){
                //向上的管子
                game.ctx.drawImage(game.images.pipe0,0,0,this.w,this.h,this.x,this.y,this.w,this.h);
           // }else if(this.type == 1){
                //向下的管子
                game.ctx.drawImage(game.images.pipe1,0,1664 - (game.canvas.height-this.h-250),this.w,(game.canvas.height-this.h-250),this.x,0,this.w,(game.canvas.height-this.h-250));
            //}
        }
    });
})();