import Button from '@mui/material/Button';
import './App.css';

function App() {
    const play = () =>{
        let v = document.getElementById("video1");
        let c = document.getElementById("myCanvas");
        var ctx = c.getContext('2d');
        v.play()//需求只说了 播放
        //每10毫秒画一次图
        v.addEventListener('play', function() {
            let i = window.setInterval(function() {
                ctx.drawImage(v, 1, 1, 356, 212);
                if(v.ended){
                    clearInterval(i)
                }
            }, 10);
        }, false);


    }

  return (
    <div className="App">
      <video style={{display: 'none'}} controls="true" crossorigin="anonymous" id='video1' src="https://mdn.github.io/dom-examples/canvas/chroma-keying/media/video.mp4" ></video>
        <canvas width='356' height='212' id='myCanvas'>

        </canvas>
        <br></br>
      <Button onClick={play}>
        play
      </Button>
    </div>
  );
}

export default App;
