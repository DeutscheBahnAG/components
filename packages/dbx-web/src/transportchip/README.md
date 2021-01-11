# Transportchip

```js
import { Transportchip } from '@bahn-x/dbx-web';
```

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
<Transportchip name="S 1" />
<Transportchip name="ICE 234" />
```

## Automatic detection

The automatic detection is based on the name and works for many cases. It doesn’t matter if the name is written with (`S 1`) or without (`S1`) space.

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
<Transportchip name="S 1" />
<Transportchip name="U 1" />
<Transportchip name="STR 1" />
<Transportchip name="STR M1" />
<Transportchip name="Bus 1" />
<Transportchip name="IC 1" />
<Transportchip name="EC 1" />
<Transportchip name="ICE 1" />
<Transportchip name="F 1" />
<Transportchip name="Taxi" />
<Transportchip name="RE 1" />
<Transportchip name="RB 1" />
```

## Manual transport type

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
<Transportchip product={Transportchip.products.SUBURBAN} name="S 1" />
<Transportchip product={Transportchip.products.SUBWAY} name="U 1" />
<Transportchip product={Transportchip.products.TRAM} name="STR 1" />
<Transportchip product={Transportchip.products.TRAM} name="STR M1" />
<Transportchip product={Transportchip.products.BUS} name="Bus 1" />
<Transportchip product={Transportchip.products.IC} name="IC 1" />
<Transportchip product={Transportchip.products.EC} name="EC 1" />
<Transportchip product={Transportchip.products.ICE} name="ICE 1" />
<Transportchip product={Transportchip.products.FERRY} name="F 1" />
<Transportchip product={Transportchip.products.TAXI} name="Taxi" />
<Transportchip product={Transportchip.products.RE} name="RE 1" />
<Transportchip product={Transportchip.products.RB} name="RB 1" />
<Transportchip product={Transportchip.products.BIKESHARING} name="Bike sharing" />
<Transportchip product={Transportchip.products.CARSHARING} name="Car sharing" />
<Transportchip product={Transportchip.products.AIRPLANE} name="LH123" />
<Transportchip product={Transportchip.products.INTERCITYBUS} name="123" />
<Transportchip product={Transportchip.products.WALKING} name="Walk" />
```

## With transport logo

Local public transport lines can be displayed including their logo. This is helpful as the signage in the train stations/cities will often use those logos.

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
<Transportchip showProductLogo name="S 1" />
<Transportchip showProductLogo name="U 1" />
<Transportchip showProductLogo name="Str 1" />
<Transportchip showProductLogo name="Bus 1" />
<Transportchip showProductLogo name="F 1" />
```

## Cancelled trips

When a trip gets cancelled, the Transport chip gets greyed out. As in all our code, we do use American English (`canceled`) in contrast to our documentation and user interfaces in British English (‘cancelled’).

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
<Transportchip canceled name="U5" />
<Transportchip canceled name="ICE599" />
<Transportchip canceled name="RE13" />
<Transportchip canceled name="Str 4" />
<Transportchip canceled name="Bus 296" />
<Transportchip canceled name="Taxi" />
```

Those styles also apply on the product logo:

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
<Transportchip canceled showProductLogo name="S 25" />
<Transportchip canceled showProductLogo name="U5" />
<Transportchip canceled showProductLogo name="Str 4" />
<Transportchip canceled showProductLogo name="Bus 296" />
<Transportchip canceled showProductLogo name="F 62" />
```

On purpose the styles do invert contrast (usually the logo is white on dark background) and use an outline to make them look as ‘deactivated’ as possible.

Cancelled trips must be indicated with a [fatal Status](#/Components/Feedback/Status) message below:

```jsx noeditor
import { Status } from '@bahn-x/dbx-web';
<>
  <Transportchip canceled name="IC 123" />
  <div style={{ marginTop: 8 }}>
    <Status message="The train got cancelled" variant={Status.variants.FATAL} />
  </div>
</>;
```

## Local styles

Many cities and regions do have special colours defined, which help to identify the transport line easily. In addition, some products have a specific shape. An S-Bahn usually has a rounded left and right side which reflects the circular S-Bahn logo while an U-Bahn has straight sides adhering the U in a square.

We do use those local styles as they match the signage in the train stations especially in digital products which have a very local focus. Long-distance trips might prefer to use the default styles.

The local style is determined by the post code (`zipCode`) and the product type (`product`). The product type might be detected automatically by the `name`.

ℹ️ In this documentation we use the German names of cities (Cologne → Köln, Munich → München, Nuremberg → Nürnberg).

**Example:** Different colours of the line S 1 in different cities:

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
<Transportchip name="S 1" />                 {/* Default   */}
<Transportchip name="S 1" zipCode="10115" /> {/* Berlin    */}
<Transportchip name="S 1" zipCode="20000" /> {/* Hamburg   */}
<Transportchip name="S 1" zipCode="60000" /> {/* Frankfurt */}
<Transportchip name="S 1" zipCode="68000" /> {/* Mannheim  */}
<Transportchip name="S 1" zipCode="80000" /> {/* München   */}
```

### Berlin/Brandenburg

#### S-Bahn Berlin

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'S1 S2 S25 S26 S3 S41 S42 S46 S47 S5 S7 S75 S8 S85 S9'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="10115"
      product={Transportchip.products.SUBURBAN}
      name={name}
    />
  ));
```

#### U-Bahn Berlin

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'U1 U12 U2 U3 U4 U5 U55 U6 U7 U8 U9'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="10115"
      product={Transportchip.products.SUBWAY}
      name={name}
    />
  ));
```

#### Tram Berlin

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'M1 M17 12 88'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="10115"
      product={Transportchip.products.TRAM}
      name={name}
      showProductLogo
    />
  ));
```

#### Bus Berlin

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'M11 M85 X7 X83 TXL 100 943 N1 N97'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="10115"
      product={Transportchip.products.BUS}
      name={name}
      showProductLogo
    />
  ));
```

#### Ferry Berlin

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'F10 F12 F21 F22 F23'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="10115"
      product={Transportchip.products.FERRY}
      name={name}
      showProductLogo
    />
  ));
```

ℹ️ BVG styles for tram, bus and ferry must show the transport logo.

### Hamburg

#### S-Bahn Hamburg

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'S1 S11 S2 S21 S3 S31'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="20000"
      product={Transportchip.products.SUBURBAN}
      name={name}
    />
  ));
```

#### AKN Eisenbahn

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'AKN A1  AKN A2  AKN A3'
  .split('  ')
  .map((name) => (
    <Transportchip
      zipCode="25000"
      product={Transportchip.products.REGIONAL}
      name={name}
    />
  ));
```

AKN trains do have their own logo in Hamburg’s public transportation system. It will work in combination with the `zipCode` and `product` only:

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'AKN A1  AKN A2  AKN A3'
  .split('  ')
  .map((name) => (
    <Transportchip
      zipCode="25000"
      product={Transportchip.products.REGIONAL}
      name={name}
      showProductLogo
    />
  ));
```

#### Hochbahn Hamburg

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'U1 U2 U3 U4 U5'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="20000"
      product={Transportchip.products.SUBWAY}
      name={name}
    />
  ));
```

#### Bus Hamburg

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'1 29 X3 X86 31 37 111 978 600 688 837 8129 1705 8895'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="20000"
      product={Transportchip.products.BUS}
      name={name}
    />
  ));
```

#### Ferry Hamburg

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'61 62 72 73 75'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="20000"
      product={Transportchip.products.FERRY}
      name={name}
    />
  ));
```

In Hamburg, all transport products use the same width to align well. The ferry does have some whitespace on the left and right to adjust with S-Bahn, U-Bahn and bus styles.

```jsx noeditor
<div className="sg-components-transportationchip-list">
  <Transportchip
    zipCode="20000"
    product={Transportchip.products.SUBURBAN}
    name="S 1"
  />
  <Transportchip
    zipCode="20000"
    product={Transportchip.products.SUBURBAN}
    name="S 2"
  />
  <br />
  <Transportchip
    zipCode="20000"
    product={Transportchip.products.SUBWAY}
    name="U 3"
  />
  <Transportchip
    zipCode="20000"
    product={Transportchip.products.SUBWAY}
    name="U 4"
  />
  <br />
  <Transportchip
    zipCode="20000"
    product={Transportchip.products.BUS}
    name="29"
  />
  <Transportchip
    zipCode="20000"
    product={Transportchip.products.BUS}
    name="X3"
  />
  <br />
  <Transportchip
    zipCode="20000"
    product={Transportchip.products.FERRY}
    name="61"
  />
  <Transportchip
    zipCode="20000"
    product={Transportchip.products.FERRY}
    name="62"
  />
</div>
```

### München

#### S-Bahn München

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'S1 S2 S3 S4 S6 S7 S8 S20'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="80000"
      product={Transportchip.products.SUBURBAN}
      name={name}
    />
  ));
```

#### U-Bahn München

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'U1 U2 U3 U4 U5 U6 U7 U8'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="80000"
      product={Transportchip.products.SUBWAY}
      name={name}
    />
  ));
```

#### Tram München

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'12 16 17 18 19 20 21 23 25 27 28 29 E7 N17 N19 N20 N27'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="80000"
      product={Transportchip.products.TRAM}
      name={name}
    />
  ));
```

#### Bus München

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'X30 X98 50 63 100 199 N40 N81'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="80000"
      product={Transportchip.products.BUS}
      name={name}
    />
  ));
```

### Rhein-Main

#### S-Bahn Rhein-Main

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'S1 S2 S3 S4 S5 S6 S7 S8 S9'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="60000"
      product={Transportchip.products.SUBURBAN}
      name={name}
    />
  ));
```

#### U-Bahn Frankfurt (Main)

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'U1 U2 U3 U4 U5 U6 U7 U8 U9'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="60000"
      product={Transportchip.products.SUBWAY}
      name={name}
    />
  ));
```

#### Tram Frankfurt (Main)

(Default style)

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'12 14 15 16 17 18 19 20 21'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="60000"
      product={Transportchip.products.TRAM}
      name={name}
    />
  ));
```

### Köln

#### S-Bahn Köln

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'S11 S12 S13 S19 S23'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="50667"
      product={Transportchip.products.SUBURBAN}
      name={name}
    />
  ));
```

#### Stadtbahn Köln

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'STR 1  STR 3  STR 4  STR 5  STR 7  STR 9  STR 12  STR 13  STR 15  STR 16  STR 17  STR 18'
  .split('  ')
  .map((name) => (
    <Transportchip
      zipCode="50667"
      product={Transportchip.products.TRAM}
      name={name}
    />
  ));
```

### Nürnberg

The styles are shared with Fürth.

#### S-Bahn Nürnberg

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'S1 S2 S3 S4'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="90000"
      product={Transportchip.products.SUBURBAN}
      name={name}
    />
  ));
```

#### U-Bahn Nürnberg

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'U1 U2 U3'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="90000"
      product={Transportchip.products.SUBWAY}
      name={name}
    />
  ));
```

#### Tram Nürnberg

(Default style)

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'4 5 6 7 8'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="90000"
      product={Transportchip.products.TRAM}
      name={name}
    />
  ));
```

#### Bus Nürnberg

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'20 31 43 56 99'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="90000"
      product={Transportchip.products.BUS}
      name={name}
    />
  ));
```

### Fürth

The styles are shared with Nürnberg.

#### S-Bahn Fürth

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
<Transportchip
  zipCode="90000"
  product={Transportchip.products.SUBURBAN}
  name="S1"
/>
```

#### U-Bahn Fürth

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
<Transportchip
  zipCode="90000"
  product={Transportchip.products.SUBWAY}
  name="U1"
/>
```

#### Bus Fürth

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'33 67 171 179 189'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="90000"
      product={Transportchip.products.BUS}
      name={name}
    />
  ));
```

### Rhein-Neckar

#### S-Bahn Rhein-Neckar

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'S1 S2 S3 S33 S39 S4 S5 S51 S6'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="68000"
      product={Transportchip.products.SUBURBAN}
      name={name}
    />
  ));
```

#### Tram Mannheim

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'STR 1  STR 3  STR 4  RNV 4A  RNV 5  RNV 5A  RNV 15  RNV 6  RNV 6A  RNV 7  RNV 8  RNV 9  RNV 15'
  .split('  ')
  .map((name) => (
    <Transportchip
      zipCode="68000"
      product={Transportchip.products.TRAM}
      name={name}
    />
  ));
```

#### Tram Ludwigshafen (Rhein)

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'RNV 4A  RNV 5  RNV 5A  RNV 15  RNV 6  RNV 6A  RNV 7  RNV 9'
  .split('  ')
  .map((name) => (
    <Transportchip
      zipCode="67000"
      product={Transportchip.products.TRAM}
      name={name}
    />
  ));
```

#### Tram Heidelberg

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'RNV 5  STR 21  STR 21A  STR 22  STR 23  STR 24  STR 26'
  .split('  ')
  .map((name) => (
    <Transportchip
      zipCode="69000"
      product={Transportchip.products.TRAM}
      name={name}
    />
  ));
```

### Bremen/Niedersachsen

#### Regio-S-Bahn Bremen/Niedersachsen

ℹ️ Despite the name this product does not use the S-Bahn logo.

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'NWB RS1  NWB RS2  NWB RS3  NWB RS4'
  .split('  ')
  .map((name) => (
    <Transportchip
      zipCode="28000"
      product={Transportchip.products.SUBURBAN}
      name={name}
    />
  ));
```

#### Tram Bremen

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'STR 1  STR 2  STR 3  STR 4  STR 5  STR 6  STR 8  STR 10  STR N1  STR N4  STR N10'
  .split('  ')
  .map((name) => (
    <Transportchip
      zipCode="28000"
      product={Transportchip.products.TRAM}
      name={name}
    />
  ));
```

#### Bus Bremen

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'BUS 20  BUS 21  BUS 22  BUS 24  BUS 25  BUS 26  BUS 27  BUS 28  BUS 29  BUS 31  BUS 33  BUS 34  BUS 37  BUS 38  BUS 39  BUS 40  BUS 41  BUS 42  BUS 44  BUS 52  BUS 55  BUS 57  BUS 58  BUS 61  BUS 62  BUS 63  BUS 65  BUS 66  BUS 80  BUS 81  BUS 82  BUS 90  BUS 91  BUS 92  BUS 93  BUS 94  BUS 95  BUS 96  BUS 98  BUS N3  BUS N5  BUS N6  BUS N7  BUS N9  BUS N94  BUS 101  BUS 102  BUS 120'
  .split('  ')
  .map((name) => (
    <Transportchip
      zipCode="28000"
      product={Transportchip.products.BUS}
      name={name}
    />
  ));
```
