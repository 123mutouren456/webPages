

$(function(){
    renderRain();
})

/**
 * 
 * @param {雨滴数量} num 
 */
function renderRain(num){
    num = num ? num : 20;
    let styleEl = document.createElement('style');
    document.head.appendChild(styleEl);
    var h = $(window).height() - 50 + Math.random()*20;
    var down = `@keyframes down{
        0%{
            transform: translateY(0);
            opacity: 0;
        }
        60%{
            width: 2px;
            height: 4px;
            transform: translateY(${h}px);
            opacity: 1;
            border: 0;
            background-color:#86CFFF; 
        }
        61%{
            width: 1px;
            height: 1px;
            transform: translate(0,${h}px);
            border-radius: 10px / 10px;
            opacity: 1;
            background: none;
            border: 1px solid #86CFFF;
        }
        80%{
            width: 100px;
            height: 10px;
            transform: translate(-45px,${h}px);
            border-radius: 100px / 10px;
            background: none;
            border: 1px solid #86CFFF;
        }
        100%{
            width: 150px;
            height: 10px;
            transform: translate( -85px,${h}px);
            border-radius: 150px / 10px;
            background: none;
            border: 1px solid #86CFFF;
            opacity: 0;
        } 
    }`;
    styleEl.sheet.insertRule(down, 0);

    /*
    l:雨滴位置
    t:动作时长
    d:随机延迟
    */
   let ele = "";
    for(let i = 0; i< num; i++){
        let l = Math.random()*$(window).width();    
        let t = Math.random()*2+2;
        let d = Math.random()*5;
        let dp = `.dp${i}{
                        animation:down ${t}s  ${d}s  ease-in infinite;
                        left: ${l}px;
                    }`;
        styleEl.sheet.insertRule(dp, 0);

        ele += `<div class="drop dp${i}"></div>`;
    }
    $('.drops').append(ele);
}