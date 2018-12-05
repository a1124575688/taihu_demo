
    //地图类
    var Buildings = new AMap.Buildings({
        zooms: [0, 18],
        zIndex: 125,
        heightFactor: 2//2倍于默认高度，3D下有效
    });
    mapx = new AMap.Map('container', {
        resizeEnable: true,
        center: [120.63168,31.176868],
        // dragEnable:false,
        // zoomEnable:false,
        keyboardEnable:false,
        defaultCursor:'pointer',
        features: ['bg', 'road', 'point'],//设置地图默认显示要素
        zoom: 16,
        viewMode:'3D',
        pitch:60,
        zIndex:10,
        mapStyle:'amap://styles/38278721767a38d177220c0ab231d66b',
        // layers: [
        //     new AMap.TileLayer({}),
        //     // 楼块图层
        //     Buildings
        // ],
    });
    mapx.setLayers([Buildings,new AMap.TileLayer({})]);

    let makers = [
        [120.634706,31.183826],[120.631257,31.185111],[120.632533,31.175299],
        [120.636795,31.175942],[120.6411,31.179349],[120.645369,31.181586],
        [120.646721,31.18436],[120.626945,31.179458], [120.626287,31.17641],
        [120.626138,31.173689],[120.641074,31.18839]
    ];
    let imgs = [`./image/red.png`,`./image/blue.png`,`./image/blue.png`,
        `./image/red.png`,`./image/gre.png`,`./image/blue.png`,
        `./image/gre.png`,`./image/red.png`,`./image/blue.png`,
        `./image/red.png`,`./image/gre.png`];
    let line3dData = {
        data1:[120.638518,31.179355,120.636591,31.182228 ,120.634998,31.183148,120.632693,31.184975],
        data2:[120.638518,31.179355,120.639004,31.181899,120.640762,31.183528,120.642953,31.185213],
        data3:[120.638518,31.179355,120.63896,31.178816,120.639484,31.176007,120.639775,31.172691],
        data4:[120.638518,31.179355,120.636359,31.178556,120.634189,31.177125,120.631743,31.174607],
        data5:[120.638518,31.179355,120.633919,31.179285,120.630842,31.178645,120.627531,31.17698],
    };
    let polygonArry = [];
    setTimeout(function () {
        // for(let i = 0; i < makers.length;i++){
        //     var marker = new AMap.Marker({
        //         map:mapx,
        //         position:makers[i],
        //         // icon:imgs[i],
        //         content:`<div class="center_maker"><img src=${imgs[i]} alt=""></div>`,
        //         offset:new AMap.Pixel(-30,-60)
        //     })
        // }
        // var markerCenter = new AMap.Marker({
        //     map:mapx,
        //     position:[120.638518,31.179355] ,
        //     // icon:`./image/makercenter.png`,
        //     content:`<div class="center_maker"><img src="./image/makercenter.png" width="60px"></div>`,
        //     offset:new AMap.Pixel(-30,-100)
        // });
        // $.each(line3dData,function (i,n) {
        //     line3d(n)
        // });
        // var polygon;
        let pathData = [
            {
                arry:[[ 120.624722,31.178291 ],[ 120.624216,31.175579 ],[ 120.621411,31.174246 ],
                [120.618303,31.172015],[120.613589,31.168558],[120.610965,31.164109]
                ,[120.606076,31.157867],[120.603193,31.152511],[120.600841,31.147622]
                ,[120.599368,31.143253],[120.599627,31.140895],[120.602095,31.141089]
                ,[120.606575,31.141089],[120.610237,31.141479],[120.614813,31.14187]
                ,[120.61941,31.142067],[120.624218,31.14246],[120.629123,31.142263]
                ,[120.635591,31.141674],[120.640347,31.141284],[120.645892,31.140991]
                ,[120.652183,31.141772],[120.657753,31.144957],[120.65573,31.147414]
                ,[120.652391,31.152619],[120.651441,31.157867],[120.651047,31.164594]
                ,[120.652309,31.170594],[120.65606,31.178979],[120.652775,31.179256]
                ,[120.649432,31.179117],[120.645722,31.178841],[120.639362,31.177879]
                ,[120.633538,31.177197],[120.629544,31.177469],[120.625319,31.178566]],
                bgColor:'#13c08b'
            },{
            arry:[[120.599904,31.141148],[120.601081,31.135596],[120.602535,31.130201],
                [120.604401,31.12285],[120.606226,31.11697],[120.608185,31.111045],
                [120.607835,31.109847],[120.61111,31.109939],[120.615831,31.110123],
                [120.625221,31.109756],[120.674304,31.109939],[120.674479,31.115406],
                [120.673783,31.119968],[120.672201,31.124639],[120.671324,31.128094 ],
                [120.670267,31.130312],[120.666586,31.135713],[120.664391,31.139185],
                [120.661832,31.14152],[120.659219,31.143904],[120.657898,31.145181],
                [120.654644,31.142641],[120.64931,31.141145],[120.643445,31.140774],
                [120.639101,31.141517],[120.627613,31.142391],[120.625125,31.142516],
                [120.600242,31.140898]],
                bgColor:'#5c5ce5'
            },{
                arry:[[120.686251,31.18131],[120.656393,31.179397],[120.652637,31.171788],
                    [120.650157,31.161191],[120.652042,31.156423],[120.65259,31.151246],
                    [120.658746,31.144032],[120.661782,31.141896],[120.666964,31.135459],
                    [120.670455,31.130141],[120.671988,31.125713],[120.674301,31.117575],
                    [120.674553,31.110317],[120.683375,31.109889],[120.690955,31.108908],
                    [120.695071,31.108488],[120.700148,31.109176],[120.700344,31.170826],
                    [120.689913,31.170837],[120.687388,31.175552],[120.687221,31.180948],
                    ],
                bgColor:'#f98e64'
            }
        ];

            for(let i = 0; i < pathData.length;i++){
                let path = [];
                let pathArry = pathData[i].arry;
                for(let x = 0;x < pathArry.length ;x ++){
                    path.push(new AMap.LngLat(pathArry[x][0],pathArry[x][1]));
                }
                 var polygon = new AMap.Polygon({
                    map:mapx,
                    path: path,
                    fillColor: pathData[i].bgColor, // 多边形填充颜色
                    borderWeight: 2, // 线条宽度，默认为 1
                    strokeColor: pathData[i].bgColor, // 线条颜色
                    fillOpacity:0.3,
                    zIndex:21
                });
                polygonArry.push(polygon)
                // mapx.add(polygon);
            }

    },2000);



    //点击事件类
    $('.case_real_time_list').on('click',function () {
        $(this).addClass('yellow_border').siblings().removeClass('yellow_border')
    });
    let caseData = {"ok":true,"servertime":1542074714,"list":[{"name":"市容环境","value":"33","percent":"14","isNeedDeal":0},{"name":"街面秩序","value":"24","percent":"10","isNeedDeal":0},{"name":"宣传广告","value":"21","percent":"10","isNeedDeal":0},{"name":"消防安全","value":"18","percent":"8","isNeedDeal":0},{"name":"公共设施","value":"15","percent":"7","isNeedDeal":0}]};
    let case_tpl = '';
    for(let i=0;i<caseData.list.length;i++){
        let obj = caseData.list[i];
        case_tpl += `<div class="echart-item echart-blue">
                             <div class="echart-item-name-maodun" title="${obj.name}">${obj.name}</div>
                             <div class="echart-item-con acceptTop${i+1}">
                                  <div class="echart-item-bar progressColorBar" title="${obj.name}" style="height: 36px"></div>
                                  <div class="echart-item-value">${obj.value}</div>
                             </div>
                     </div>`;
    }
    $('.case_hot_type_data').html(case_tpl);
    for(let i=0;i<caseData.list.length;i++){
        let obj = caseData.list[i];
        let total = parseInt(caseData.list[0].value);
        let value = JSON.parse(obj.value);
        let percent = value/total * 100;
        progressBar('.acceptTop'+(i+1),percent);
    }
    $('.blue_btn span').on('click',function () {
        $(this).addClass('blue_btn_ac').siblings().removeClass('blue_btn_ac')
    });
    $('.left_nav div').on('click',function () {
       $(this).addClass('nav_left_click').siblings().removeClass('nav_left_click')
    });

    $('.click_1').on('click',function () {
        mapStyleTab('38278721767a38d177220c0ab231d66b',true)
    });
    $('.click_2').on('click',function () {
        mapStyleTab('ae4163cc296b5ee71d835d23764b24f1',false)
    });
    $('.click_3').on('click',function () {
        mapStyleTab('fb2454b32310e75f95fe89d05ded806c',false)
    });
    $('.click_4').on('click',function () {
        mapStyleTab('f807f454bc246aed66529b21e0b052e4',true)
    });
    $('.click_5').on('click',function () {
        mapStyleTab('da9b6a8de5957cf1fd73b28057663252',true)
    });
    // $('.click_map_style').on('click',function (style,) {
    //     let mapStyle = $(this).data('style')
    //     mapStyleTab('da9b6a8de5957cf1fd73b28057663252',true)
    // });
    $('.check_click').on('click',function () {
        if($(this).hasClass('checked')){
            $(this).attr('src','./image/checkbox.svg');
            $(this).removeClass('checked');
           for( let i = 0; i < polygonArry.length ;i ++){
               polygonArry[i].hide()
           }
        }else {
            $(this).attr('src','./image/checkbox_checked.svg');
            $(this).addClass('checked');
            for( let i = 0; i < polygonArry.length ;i ++){
                polygonArry[i].show()
            }
        }
    });
    $('.showNav_click').on('click',function () {
        if($(this).hasClass('checked')){
            $(this).attr('src','./image/checkbox.svg');
            $(this).removeClass('checked');
            $('.right_layer,.btm_layer').css('opacity','0')
        }else {
            $(this).attr('src','./image/checkbox_checked.svg');
            $(this).addClass('checked');
            $('.right_layer,.btm_layer').css('opacity','1')
        }
    });

    mapx.on('zoomchange',function () {
        let zooms = mapx.getZoom();

        if(zooms < 14){
            $('.center_maker').addClass('maker_scale')
        }else{
            $('.center_maker').removeClass('maker_scale')
        }
    });

    //方法类
    /*地图样式切换*/
    function mapStyleTab(style,sky){
        mapx.setMapStyle(`amap://styles/${style}`);
        if(sky){
            $('.top_layer').addClass('skyBg')
        }else {
            $('.top_layer').removeClass('skyBg')
        }
    }
    /*进度条*/
    function progressBar(dom,percent){
        var domBar = $(dom).find(".progressColorBar");

        var progreBarW=$(dom).width() * 0.58;
        var progreColorW=progreBarW*(percent/100);



        domBar.animate({width:progreColorW},'slow');
    }
    /*3d飞线*/
    function line3d(line3dData) {
        var points = [
            new AMap.LngLat(line3dData[0],line3dData[1]),
            new AMap.LngLat(line3dData[2],line3dData[3]),
            new AMap.LngLat(line3dData[4],line3dData[5]),
            new AMap.LngLat(line3dData[6],line3dData[7])
        ];

        var object3Dlayer = new AMap.Object3DLayer();
        var numberOfPoints = 180;
        var minHeight = 10;

        var meshLine = new AMap.Object3D.MeshLine({
            path: computeBezier(points, numberOfPoints, minHeight),
            height: getEllipseHeight(numberOfPoints, 1600, minHeight),
            color: 'rgba(51,210,210, 0.9)',
            width: 4
        });

        meshLine.transparent = true;
        object3Dlayer.add(meshLine);
        meshLine['backOrFront'] = 'both';
        mapx.add(object3Dlayer);

        function pointOnCubicBezier(cp, t) {
            var ax, bx, cx;
            var ay, by, cy;
            var tSquared, tCubed;

            cx = 3.0 * (cp[1].lng - cp[0].lng);
            bx = 3.0 * (cp[2].lng - cp[1].lng) - cx;
            ax = cp[3].lng - cp[0].lng - cx - bx;

            cy = 3.0 * (cp[1].lat - cp[0].lat);
            by = 3.0 * (cp[2].lat - cp[1].lat) - cy;
            ay = cp[3].lat - cp[0].lat - cy - by;

            tSquared = t * t;
            tCubed = tSquared * t;

            var lng = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].lng;
            var lat = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].lat;

            return new AMap.LngLat(lng, lat);
        }

        function computeBezier(points, numberOfPoints) {
            var dt;
            var i;
            var curve = [];

            dt = 1.0 / (numberOfPoints - 1);

            for (i = 0; i < numberOfPoints; i++) {
                curve[i] = pointOnCubicBezier(points, i * dt);
            }

            return curve;
        }

        function getEllipseHeight(count, maxHeight, minHeight) {
            var height = [];
            var radionUnit = Math.PI / 180;

            for (var i = 0; i < count; i++) {
                var radion = i * radionUnit;

                height.push(minHeight + Math.sin(radion) * maxHeight);
            }

            return height;
        }
    }

    /*添加模型*/
    mapx.AmbientLight = new AMap.Lights.AmbientLight([1,1,1],1);
    mapx.DirectionLight = new AMap.Lights.DirectionLight([1,0,-0.5],[1,1,1],1);

    var loadModel = function (options) {
        var modelName = 'building';
        var scope = this;
        var objLoader = new THREE.OBJLoader2();

        var callbackOnLoad = function ( event ) {
            var object3Dlayer = new AMap.Object3DLayer();
            var meshes = event.detail.loaderRootNode.children;
            for(var i=0;i<meshes.length;i++){
                var vecticesF3 = meshes[i].geometry.attributes.position;
                var vecticesNormal3 = meshes[i].geometry.attributes.normal;
                var vecticesUV2 = meshes[i].geometry.attributes.uv;

                var vectexCount =  vecticesF3.count;

                mesh = new AMap.Object3D.MeshAcceptLights();

                var geometry = mesh.geometry;

                //底部一圈
                // debugger

                var c,opacity;

                var material = meshes[i].material[0]||meshes[i].material;
                // debugger
                if(material.map)
                    // mesh.textures.push(options.textures);

                c = material.color;
                opacity = material.opacity;

                // debugger
                for(var j=0;j<vectexCount;j+=1){
                    var s = j*3;
                    geometry.vertices.push(vecticesF3.array[s],vecticesF3.array[s+2],-vecticesF3.array[s+1]);

                    if(vecticesNormal3) {
                        geometry.vertexNormals.push(vecticesNormal3.array[s],vecticesNormal3.array[s+2],-vecticesNormal3.array[s+1]);
                    }
                    if(vecticesUV2) {
                        geometry.vertexUVs.push(vecticesUV2.array[j*2],1-vecticesUV2.array[j*2+1]);
                    }
                    geometry.vertexColors.push(c.r,c.g,c.b,opacity)
                }
                // debugger
                mesh.DEPTH_TEST = material.depthTest;
                // mesh.backOrFront = 'both'
                mesh.transparent = opacity<1;
                mesh.scale(options.scale[0],options.scale[1],options.scale[2]);
                mesh.rotateZ(options.rotateZ);
                mesh.position(new AMap.LngLat(options.position[0],options.position[1]));
                object3Dlayer.add(mesh)
            }
            mapx.add(object3Dlayer)
        };

        var onLoadMtl = function ( materials ) {
            // for(var i=0;i<materials.length;i+=1){
            // 	materials[i].side=2;
            // }
            objLoader.setModelName( modelName );
            objLoader.setMaterials( materials );
            objLoader.load(options.obj, callbackOnLoad, null, null, null, false);
        };
            objLoader.loadMtl(options.mtl, null, onLoadMtl);
    };
    let car3d_1 = {
        textures:'./tool/DAMAGE_Dirt.png',
        scale:[240,240,240],
        rotateZ:0,
        position:[120.621499,31.179166],
        obj:'./tool/Lamborghini_Huracan_Performante_2017_LOD_B.obj',
        mtl:'./tool/Lamborghini_Huracan_Performante_2017_LOD_B.mtl'
    };
    let car3d_2 = {
        textures:'./tool/Lamborginhi Aventador_diffuse.jpeg',
        scale:[240,240,240],
        rotateZ:-255,
        position:[120.628314,31.17763],
        obj:'./tool/Lamborghini_Huracan_Performante_2017_LOD_B.gltf',
        mtl:'./tool/Lamborghini_Huracan_Performante_2017.mtl'
    };
    loadModel(car3d_1);
    loadModel(car3d_2);