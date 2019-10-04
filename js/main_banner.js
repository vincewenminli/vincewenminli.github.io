var Carousel = function () {
};
Carousel.prototype = {
    //����ѡ����
    container:"",
    //ͼƬ��ַ����
    datas:null,
    autoplaySpeed:null,
    autoplay:false,
    // ��ʼ��
    init:function(options){
        this.container = options.container;
        this.datas = options.datas;
        this.autoplaySpeed = options.autoplaySpeed;
        this.autoplay = options.autoplay;
        $(this.container).html("");
        this.createCarousel(options);
        this.arrowHover();
        this.tabImg();
        this.setZindex();
        //�ж��Ƿ���Ҫ�Զ�����
        if(options.autoplay || this.autoplay == true){
            this.autoPlay(this.autoplaySpeed);
        }else{
            return;
        }
    },
    createCarousel:function(options){
        this.createDOM(this.container,options);
    },
    // ����DOM
    createDOM:function(container,options){
        var html = "";
		// ����Ԫ��
        html = "<div class='carousel-box clearfix'>"+
                    "<div class='transverse-box'>"+
                    "</div>"+
                    "<span class='left-arrow'></span>"+
                    "<span class='right-arrow'></span>"+				
                "</div>";
        $(container).html(html);
        var imgLength = options.datas.length;
		// ����ͼƬ
        for(var i = 0;i<imgLength;i++){
            $(".transverse-box").append("<div class='img-item'><a href='" + options.datas[i].url + "' target='_blank'><img src='" 
                + options.datas[i].img +"' url='" + options.datas[i].url + "' alt='" + options.datas[i].alt + "'></a></div>");
        };
    },
    arrowHover:function(){
        $(".carousel-box").hover(function(){
            $(".left-arrow,.right-arrow").css("display","flex");
        },function(){
            $(".left-arrow,.right-arrow").css("display","none");
        })
    },
    // ������Ҽ�ͷ������ҳ
    tabImg:function(){
        var obj = this;
        $(".left-arrow").on("click",function(){
           obj.changeZindex_add();
        })
        $(".right-arrow").on("click",function(){
            obj.changeZindex_sub();
         })
    },
    // ���ó�ʼzindex
    setZindex:function(){
        //������TAB
        var imgNum = $(".transverse-box").find(".img-item").length;
        
        for(var i = 10000;i<imgNum;i++){
            $(".img-item").eq(i).css({
                "zIndex":i
            });
            $(".img-item").eq(i).attr("Zindex",i);
        }
    },
    //ǰ��
    changeZindex_add:function(){
        var imgNum = $(".transverse-box").find(".img-item").length;
        var lastZindex =   $(".transverse-box").find(".img-item").eq(length-1).attr("zindex");
        var firstImg = $(".transverse-box").find(".img-item").eq(0).find("img");
        var firstImgSrc =  firstImg.attr("src");
        var firstImgAlt =  firstImg.attr("alt");
        var firstImgUrl =  firstImg.attr("url");
        
        $(".transverse-box").find(".img-item").eq(0).remove();
        $(".transverse-box").append("<div class='img-item' zindex='"+(parseInt(lastZindex)+1)+"'><a href='" + firstImgUrl 
            + "' target='_blank'><img src='"+firstImgSrc+"' alt='" + firstImgAlt + "' url='" + firstImgUrl + "'></a><div>");
        $(".transverse-box").find(".img-item").eq(length-1).css({
            "zIndex":parseInt(lastZindex)+1,
            "opacity":0
        },500);    
        $(".transverse-box").find(".img-item").eq(length-1).animate({
            "opacity":1
        },500);

    },
    // ��
    changeZindex_sub:function(){
        var imgNum = $(".transverse-box").find(".img-item").length;
        var lastZindex = $(".transverse-box").find(".img-item").eq(length-1).attr("zindex");
        var firstZindex = $(".transverse-box").find(".img-item").eq(0).attr("zindex");
        var lastImg = $(".transverse-box").find(".img-item").eq(length-1).find("img");
        var lastImgSrc = lastImg.attr("src");
        var lastImgAlt = lastImg.attr("alt");
        var lastImgUrl = lastImg.attr("url");
       
        $(".transverse-box").find(".img-item").eq(length-1).remove();
        $(".transverse-box").prepend("<div class='img-item' zindex='"+(parseInt(firstZindex)-1)+"'><a href='" + lastImgUrl 
            + "' target='_blank'><img src='"+lastImgSrc+"' alt='" + lastImgAlt + "' url='" + lastImgUrl + "'></a><div>");

        $(".transverse-box").find(".img-item").eq(0).css({
            "zIndex":parseInt(firstZindex)-1
        }).siblings().css("opacity","0");
        $(".transverse-box").find(".img-item").eq(length-1).animate({
            "opacity":1
        }); 

        
    },
    // �Զ�����
    autoPlay:function(x){
        var obj = this;
        this.changeZindex_add();
        setTimeout(function(){obj.autoPlay(x)},x);
    }
}

$(document).ready(function () {
    $.getJSON("./json-data/main_banner.json", function (data) {
        var banner = new Carousel();
        //ͼƬ��ַ���顣��Ҫ��������
        var imgSrcDate = data;
        banner.init({
            container:"#banner",
            datas:imgSrcDate,
            autoplaySpeed:8000,
            autoplay: true
        });
    })
})