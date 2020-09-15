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

## Local styles

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
<Transportchip name="S 1" /> {/* Default */}
<Transportchip name="S 1" zipCode="10115" /> {/* Berlin */}
<Transportchip name="S 1" zipCode="20000" /> {/* Hamburg */}
<Transportchip name="S 1" zipCode="60000" /> {/* Frankfurt */}
<Transportchip name="S 1" zipCode="68000" /> {/* Mannheim */}
<Transportchip name="S 1" zipCode="80000" /> {/* Munich */}
```

### Berlin/Brandenburg

#### S-Bahn Berlin GmbH

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

#### BVG

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

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'M1 M17 12 88'.split(' ').map((name) => (
  <Transportchip
    zipCode="10115"
    product={Transportchip.products.TRAM}
    name={name}
    showProductLogo // BVG styles must show the transport logo
  />
));
```

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'M11 M85 X7 X83 TXL 100 943 N1 N97'.split(' ').map((name) => (
  <Transportchip
    zipCode="10115"
    product={Transportchip.products.BUS}
    name={name}
    showProductLogo // BVG styles must show the transport logo
  />
));
```

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'F10 F12 F21 F22 F23'.split(' ').map((name) => (
  <Transportchip
    zipCode="10115"
    product={Transportchip.products.FERRY}
    name={name}
    showProductLogo // BVG styles must show the transport logo
  />
));
```

### Hamburg

#### S-Bahn Hamburg GmbH

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'S1 S11 S2 S21 S3 S31'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="20000"
      product={Transportchip.products.SBAHN}
      name={name}
    />
  ));
```

#### AKN Eisenbahn GmbH

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

#### Hamburger Hochbahn AG

```jsx { "props": { "className": "sg-components-transportationchip-list" } }
'U1 U2 U3 U4 U5'
  .split(' ')
  .map((name) => (
    <Transportchip
      zipCode="20000"
      product={Transportchip.products.UBAHN}
      name={name}
    />
  ));
```

#### Bus

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

#### Ferry

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
    product={Transportchip.products.UBAHN}
    name="U 3"
  />
  <Transportchip
    zipCode="20000"
    product={Transportchip.products.UBAHN}
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
