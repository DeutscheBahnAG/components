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

storiesOf('Components / Transportchip / Regional styles', module).add('Berlin', () => (
  <div className="sg-components-transportationchip-list">
    <p>
      {[
        'S1',
        'S2',
        'S25',
        'S26',
        'S3',
        'S41',
        'S42',
        'S46',
        'S47',
        'S5',
        'S7',
        'S75',
        'S8',
        'S85',
        'S9',
      ].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.BERLIN}
          transportType={Transportchip.transportTypes.SBAHN}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {['U1', 'U12', 'U2', 'U3', 'U4', 'U5', 'U55', 'U6', 'U7', 'U8', 'U9'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.BERLIN}
          transportType={Transportchip.transportTypes.UBAHN}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {['M1', 'M17', '12', '88'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.BERLIN}
          transportType={Transportchip.transportTypes.TRAM}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {['M11', 'M85', 'X7', 'X83', 'TXL', '100', '943', 'N1', 'N97'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.BERLIN}
          transportType={Transportchip.transportTypes.BUS}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {['F10', 'F12', 'F21', 'F22', 'F23'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.BERLIN}
          transportType={Transportchip.transportTypes.FERRY}
          lineNumber={lineNumber}
        />
      ))}
    </p>
  </div>
));

storiesOf('Components / Transportchip / Regional styles', module).add('Hamburg', () => (
  <div className="sg-components-transportationchip-list">
    <p>
      {['S1', 'S11', 'S2', 'S21', 'S3', 'S31'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.HAMBURG}
          transportType={Transportchip.transportTypes.SBAHN}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {['A1', 'A2', 'A3'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.HAMBURG}
          transportType={Transportchip.transportTypes.SBAHN}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {['U1', 'U2', 'U3', 'U4', 'U5'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.HAMBURG}
          transportType={Transportchip.transportTypes.UBAHN}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {[
        '1',
        '29',
        'X3',
        'X86',
        '31',
        '37',
        '111',
        '978',
        '600',
        '688',
        '837',
        '8129',
        '1705',
        '8895',
      ].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.HAMBURG}
          transportType={Transportchip.transportTypes.BUS}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {['61', '62', '72', '73', '75'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.HAMBURG}
          transportType={Transportchip.transportTypes.FERRY}
          lineNumber={lineNumber}
        />
      ))}
    </p>
  </div>
));

storiesOf('Components / Transportchip / Regional styles', module).add('Munich', () => (
  <div className="sg-components-transportationchip-list">
    <p>
      {['S1', 'S2', 'S3', 'S4', 'S6', 'S7', 'S8', 'S20'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.MUNICH}
          transportType={Transportchip.transportTypes.SBAHN}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {['U1', 'U2', 'U3', 'U4', 'U5', 'U6', 'U7', 'U8'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.MUNICH}
          transportType={Transportchip.transportTypes.UBAHN}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {[
        '12',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '23',
        '25',
        '27',
        '28',
        '29',
        'E7',
        'N17',
        'N19',
        'N20',
        'N27',
      ].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.MUNICH}
          transportType={Transportchip.transportTypes.TRAM}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {['X30', 'X98', '50', '63', '100', '199', 'N40', 'N81'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.MUNICH}
          transportType={Transportchip.transportTypes.BUS}
          lineNumber={lineNumber}
        />
      ))}
    </p>
  </div>
));

storiesOf('Components / Transportchip / Regional styles', module).add('Frankfurt/Main', () => (
  <div className="sg-components-transportationchip-list">
    <p>
      {['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.FRANKFURT_MAIN}
          transportType={Transportchip.transportTypes.SBAHN}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {['U1', 'U2', 'U3', 'U4', 'U5', 'U6', 'U7', 'U8', 'U9'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.FRANKFURT_MAIN}
          transportType={Transportchip.transportTypes.UBAHN}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {['12', '14', '15', '16', '17', '18', '19', '20', '21'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.FRANKFURT_MAIN}
          transportType={Transportchip.transportTypes.TRAM}
          lineNumber={lineNumber}
        />
      ))}
    </p>
  </div>
));
