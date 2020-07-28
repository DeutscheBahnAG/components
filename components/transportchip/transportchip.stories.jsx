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
          <Transportchip name="U5" />
          <Transportchip name="ICE599" />
          <Transportchip name="RE13" />
          <Transportchip name="Str 4" />
          <Transportchip name="Bus 296" />
          <Transportchip name="Taxi" />
        </p>
      </div>
    </>
  ))
  .add('Canceled', () => (
    <>
      <div className="sg-components-transportationchip-list">
        <p>
          <Transportchip canceled name="U5" />
          <Transportchip canceled name="ICE599" />
          <Transportchip canceled name="RE13" />
          <Transportchip canceled name="Str 4" />
          <Transportchip canceled name="Bus 296" />
          <Transportchip canceled name="Taxi" />
        </p>
      </div>
    </>
  ))
  .add('Sizing', () => (
    <>
      <div className="sg-components-transportationchip-list">
        <p>
          Take a ride on <Transportchip name="S 1" /> today!
        </p>
        <p className="sg-text-style--title-m">
          Take a ride on <Transportchip name="S 1" /> today!
        </p>
        <p className="sg-text-style--title-xl">
          Take a ride on <Transportchip name="S 1" /> today!
        </p>
      </div>
      <div className="sg-components-transportationchip-list">
        <p>
          Take a boat trip with <Transportchip zipCode="20000" name="F62" /> in the Port of Hamburg
          today!
        </p>
        <p className="sg-text-style--title-m">
          Take a boat trip with <Transportchip zipCode="20000" name="F62" /> in the Port of Hamburg
          today!
        </p>
        <p className="sg-text-style--title-xl">
          Take a boat trip with <Transportchip zipCode="20000" name="F62" /> in the Port of Hamburg
          today!
        </p>
      </div>
      <div className="sg-components-transportationchip-list">
        <p>
          Do you remember U-Bahn <Transportchip zipCode="10000" name="U12" /> in Berlin?
        </p>
        <p className="sg-text-style--title-m">
          Do you remember U-Bahn <Transportchip zipCode="10000" name="U12" /> in Berlin?
        </p>
        <p className="sg-text-style--title-xl">
          Do you remember U-Bahn <Transportchip zipCode="10000" name="U12" /> in Berlin?
        </p>
      </div>
    </>
  ))
  .add('Linking', () => (
    <>
      <div className="sg-components-transportationchip-list">
        <p>
          Not linked: <Transportchip name="ICE 599" />
          <Transportchip zipCode="10000" name="S 1" />
          <Transportchip zipCode="80000" name="U7" />
        </p>
      </div>
      <div className="sg-components-transportationchip-list">
        <p>
          Click on the chip for more information:{' '}
          <Transportchip
            name="ICE 599"
            href="https://reiseauskunft.bahn.de/bin/traininfo.exe/dn/624477/471291/228714/93802/80"
          />
          <Transportchip zipCode="10000" name="S 1" href="https://SUBURBAN.berlin/liniennetz/" />
          <Transportchip zipCode="80000" name="U7" href="https://www.mvv-muenchen.de/" />
        </p>
      </div>
      <div className="sg-components-transportationchip-list">
        <p>
          Click on the chip for an JavaScript action:{' '}
          <Transportchip name="ICE 599" onClick={action('clicked')} />
          <Transportchip zipCode="10000" name="S 1" onClick={action('clicked')} />
          <Transportchip zipCode="80000" name="U7" onClick={action('clicked')} />
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
  .add('S-Bahn', () => <Transportchip name="S 1" />)
  .add('U-Bahn', () => <Transportchip name="U 1" />)
  .add('Tram', () => <Transportchip name="STR 1" />)
  .add('Metro Tram', () => <Transportchip name="STR M1" />)
  .add('Bus', () => <Transportchip name="Bus 1" />)
  .add('IC', () => <Transportchip name="IC 1" />)
  .add('EC', () => <Transportchip name="EC 1" />)
  .add('ICE', () => <Transportchip name="ICE 1" />)
  .add('Ferry', () => <Transportchip name="F 1" />)
  .add('Taxi', () => <Transportchip name="Taxi" />)
  .add('RegionalExpress', () => <Transportchip name="RE 1" />)
  .add('Regionalbahn', () => <Transportchip name="RB 1" />);

storiesOf('Components / Transportchip / Manual', module)
  .addDecorator(withReadme(transportchipReadme))
  .add('S-Bahn', () => <Transportchip product={Transportchip.products.SUBURBAN} name="S 1" />)
  .add('U-Bahn', () => <Transportchip product={Transportchip.products.SUBWAY} name="U 1" />)
  .add('Tram', () => <Transportchip product={Transportchip.products.TRAM} name="STR 1" />)
  .add('Metro Tram', () => <Transportchip product={Transportchip.products.TRAM} name="STR M1" />)
  .add('Bus', () => <Transportchip product={Transportchip.products.BUS} name="Bus 1" />)
  .add('IC', () => <Transportchip product={Transportchip.products.IC} name="IC 1" />)
  .add('EC', () => <Transportchip product={Transportchip.products.EC} name="EC 1" />)
  .add('ICE', () => <Transportchip product={Transportchip.products.ICE} name="ICE 1" />)
  .add('Ferry', () => <Transportchip product={Transportchip.products.FERRY} name="F 1" />)
  .add('Taxi', () => <Transportchip product={Transportchip.products.TAXI} name="Taxi" />)
  .add('RegionalExpress', () => <Transportchip product={Transportchip.products.RE} name="RE 1" />)
  .add('Regionalbahn', () => <Transportchip product={Transportchip.products.RB} name="RB 1" />)
  .add('Bike sharing', () => (
    <Transportchip product={Transportchip.products.BIKESHARING} name="Bike sharing" />
  ))
  .add('Car sharing', () => (
    <Transportchip product={Transportchip.products.CARSHARING} name="Car sharing" />
  ))
  .add('Airplane', () => <Transportchip product={Transportchip.products.AIRPLANE} name="LH123" />)
  .add('Intercitybus', () => (
    <Transportchip product={Transportchip.products.INTERCITYBUS} name="123" />
  ))
  .add('Walking', () => <Transportchip product={Transportchip.products.WALKING} name="Walk" />);

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
      ].map(name => (
        <Transportchip zipCode="10000" product={Transportchip.products.SUBURBAN} name={name} />
      ))}
    </p>
    <p>
      {['U1', 'U12', 'U2', 'U3', 'U4', 'U5', 'U55', 'U6', 'U7', 'U8', 'U9'].map(name => (
        <Transportchip zipCode="10000" product={Transportchip.products.SUBWAY} name={name} />
      ))}
    </p>
    <p>
      {['M1', 'M17', '12', '88'].map(name => (
        <Transportchip zipCode="10000" product={Transportchip.products.TRAM} name={name} />
      ))}
    </p>
    <p>
      {['M11', 'M85', 'X7', 'X83', 'TXL', '100', '943', 'N1', 'N97'].map(name => (
        <Transportchip zipCode="10000" product={Transportchip.products.BUS} name={name} />
      ))}
    </p>
    <p>
      {['F10', 'F12', 'F21', 'F22', 'F23'].map(name => (
        <Transportchip zipCode="10000" product={Transportchip.products.FERRY} name={name} />
      ))}
    </p>
  </div>
));

storiesOf('Components / Transportchip / Regional styles', module).add('Hamburg', () => (
  <div className="sg-components-transportationchip-list">
    <p>
      {['S1', 'S11', 'S2', 'S21', 'S3', 'S31'].map(name => (
        <Transportchip zipCode="20000" product={Transportchip.products.SUBURBAN} name={name} />
      ))}
    </p>
    <p>
      {['AKN A1', 'AKN A2', 'AKN A3'].map(name => (
        <Transportchip zipCode="25000" product={Transportchip.products.REGIONAL} name={name} />
      ))}
    </p>
    <p>
      {['U1', 'U2', 'U3', 'U4', 'U5'].map(name => (
        <Transportchip zipCode="20000" product={Transportchip.products.SUBWAY} name={name} />
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
      ].map(name => (
        <Transportchip product={Transportchip.products.BUS} name={name} zipCode="20000" />
      ))}
    </p>
    <p>
      {['61', '62', '72', '73', '75'].map(name => (
        <Transportchip product={Transportchip.products.FERRY} name={name} zipCode="20000" />
      ))}
    </p>
  </div>
));

storiesOf('Components / Transportchip / Regional styles', module).add('München', () => (
  <div className="sg-components-transportationchip-list">
    <p>
      {['S1', 'S2', 'S3', 'S4', 'S6', 'S7', 'S8', 'S20'].map(name => (
        <Transportchip product={Transportchip.products.SUBURBAN} name={name} zipCode="80000" />
      ))}
    </p>
    <p>
      {['U1', 'U2', 'U3', 'U4', 'U5', 'U6', 'U7', 'U8'].map(name => (
        <Transportchip product={Transportchip.products.SUBWAY} name={name} zipCode="80000" />
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
      ].map(name => (
        <Transportchip product={Transportchip.products.TRAM} name={name} zipCode="80000" />
      ))}
    </p>
    <p>
      {['X30', 'X98', '50', '63', '100', '199', 'N40', 'N81'].map(name => (
        <Transportchip product={Transportchip.products.BUS} name={name} zipCode="80000" />
      ))}
    </p>
  </div>
));

storiesOf('Components / Transportchip / Regional styles', module).add('Frankfurt (Main)', () => (
  <div className="sg-components-transportationchip-list">
    <p>
      {['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9'].map(name => (
        <Transportchip product={Transportchip.products.SUBURBAN} name={name} zipCode="60000" />
      ))}
    </p>
    <p>
      {['U1', 'U2', 'U3', 'U4', 'U5', 'U6', 'U7', 'U8', 'U9'].map(name => (
        <Transportchip product={Transportchip.products.SUBWAY} name={name} zipCode="60000" />
      ))}
    </p>
    <p>
      {['12', '14', '15', '16', '17', '18', '19', '20', '21'].map(name => (
        <Transportchip product={Transportchip.products.TRAM} name={name} zipCode="60000" />
      ))}
    </p>
  </div>
));

storiesOf('Components / Transportchip / Regional styles', module).add('Nürnberg', () => (
  <div className="sg-components-transportationchip-list">
    <p>
      {['S1', 'S2', 'S3', 'S4'].map(name => (
        <Transportchip product={Transportchip.products.SUBURBAN} name={name} zipCode="90000" />
      ))}
    </p>
    <p>
      {['U1', 'U2', 'U3'].map(name => (
        <Transportchip product={Transportchip.products.SUBWAY} name={name} zipCode="90000" />
      ))}
    </p>
    <p>
      {['4', '5', '6', '7', '8'].map(name => (
        <Transportchip product={Transportchip.products.TRAM} name={name} zipCode="90000" />
      ))}
    </p>
    <p>
      {['20', '31', '43', '56', '99'].map(name => (
        <Transportchip product={Transportchip.products.BUS} name={name} zipCode="90000" />
      ))}
    </p>
  </div>
));

storiesOf('Components / Transportchip / Regional styles', module).add('Fürth', () => (
  <div className="sg-components-transportationchip-list">
    <p>
      {['S1'].map(name => (
        <Transportchip product={Transportchip.products.SUBURBAN} name={name} zipCode="90000" />
      ))}
    </p>
    <p>
      {['U1'].map(name => (
        <Transportchip product={Transportchip.products.SUBWAY} name={name} zipCode="90000" />
      ))}
    </p>
    <p>
      {['33', '67', '171', '179', '189'].map(name => (
        <Transportchip product={Transportchip.products.BUS} name={name} zipCode="90000" />
      ))}
    </p>
  </div>
));

storiesOf('Components / Transportchip / Regional styles', module).add('Köln', () => (
  <div className="sg-components-transportationchip-list">
    <p>
      {['S11', 'S12', 'S13', 'S19', 'S23'].map(name => (
        <Transportchip zipCode="50667" product={Transportchip.products.SUBURBAN} name={name} />
      ))}
    </p>
    <p>
      {[
        'STR 1',
        'STR 3',
        'STR 4',
        'STR 5',
        'STR 7',
        'STR 9',
        'STR 12',
        'STR 13',
        'STR 15',
        'STR 16',
        'STR 17',
        'STR 18',
      ].map(name => (
        <Transportchip zipCode="50667" product={Transportchip.products.TRAM} name={name} />
      ))}
    </p>
  </div>
));

storiesOf('Components / Transportchip / Regional styles', module).add('Mannheim', () => (
  <div className="sg-components-transportationchip-list">
    <p>
      {['S11', 'S12', 'S13', 'S19', 'S23'].map(name => (
        <Transportchip product={Transportchip.products.SUBURBAN} name={name} zipCode="68000" />
      ))}
    </p>
    <p>
      {['1', '3', '4', '5', '7', '9', '12', '13', '15', '16', '17', '18'].map(name => (
        <Transportchip product={Transportchip.products.TRAM} name={name} zipCode="68000" />
      ))}
    </p>
  </div>
));

storiesOf('Components / Transportchip / Regional styles', module).add('Mannheim', () => (
  <div className="sg-components-transportationchip-list">
    <p>
      {['S1', 'S2', 'S3', 'S4', 'S6'].map(name => (
        <Transportchip product={Transportchip.products.SUBURBAN} name={name} zipCode="68000" />
      ))}
    </p>
    <p>
      {[
        'STR 1',
        'STR 3',
        'STR 4',
        'RNV 4A',
        'RNV 5',
        'RNV 5A',
        'RNV 15',
        'RNV 6',
        'RNV 6A',
        'RNV 7',
        'RNV 8',
        'RNV 9',
        'RNV 15',
      ].map(name => (
        <Transportchip product={Transportchip.products.TRAM} name={name} zipCode="68000" />
      ))}
    </p>
  </div>
));

storiesOf('Components / Transportchip / Regional styles', module).add('Heidelberg', () => (
  <div className="sg-components-transportationchip-list">
    <p>
      {['S1', 'S2', 'S3', 'S4', 'S5', 'S51'].map(name => (
        <Transportchip product={Transportchip.products.SUBURBAN} name={name} zipCode="68000" />
      ))}
    </p>
    <p>
      {['RNV 5', 'STR 21', 'STR 21A', 'STR 22', 'STR 23', 'STR 24', 'STR 26'].map(name => (
        <Transportchip product={Transportchip.products.TRAM} name={name} zipCode="68000" />
      ))}
    </p>
  </div>
));

storiesOf('Components / Transportchip / Regional styles', module).add(
  'Ludwigshafen (Rhein)',
  () => (
    <div className="sg-components-transportationchip-list">
      <p>
        {['S1', 'S2', 'S3', 'S4', 'S6'].map(name => (
          <Transportchip product={Transportchip.products.SUBURBAN} name={name} zipCode="68000" />
        ))}
      </p>
      <p>
        {['RNV 4A', 'RNV 5', 'RNV 5A', 'RNV 15', 'RNV 6', 'RNV 6A', 'RNV 7', 'RNV 9'].map(name => (
          <Transportchip product={Transportchip.products.TRAM} name={name} zipCode="68000" />
        ))}
      </p>
    </div>
  )
);

storiesOf('Components / Transportchip / Regional styles', module).add('Bremen', () => (
  <div className="sg-components-transportationchip-list">
    <p>
      {['NWB RS1', 'NWB RS2', 'NWB RS3', 'NWB RS4'].map(name => (
        <Transportchip zipCode="28000" product={Transportchip.products.SUBURBAN} name={name} />
      ))}
    </p>
    <p>
      {['STR 1', 'STR 2', 'STR 3', 'STR 4', 'STR 5', 'STR 6', 'STR 8', 'STR 10'].map(name => (
        <Transportchip zipCode="28000" product={Transportchip.products.TRAM} name={name} />
      ))}
    </p>
    <p>
      {['STR N1', 'STR N4', 'STR N10'].map(name => (
        <Transportchip zipCode="28000" product={Transportchip.products.TRAM} name={name} />
      ))}
    </p>
    <p>
      {[
        'BUS 20',
        'BUS 21',
        'BUS 22',
        'BUS 24',
        'BUS 25',
        'BUS 26',
        'BUS 27',
        'BUS 28',
        'BUS 29',
        'BUS 31',
        'BUS 33',
        'BUS 34',
        'BUS 37',
        'BUS 38',
        'BUS 39',
        'BUS 40',
        'BUS 41',
        'BUS 42',
        'BUS 44',
        'BUS 52',
        'BUS 55',
        'BUS 57',
        'BUS 58',
        'BUS 61',
        'BUS 62',
        'BUS 63',
        'BUS 65',
        'BUS 66',
        'BUS 80',
        'BUS 81',
        'BUS 82',
        'BUS 90',
        'BUS 91',
        'BUS 92',
        'BUS 93',
        'BUS 94',
        'BUS 95',
        'BUS 96',
        'BUS 98',
      ].map(name => (
        <Transportchip zipCode="28000" product={Transportchip.products.BUS} name={name} />
      ))}
    </p>
    <p>
      {['BUS N3', 'BUS N5', 'BUS N6', 'BUS N7', 'BUS N9', 'BUS N94'].map(name => (
        <Transportchip zipCode="28000" product={Transportchip.products.BUS} name={name} />
      ))}
    </p>
    <p>
      {['BUS 101', 'BUS 102', 'BUS 120'].map(name => (
        <Transportchip zipCode="28000" product={Transportchip.products.BUS} name={name} />
      ))}
    </p>
  </div>
));
