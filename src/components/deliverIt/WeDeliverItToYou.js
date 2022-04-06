import React from 'react';
import weDeliver1 from '../../assets/weDeliverIt/weDeliverItToYou1.png';
import weDeliver2 from '../../assets/weDeliverIt/weDeliverItToYou2.png';
import weDeliver3 from '../../assets/weDeliverIt/weDeliverItToYou3.png';
const WeDeliverItToYou = () => {
    return (
        <section className="weDeliverIt-section">
            <div className="weDeliverIt-item">
                <div className="weDeliverIt-item__img deliver1img">
                    <img src={weDeliver2} alt="weDeliver2"/>
                </div>
                <div className="weDeliverIt-item__content deliver1content">
                    <img src={weDeliver1} alt="weDeliver1"/>
                    <h2>ESPECIAL JUGETERÍA</h2>
                    <h3>Hasta 50% off y hasta 18 cuotas sin interes en regalos seleccionados para el Dia del Niño.</h3>
                    <button>VER MÁS</button>
                </div>
            </div>
            <div className="weDeliverIt-item">
                <div className="weDeliverIt-item__img deliver2img">
                <img src={weDeliver3} alt="weDeliver3"/>
                </div>
                <div className="weDeliverIt-item__content deliver2content">
                    <img src={weDeliver1} alt="weDeliver1"/>
                    <h2>ESPECIAL DECORACIÓN</h2>
                    <h3>Hasta 40% off en muebles, colchones, fitness, herramientas y decoración seleccionados!</h3>
                    <button>VER MÁS</button>
                </div>
            </div>
        </section>
    )
}

export default WeDeliverItToYou
