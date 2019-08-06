class Canvas {

    constructor(width=1920, height=1080, color = "rgb(200, 200, 200)", ) {
        this.html;
        this.ctx;

        this.width      = width;
        this.height     = height;
        this.color      = color;

    }

    createHTML(parent = document.getElementsByTagName("body")[0], width="100%", height="100%") {
        this.html                       = document.createElement("canvas");
        this.html.style.width           = width;
        this.html.style.height          = height;
        this.html.style.backgroundColor = this.color;
        this.html.width                 = this.width;
        this.html.height                = this.height;
        this.ctx = this.html.getContext("2d");

        parent.appendChild(this.html);
    }

    drawRect(x=0, y=0, width=this.html.width, height=this.html.height, backColor="rgb(0, 0, 0)", strokeColor, line=width/20) {
        if(!strokeColor) {
            this.ctx.fillStyle = backColor;
            this.ctx.fillRect(x, y, width, height);
        }
        else {
            this.ctx.fillStyle = strokeColor;
            this.ctx.strokeRect(x+line, y+line, width-line*2, height-line*2);

            this.ctx.fillStyle = backColor;
            this.ctx.fillRect(x+line, y+line, width-line*2, height-line*2);
        }
    }

    clearRect(x=0, y=0, width=this.html.width, height=this.html.height) {
        this.ctx.clearRect(x, y, width, height);
    }

    drawCircle(x=0, y=0, r=this.width>this.height?this.height/2:this.width/2, backColor="rgb(0, 0, 0)", strokeColor, line=r/20) {
        if(!strokeColor) {
            this.ctx.fillStyle = backColor;
            this.ctx.beginPath();
            this.ctx.arc(x+r, y+r, r, 0, Math.PI*2);
            this.ctx.closePath();
            this.ctx.fill();
        }
        else {
            this.ctx.strokeStyle        = strokeColor;
            this.ctx.lineWidth          = line;
            this.ctx.beginPath();
            this.ctx.arc(x+r, y+r, r-line/2, 0, Math.PI*2);
            this.ctx.closePath();
            this.ctx.stroke();

            this.ctx.fillStyle = backColor;
            this.ctx.beginPath();
            this.ctx.arc(x+r, y+r, r-line, 0, Math.PI*2);
            this.ctx.closePath();
            this.ctx.fill();
        }
    }

    drawEllipse(x=0, y=0, radX=this.width/2, radY=this.height/2, backColor="rgb(0, 0, 0)", strokeColor, line=radX/20) {
        if(!strokeColor){
            this.ctx.fillStyle = backColor;
            this.ctx.beginPath();
            this.ctx.ellipse(x+radX, y+radY, radX, radY, 0, 0, Math.PI*2);
            this.ctx.closePath();
            this.ctx.fill();
        }
        else {
            this.ctx.fillStyle      = backColor;
            this.ctx.strokeStyle    = strokeColor;
            this.ctx.lineWidth      = line;
            this.ctx.beginPath();
            this.ctx.ellipse(x+radX, y+radY, radX-line/2, radY-line/2, 0, 0, Math.PI*2);
            this.ctx.closePath();
            this.ctx.stroke();
            this.ctx.fill();
        }
    }

}