import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withReadme from 'storybook-readme/with-readme';
import Transportchip from './transportchip';
import transportchipReadme from './README.md';

storiesOf('Components / Transportchip', module)
  .addDecorator(withReadme(transportchipReadme))
  .add('Default', () => (
    <>
      <div className="sg-components-transportationchip-list">
        <p>
          <Transportchip lineNumber="U5" />
          <Transportchip lineNumber="ICE599" />
          <Transportchip lineNumber="RE13" />
          <Transportchip lineNumber="Str 4" />
          <Transportchip lineNumber="Bus 296" />
          <Transportchip lineNumber="Taxi" />
        </p>
      </div>
    </>
  ))
  .add('Sizing', () => (
    <>
      <div className="sg-components-transportationchip-list">
        <p>
          Take a ride on <Transportchip lineNumber="S 1" /> today!
        </p>
        <p className="sg-text-style--title-m">
          Take a ride on <Transportchip lineNumber="S 1" /> today!
        </p>
        <p className="sg-text-style--title-xl">
          Take a ride on <Transportchip lineNumber="S 1" /> today!
        </p>
      </div>
      <div className="sg-components-transportationchip-list">
        <p>
          Take a boat trip with{' '}
          <Transportchip regionalStyle={Transportchip.regionalStyles.HAMBURG} lineNumber="F62" /> in
          the Port of Hamburg today!
        </p>
        <p className="sg-text-style--title-m">
          Take a boat trip with{' '}
          <Transportchip regionalStyle={Transportchip.regionalStyles.HAMBURG} lineNumber="F62" /> in
          the Port of Hamburg today!
        </p>
        <p className="sg-text-style--title-xl">
          Take a boat trip with{' '}
          <Transportchip regionalStyle={Transportchip.regionalStyles.HAMBURG} lineNumber="F62" /> in
          the Port of Hamburg today!
        </p>
      </div>
      <div className="sg-components-transportationchip-list">
        <p>
          Do you remember U-Bahn{' '}
          <Transportchip regionalStyle={Transportchip.regionalStyles.BERLIN} lineNumber="U12" /> in
          Berlin?
        </p>
        <p className="sg-text-style--title-m">
          Do you remember U-Bahn{' '}
          <Transportchip regionalStyle={Transportchip.regionalStyles.BERLIN} lineNumber="U12" /> in
          Berlin?
        </p>
        <p className="sg-text-style--title-xl">
          Do you remember U-Bahn{' '}
          <Transportchip regionalStyle={Transportchip.regionalStyles.BERLIN} lineNumber="U12" /> in
          Berlin?
        </p>
      </div>
    </>
  ))
  .add('Linking', () => (
    <>
      <div className="sg-components-transportationchip-list">
        <p>
          Not linked: <Transportchip lineNumber="ICE 599" />
          <Transportchip regionalStyle={Transportchip.regionalStyles.BERLIN} lineNumber="S 1" />
          <Transportchip regionalStyle={Transportchip.regionalStyles.MUNICH} lineNumber="U7" />
        </p>
      </div>
      <div className="sg-components-transportationchip-list">
        <p>
          Click on the chip for more information:{' '}
          <Transportchip
            lineNumber="ICE 599"
            href="https://reiseauskunft.bahn.de/bin/traininfo.exe/dn/624477/471291/228714/93802/80"
          />
          <Transportchip
            regionalStyle={Transportchip.regionalStyles.BERLIN}
            lineNumber="S 1"
            href="https://sbahn.berlin/liniennetz/"
          />
          <Transportchip
            regionalStyle={Transportchip.regionalStyles.MUNICH}
            lineNumber="U7"
            href="https://www.mvv-muenchen.de/"
          />
        </p>
      </div>
      <div className="sg-components-transportationchip-list">
        <p>
          Click on the chip for an JavaScript action:{' '}
          <Transportchip lineNumber="ICE 599" onClick={action('clicked')} />
          <Transportchip
            regionalStyle={Transportchip.regionalStyles.BERLIN}
            lineNumber="S 1"
            onClick={action('clicked')}
          />
          <Transportchip
            regionalStyle={Transportchip.regionalStyles.MUNICH}
            lineNumber="U7"
            onClick={action('clicked')}
          />
        </p>
      </div>
      <div className="sg-components-transportationchip-list">
        <p>
          When either <code>href</code> or <code>onClick</code> is defined, the Transportchip will
          turn into an accessible <code>&lt;a&gt;</code>/<code>&lt;button&gt;</code> including
          hover, pressed and focus ring styles.
        </p>
      </div>
    </>
  ));

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

storiesOf('Components / Transportchip / Regional styles', module).add('Nürnberg', () => (
  <div className="sg-components-transportationchip-list">
    <p>
      {['S1', 'S2', 'S3', 'S4'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.NUREMBERG}
          transportType={Transportchip.transportTypes.SBAHN}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {['U1', 'U2', 'U3'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.NUREMBERG}
          transportType={Transportchip.transportTypes.UBAHN}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {['4', '5', '6', '7', '8'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.NUREMBERG}
          transportType={Transportchip.transportTypes.TRAM}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {['20', '31', '43', '56', '99'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.NUREMBERG}
          transportType={Transportchip.transportTypes.BUS}
          lineNumber={lineNumber}
        />
      ))}
    </p>
  </div>
));

storiesOf('Components / Transportchip / Regional styles', module).add('Cologne', () => (
  <div className="sg-components-transportationchip-list">
    <p>
      {['S11', 'S12', 'S13', 'S19', 'S23'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.COLOGNE}
          transportType={Transportchip.transportTypes.SBAHN}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {['1', '3', '4', '5', '7', '9', '12', '13', '15', '16', '17', '18'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.COLOGNE}
          transportType={Transportchip.transportTypes.TRAM}
          lineNumber={lineNumber}
        />
      ))}
    </p>
  </div>
));

storiesOf('Components / Transportchip / Regional styles', module).add('Mannheim', () => (
  <div className="sg-components-transportationchip-list">
    <p>
      {['S11', 'S12', 'S13', 'S19', 'S23'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.MANNHEIM}
          transportType={Transportchip.transportTypes.SBAHN}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {['1', '3', '4', '5', '7', '9', '12', '13', '15', '16', '17', '18'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.MANNHEIM}
          transportType={Transportchip.transportTypes.TRAM}
          lineNumber={lineNumber}
        />
      ))}
    </p>
  </div>
));

storiesOf('Components / Transportchip / Regional styles', module).add('Mannheim', () => (
  <div className="sg-components-transportationchip-list">
    <p>
      {['S1', 'S2', 'S3', 'S4', 'S6'].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.MANNHEIM}
          transportType={Transportchip.transportTypes.SBAHN}
          lineNumber={lineNumber}
        />
      ))}
    </p>
    <p>
      {[
        'STR 1',
        'STR 3',
        'STR 4',
        'STR 4A',
        'STR 5',
        'STR 5A',
        'STR 15',
        'STR 6',
        'STR 6A',
        'STR 7',
        'STR 8',
        'STR 9',
      ].map(lineNumber => (
        <Transportchip
          regionalStyle={Transportchip.regionalStyles.MANNHEIM}
          transportType={Transportchip.transportTypes.TRAM}
          lineNumber={lineNumber}
        />
      ))}
    </p>
  </div>
));
