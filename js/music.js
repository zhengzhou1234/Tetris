 function controlMusic(){
                var audio = document.getElementById('music');
                var img = document.getElementById('music_img');
                if(audio!==null){//判断是否获得
                    if(audio.paused){//获得播放状态,这个属性应该是是否是暂停状态,如果是就播放,如果不是暂停就暂停
                        audio.play();
                        img.src = "img/music_button.png";
                    }else{
                        audio.pause();
                        img.src = "img/music_button02.png";
                    }
                }
            }