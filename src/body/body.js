import './body.css';

  function Body(props) {
    return (
    <section class="section2">
        <div class="item">
            <img src={props.pic1}/>
            <div class="layer">
            <p>hello</p>
            </div>
        </div>
        <div class="item">
            <img src={props.pic2}/>
            <div class="layer">
            <p>hello</p>
            </div>
        </div>
        <div class="item">
            <img src={props.pic3}/>
            <div class="layer">
            <p>hello</p>
            </div>
        </div>
        <div class="item">
            <img src={props.pic4}/>
            <div class="layer">
            <p>hello</p>
            </div>
        </div>
    </section>
    );
  }
export default Body;