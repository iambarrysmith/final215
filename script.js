new Vue({
  el:"#instrumentstore",
  data:{
    name:"",
    type:"",
    price:"",
    brand:"",
    selected:false,
  img:"https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png",
    mess:"",
    
    instrument:[
      {
        name: "Electric Drums",
        type: "Percussion",
        price: "$2000",
        brand: "Yamaha", 
        color:"green",
        selected:false,
    img:"https://th.bing.com/th/id/OP.IDzDxglzDttUaw474C474?w=184&h=150&rs=1&o=5&dpr=1.5&pid=21.1",
       
      },
      {
        name: "Triangle",
        type: "Percussion",
        price: "$6969",
        brand: "Yamaha",
        color:"green",
       selected:false, img:"https://th.bing.com/th/id/OP.vwib5Kvv3sBhcQ474C474?w=160&h=150&rs=1&o=5&dpr=1.5&pid=21.1",
      },
      {
        name: "Harmonica",
        type: "Wind",
        price: "$50",
        brand: "Fender",
        color:"red",
       selected:false, img:"https://th.bing.com/th/id/OIP.l3AsER5cbbl-R15B1cdZiAHaHa?w=174&h=180&c=7&o=5&dpr=1.5&pid=1.7"
      },
      {
        name: "Acoustic Guitar",
        type: "String",
        price: "$500",
        brand: "Fender",
        color:"red",
       selected:false, img:"https://th.bing.com/th/id/OIP.QzsDSYq2XK5YxaOBT3eupQHaSJ?w=142&h=350&c=7&o=5&dpr=1.5&pid=1.7"
      },
      {
        name: "Keyboard",
        type: "Percussion",
        price: "$300",
        brand: "Maton",
       color:"Blue", 
        selected:false,
img:"https://th.bing.com/th/id/OP.AMiFiBzdDsx1JQ474C474?w=160&h=150&rs=1&o=5&dpr=1.5&pid=21.1",
        
      },
      {
        name: "Kazoo",
        type: "Wind",
        price: "$50",
        brand: "Maton",
        color:"blue",
        selected:false,
 img:"data:image/jpeg;base64,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"
      }
    ],
    cart: []
  },
  methods:{
    popUp:function (x) {
      this.instrument[x].selected = !this.instrument[x].selected;
    },
     popUp2:function () {
     this.selected = !this.selected;
    },
    submit:function(item,x){
     
      this.instrument[x].selected=false;
    this.instrument.splice(x,1);
     this.cart.push(item);
      
      return this.instrument
      
    },
    emptyCart:function(x){
     
      this.instrument= this.instrument.concat(this.cart); 
      this.cart=[];
     
    },
  
  newInstrument:function(){
    this.instrument.push({
      name:this.name,
      type:this.type,
      price:this.price,
      brand:this.brand,
      img:this.img,
      selected:false
    });this.selected = !this.selected;
  } 
},
  watch:{
    name:function(){
      if (!this.name || !this.type || !this.brand || !this.price){
        this.mess="Form not yet complete"
      } 
      else{this.mess="You may now submit"}
    },
    type:function(){
      if (!this.name || !this.type || !this.brand || !this.price){
        this.mess="Form not yet complete"
      } 
      else{this.mess="You may now submit"}
    },
    brand:function(){
      if (!this.name || !this.type || !this.brand || !this.price){
        this.mess="Form not yet complete"
      } 
      else{this.mess="You may now submit"}
    },
    price:function(){
      if (!this.name || !this.type || !this.brand || !this.price){
        this.mess="Form not yet complete"
      } 
      else{this.mess="You may now submit"}
    }
      
    
    
  }
   
})