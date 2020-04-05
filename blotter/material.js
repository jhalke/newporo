Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@jhalke 
bradley
/
Blotter
38
2.6k175
 Code Issues 8 Pull requests 0 Actions Wiki Security Insights
Blotter/build/materials/liquidDistortMaterial.js / 
@bradley bradley Getting licenses and packages up to date
f24c90c on Jan 25, 2018
50 lines (35 sloc)  1.2 KB
  
(function(Blotter) {

  Blotter.LiquidDistortMaterial = function() {
    Blotter.Material.apply(this, arguments);
  };

  Blotter.LiquidDistortMaterial.prototype = Object.create(Blotter.Material.prototype);

  Blotter._extendWithGettersSetters(Blotter.LiquidDistortMaterial.prototype, (function () {

    function _mainImageSrc () {
      var mainImageSrc = [
        Blotter.Assets.Shaders.Noise3D,

        "void mainImage( out vec4 mainImage, in vec2 fragCoord )",
        "{",
        "    // Setup ========================================================================",

        "    vec2 uv = fragCoord.xy / uResolution.xy;",
        "    float z = uSeed + uGlobalTime * uSpeed;",

        "    uv += snoise(vec3(uv, z)) * uVolatility;",

        "    mainImage = textTexture(uv);",

        "}"
      ].join("\n");

      return mainImageSrc;
    }

    return {

      constructor : Blotter.LiquidDistortMaterial,

      init : function () {
        this.mainImage = _mainImageSrc();
        this.uniforms = {
          uSpeed : { type : "1f", value : 1.0 },
          uVolatility : { type : "1f", value : 0.15 },
          uSeed : { type : "1f", value : 0.1 }
        };
      }
    };

  })());

})(
  this.Blotter
);
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
