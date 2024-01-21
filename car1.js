AFRAME.registerComponent("car", {
    schema: {
      model: {type: "string", default:"vintage-wagon_cartoon_car/scene.gltf" },
      
    },
    init: function () {
        this.el.setAttribute("gltf-model",this.data.model);
        this.el.setAttribute("position",{x:0, y:50,z:80})
        this.el.setAttribute("rotation",{x:0, y:-100,z:0})
        
      },
      update: function(){
        window.addEventListener("click", e => {
            this.data.clickCounter = this.data.clickCounter + 1;
            if( this.data.clickCounter === 1){
                const rotation = { x:0, y:20,z:0};
                this.el.setAttribute("rotation", rotation);
       }else if (this.data.clickCounter === 2)
       {
        const rotation = { x:0 , y:100 , z:0};
       }
        })
      }
  });