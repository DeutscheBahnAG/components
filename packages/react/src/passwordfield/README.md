# Passwordfield

```js
import { Passwordfield } from '@db-design/react';
```

```jsx
<Passwordfield />
```

<!-- Auto-generated content following, DO NOT update by hand! -->
<!-- START props-table -->

## Props

<details>
  <summary class="db-props-toggle">Show/hide component props</summary>
  <table class="db-props-table">
    <thead>
      <tr>
        <th>Prop name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>concealed</strong></td>
        <td><code>boolean</code></td>
        <td>false</td>
        <td>true</td>
        <td><p>Conceales text like ‘···’</p></td>
      </tr>
      <tr>
        <td><strong>labels</strong></td>
        <td><code>{ showPassword: string; concealPassword: string; }</code></td>
        <td>false</td>
        <td></td>
        <td><p>Translations</p></td>
      </tr>
      <tr>
        <td><strong>type</strong></td>
        <td><code>&quot;number&quot; | &quot;textarea&quot; | &quot;text&quot; | &quot;password&quot; | &quot;email&quot; | &quot;tel&quot; | &quot;url&quot; | &quot;search&quot;</code></td>
        <td>false</td>
        <td></td>
        <td><p>Type of the &lt;input&gt; or define a &lt;textarea&gt;</p></td>
      </tr>
      <tr>
        <td><strong>size</strong></td>
        <td><code>ResponsiveType&lt;&quot;s&quot; | &quot;m&quot; | &quot;l&quot; | &quot;xl&quot;&gt;</code></td>
        <td>false</td>
        <td></td>
        <td><p>The size of the Textfield</p></td>
      </tr>
      <tr>
        <td><strong>className</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td><p>Additional class names</p></td>
      </tr>
      <tr>
        <td><strong>value</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td><p>The user input</p></td>
      </tr>
      <tr>
        <td><strong>unit</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td><p>A unit such as a currency or <code>%</code></p></td>
      </tr>
      <tr>
        <td><strong>prefix</strong></td>
        <td><code>ReactNode</code></td>
        <td>false</td>
        <td></td>
        <td><p>Content before the input (which is not a unit)</p></td>
      </tr>
      <tr>
        <td><strong>suffix</strong></td>
        <td><code>ReactNode</code></td>
        <td>false</td>
        <td></td>
        <td><p>Content after the input (which is not a unit)</p></td>
      </tr>
      <tr>
        <td><strong>inlineLabel</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td><strong>htmlSize</strong></td>
        <td><code>number</code></td>
        <td>false</td>
        <td></td>
        <td><p>Width in characters (equals <code>&lt;input size=&quot;10&quot;&gt;</code>)</p></td>
      </tr>
      <tr>
        <td><strong>disabled</strong></td>
        <td><code>boolean</code></td>
        <td>false</td>
        <td>false</td>
        <td><p>Disable the field</p></td>
      </tr>
      <tr>
        <td><strong>onChange</strong></td>
        <td><code>FormEventHandler&lt;HTMLTextAreaElement&gt; | FormEventHandler&lt;HTMLInputElement&gt;</code></td>
        <td>false</td>
        <td></td>
        <td><p>Change handler</p></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

## Disabled

```jsx
<Passwordfield disabled />
```

```jsx
<Passwordfield disabled value="Disabled" />
```

```jsx
<Passwordfield disabled inlineLabel="Password" value="Disabled" />
```

## Inline label

For rare cases (e.g. a login form), it might make sense to use inline labels.
The DB Passwordfield offers full support.

Inline labels will cover the Passwordfield until it got filled out. Then they’ll
move on top of the input.

```jsx
<Passwordfield inlineLabel="Password" />
```

```jsx
<Passwordfield inlineLabel="Password" value="lea151" />
```

## Sizing

```jsx
<Passwordfield size="m" />
```

```jsx
<Passwordfield size="l" />
```

```jsx
<Passwordfield size="xl" />
```

Info: The `size` property will be ignored when using `inlineLabel` and will be fixed to `xl`.
