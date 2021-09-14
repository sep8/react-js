import React from 'react';
import '@esri/calcite-components/dist/calcite/calcite.css';
import { CalciteAvatar, CalciteAlert, CalciteButton, CalciteIcon, CalciteSlider, CalciteAccordion, CalciteAccordionItem } from "@esri/calcite-components-react";
import './overwrite.css'
import { Component } from './component'

function App() {
  const [sliderValue, setSliderValue] = React.useState(50);

  return (
    <div className="App">
      <h1>Calcite components</h1>

      <Component name='Button'>
        <CalciteButton>Test</CalciteButton>
      </Component>

      <Component name='Icon'>
        <CalciteIcon icon="marketplace" textLabel='marketplace' scale='m' />
      </Component>

      <Component name='Alert'>
        <CalciteAlert active autoDismiss>
          <div slot="title">Alert title</div>
          <div slot="message">Message lorem ipsum</div><a slot="link" href="#">Link slot</a>
        </CalciteAlert>
      </Component>

      <Component name='Accordion'>
        <CalciteAccordion selectionMode='single'>
          <CalciteAccordionItem icon="embark" item-title="Watercraft"
            item-subtitle="Yachts, boats, and dinghies">Example accordion item
            content</CalciteAccordionItem>
          <CalciteAccordionItem icon="car" item-title="Automobiles"
            item-subtitle="Cars, trucks, and busses">Example accordion item content
          </CalciteAccordionItem>
          <CalciteAccordionItem icon="plane" item-title="Aircrafts"
            item-subtitle="Planes, helicopters, and jets">Example accordion item content
          </CalciteAccordionItem>
        </CalciteAccordion>
      </Component>

      <CalciteSlider
        min="1"
        max="100"
        value={sliderValue}
        step="1"
        onCalciteSliderUpdate={(e) => setSliderValue(e.target.value)} />
      <p>The slider currently has a value of {sliderValue}</p>
    </div>
  );
}

export default App;