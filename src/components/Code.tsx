import React from "react"

interface IState {
    code: string,
    codeLength: number,
    fontSizeMin: number,
    fontSizeMax: number,
    backgroundColorMin: number,
    backgroundColorMax: number,
    colorMin: number,
    colorMax: number,
    lineColorMin: number,
    lineColorMax: number,
    contentWidth: number,
    contentHeight: number,
    
}
class Code extends React.Component<any,IState> {
   
    constructor(props:any){
        super(props)
        this.state = {
            code:'3214',
            codeLength: 4,
            fontSizeMin: 20,
            fontSizeMax: 22,
            backgroundColorMin: 240,
            backgroundColorMax: 250,
            colorMin: 10,
            colorMax: 20,
            lineColorMin: 40,
            lineColorMax: 180,
            contentWidth: 96,
            contentHeight: 45,
        }     
    }
    componentDidMount(){ 
        this.reloadPic()
    }
    //生成随机数
    randomNum = (min:number,max:number)=>{
        return Math.floor(Math.random()*(max-min)+min)
    }
    //生成一个随机的颜色
    randomColor(min:number,max:number){
        const r = this.randomNum(min,max)
        const g = this.randomNum(min,max)
        const b = this.randomNum(min,max)
        return `rgb(${r},${g},${b})`

    }
    drawText(ctx:any,txt:string,i:number){
        ctx.fillStyle = this.randomColor(this.state.colorMin,this.state.colorMax)
        const fontSize = this.randomNum(this.state.fontSizeMin,this.state.fontSizeMax)
        ctx.font=fontSize + 'px SimHei'
        const padding = 10
        const offset = (this.state.contentWidth - 40) / (this.state.codeLength-1)
        let x =  padding
        if(i>0){
            x=padding+(i*offset)
        }
        let y=this.randomNum(this.state.fontSizeMax,this.state.contentHeight-5)
        if(fontSize>40){
            y=40
        }
        const deg = this.randomNum(-10,10)
        //修改坐标原点和旋转角度
        ctx.translate(x,y)
        ctx.rotate(deg * Math.PI/180)
        ctx.fillText(txt,0,0)
        //恢复坐标原点和角度
        ctx.rotate(-deg * Math.PI/180)
        ctx.translate(-x,-y)

    }
    //绘制干扰线
    drawLine(ctx:any){
        for(let i = 0;i < 1;i++){
            ctx.strokeStyle = this.randomColor(this.state.lineColorMin,this.state.lineColorMax)
            ctx.beginPath()
            ctx.moveTo(this.randomNum(0,this.state.contentWidth),this.randomNum(0,this.state.contentHeight))
            ctx.lineTo(this.randomNum(0,this.state.contentWidth),this.randomNum(0,this.state.contentHeight))
            ctx.stroke()
        }

    }
    //重新加载验证码
    reloadPic=()=>{
        this.drawPic()
        return ()=>{
            this.props.onGetCode(this.state.code)
        }
    }
    //检验验证码
   /* checkCode = () :void=>{
        let captcha=props.captcha
        if(captcha !== ''&& captcha.toLowerCase() !== this.state.code.toLowerCase())
            this.setState({showError:true})
        else if(captcha === ''|| captcha.toLowerCase()===this.state.code.toLowerCase())
            this.setState({showError:false})
    }*/
    //生成验证码
    drawPic(){
        let random = ''
        const str= '0123456789'
        for(let i=0;i<this.state.codeLength;i++){
            const index = Math.floor(Math.random()*9)
            random += str[index]
        }
        this.setState({
            code:random
        })
        const canvas= document.getElementById("canvas") as HTMLCanvasElement
        const ctx = canvas.getContext('2d')!
        ctx.textBaseline = 'bottom'
        //绘制背景
        ctx.fillStyle = this.randomColor(this.state.backgroundColorMin,this.state.backgroundColorMax)
        ctx.fillRect(0,0,this.state.contentWidth,this.state.contentHeight)
        //绘制文字
        console.log(this.state.code)
        for(let i = 0;i<this.state.code.length;i++){
            this.drawText(ctx,this.state.code[i],i)
        }
        this.drawLine(ctx)
    }
    render(): React.ReactNode {
        return (
            <div>
                <canvas                   
                    id="canvas"
                    onClick={this.reloadPic}
                    width = '100'
                    height = '45'                    
                >
                </canvas>
            </div>
        )
    }


}
export default Code