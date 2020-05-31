import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import Transportchip from './transportchip';
import transportchipReadme from './README.md';

storiesOf('Components / Transportchip / Auto detect', module)
  .addDecorator(withReadme(transportchipReadme))
  .add('S-Bahn', () => <Transportchip lineNumber="S 1" />)
  .add('U-Bahn', () => <Transportchip lineNumber="U 1" />)
  .add('Tram', () => <Transportchip lineNumber="STR 1" />)
  .add('Metro Tram', () => <Transportchip lineNumber="STR M1" />)
  .add('Bus', () => <Transportchip lineNumber="Bus 1" />)
  .add('IC', () => <Transportchip lineNumber="IC 1" />)
  .add('EC', () => <Transportchip lineNumber="EC 1" />)
  .add('ICE', () => <Transportchip lineNumber="ICE 1" />)
  .add('Ferry', () => <Transportchip lineNumber="F 1" />)
  .add('Taxi', () => <Transportchip lineNumber="Taxi" />)
  .add('RegionalExpress', () => <Transportchip lineNumber="RE 1" />)
  .add('Regionalbahn', () => <Transportchip lineNumber="RB 1" />);

storiesOf('Components / Transportchip / Manual', module)
  .addDecorator(withReadme(transportchipReadme))
  .add('S-Bahn', () => (
    <Transportchip transportType={Transportchip.transportTypes.SBAHN} lineNumber="S 1" />
  ))
  .add('U-Bahn', () => (
    <Transportchip transportType={Transportchip.transportTypes.UBAHN} lineNumber="U 1" />
  ))
  .add('Tram', () => (
    <Transportchip transportType={Transportchip.transportTypes.TRAM} lineNumber="STR 1" />
  ))
  .add('Metro Tram', () => (
    <Transportchip transportType={Transportchip.transportTypes.TRAM} lineNumber="STR M1" />
  ))
  .add('Bus', () => (
    <Transportchip transportType={Transportchip.transportTypes.BUS} lineNumber="Bus 1" />
  ))
  .add('IC', () => (
    <Transportchip transportType={Transportchip.transportTypes.IC} lineNumber="IC 1" />
  ))
  .add('EC', () => (
    <Transportchip transportType={Transportchip.transportTypes.EC} lineNumber="EC 1" />
  ))
  .add('ICE', () => (
    <Transportchip transportType={Transportchip.transportTypes.ICE} lineNumber="ICE 1" />
  ))
  .add('Ferry', () => (
    <Transportchip transportType={Transportchip.transportTypes.FERRY} lineNumber="F 1" />
  ))
  .add('Taxi', () => (
    <Transportchip transportType={Transportchip.transportTypes.TAXI} lineNumber="Taxi" />
  ))
  .add('RegionalExpress', () => (
    <Transportchip transportType={Transportchip.transportTypes.RE} lineNumber="RE 1" />
  ))
  .add('Regionalbahn', () => (
    <Transportchip transportType={Transportchip.transportTypes.RB} lineNumber="RB 1" />
  ))
  .add('Bike sharing', () => (
    <Transportchip
      transportType={Transportchip.transportTypes.BIKESHARING}
      lineNumber="Bike sharing"
    />
  ))
  .add('Car sharing', () => (
    <Transportchip
      transportType={Transportchip.transportTypes.CARSHARING}
      lineNumber="Car sharing"
    />
  ))
  .add('Airplane', () => (
    <Transportchip transportType={Transportchip.transportTypes.AIRPLANE} lineNumber="LH123" />
  ))
  .add('Intercitybus', () => (
    <Transportchip transportType={Transportchip.transportTypes.INTERCITYBUS} lineNumber="123" />
  ))
  .add('Walking', () => (
    <Transportchip transportType={Transportchip.transportTypes.WALKING} lineNumber="Walk" />
  ));
