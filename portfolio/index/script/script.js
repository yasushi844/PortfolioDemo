new Vue({
    el: '#app',
    data() {
        return {
            scrollY: 0,
            screenHeight: window.innerHeight,
            screenWidth: window.innerWidth,
            firstBreakPoint: 640,
            secondBreakPoint: 960,
            thirdBreakPoint: 1280,
            isHeaderDraw: false,
            isAboutImgDraw : false,
            isProductImgDraw: false,
            isCompanyImgDraw: false,
            isStartFlag: 0,
            setTime: 3000,
            picCount: 0,
            menuLists:[{
                name:"ABOUT",
                path:"#about",
            },{
                name:"PRODUCT",
                path:"#product",
            },{
                name:"COMPANY",
                path:"#conpany",
            },{
                name:"CONTACT",
                path:"#contact",
            }],
            slides: [
                {img: "img/top_view_img1.jpg"},
                {img: "img/top_view_img2.jpg"},
                {img: "img/top_view_img3.jpg"},
            ],
            aboutImgs:[{
                class:"about-img1",
                img:"img/about_img1.jpg",
            },{
                class:"about-img2",
                img:"img/about_img2.jpg",
            }],
            productImgs:[{
                imgClass:"product-img1",
                textClass:"product-text1",
                img:"img/product_img1.jpg",
            },{
                imgClass:"product-img2",
                textClass:"product-text2",
                img:"img/product_img2.jpg",
            },{
                imgClass:"product-img3",
                textClass:"product-text3",
                img:"img/product_img3.jpg",
            }],
            companyImgs:[{
                class:"company-img1",
                img:"img/company_img1.jpg",
            },{
                class:"company-img2",
                img:"img/company_img2.jpg",
            }],
            contactBox:[{
                boxTitle:"お名前",
                boxName:"name",
            },{
                boxTitle:"メールアドレス",
                boxName:"email",
            },{
                boxTitle:"電話番号",
                boxName:"tel",
            },{
                boxTitle:"住所",
                boxName:"address",
            }],

        };
    },
    created(){
        this.handleResize()
        this.handleScroll()
    },
    mounted() {
        window.addEventListener('resize', this.handleResize)
        window.addEventListener('scroll', this.handleScroll)
        setInterval(() => {this.picChange()}, this.setTime)
    },
    methods: {
        handleResize(){
            this.screenHeight = window.innerHeight;
            this.screenWidth = window.innerWidth;
            if (this.screenWidth <= this.firstBreakPoint){
                this.isAboutImgDraw = true;
                this.isProductImgDraw = true;
                this.isCompanyImgDraw = true;
            }
        },
        handleScroll() {
            this.scrollY = window.scrollY;
            if (this.scrollY > 0 && this.screenWidth > 0 && this.screenWidth <= this.secondBreakPoint){
                this.isHeaderDraw = true;
                this.isStartFlag = 1
            }else if (this.scrollY > 40 && this.screenWidth > this.secondBreakPoint){
                    this.isHeaderDraw = true;
                    this.isStartFlag = 1
            }else{
                this.isHeaderDraw = false;
            }
            if (this.screenWidth > this.secondBreakPoint){
                if (this.scrollY > 500){
                    this.isAboutImgDraw = true;
                }
                if (this.scrollY > 1700){
                    this.isProductImgDraw = true;
                }
                if (this.scrollY > 2700){
                    this.isCompanyImgDraw = true;
                }
            }else if(this.screenWidth > this.firstBreakPoint && this.screenWidth <= this.secondBreakPoint){
                if (this.scrollY > 425){
                    this.isAboutImgDraw = true;
                }
                if (this.scrollY > 1000){
                    this.isProductImgDraw = true;
                }
                if (this.scrollY > 1600){
                    this.isCompanyImgDraw = true;
                }
            }
        },
        picChange() {
            this.picCount += 1
            if (this.picCount == this.slides.length) this.picCount = 0;
        },
    },
});